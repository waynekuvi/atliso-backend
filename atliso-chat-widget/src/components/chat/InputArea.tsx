import { useState, useRef, useEffect } from 'react';
import { useChatStore } from '@/stores/chatStore';
import { cn } from '@/utils/cn';
import { Paperclip, Mic, ArrowUp, X, Zap } from 'lucide-react';
import { CommandMenu } from './CommandMenu';

export function InputArea() {
  const { sendMessage, isTyping, getActiveThread } = useChatStore();

  const thread = getActiveThread();
  const handoffStatus = thread?.handoff_status || 'none';

  // Show waiting UI when handoff is 'waiting' (agent not yet replied)
  const isWaitingForAgent = handoffStatus === 'waiting';

  const isDisabled = isTyping;
  const placeholderText = "Message...";

  // ALL HOOKS MUST BE DECLARED BEFORE ANY CONDITIONAL RETURNS
  const [message, setMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  // @ts-ignore - audioLevel is used for audio level monitoring in recording animation
  const [audioLevel, setAudioLevel] = useState(0);
  const [uploadedImages, setUploadedImages] = useState<Array<{ id: string, url: string, name: string }>>([]);
  const [isCommandMenuOpen, setIsCommandMenuOpen] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const recognitionRef = useRef<unknown>(null);

  // Auto-resize textarea
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = Math.min(inputRef.current.scrollHeight, 200) + 'px';
    }
  }, [message]);

  // Stop recording helper (hoisted so cleanup can reference it safely)
  const stopVoiceRecording = () => {
    const recog = recognitionRef.current as { stop?: () => void } | null;
    if (recog?.stop) {
      recog.stop();
    }
    recognitionRef.current = null;
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current = null;
    }
    setIsRecording(false);
    setAudioLevel(0);
  };

  // Cleanup recording on unmount
  useEffect(() => {
    return () => {
      if (isRecording) {
        stopVoiceRecording();
      }
    };
  }, [isRecording]);

  // CONDITIONAL RETURN AFTER ALL HOOKS
  if (isWaitingForAgent) {
    return (
      <div style={{ paddingLeft: '14px', paddingRight: '14px', paddingBottom: '20px' }} className="p-5 bg-transparent shrink-0">
        <div className="flex items-center justify-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-200">
          <div className="animate-spin rounded-full h-4 w-4 border-2 border-indigo-500 border-t-transparent"></div>
          <p className="text-sm font-medium text-gray-500">Waiting for Human Agent...</p>
        </div>
      </div>
    );
  }

  const handleSend = () => {
    const text = message.trim();
    if (!text || isDisabled) return;

    // Handle attachments - send first image as attachment, others as text references
    if (uploadedImages.length > 0) {
      const firstImage = uploadedImages[0];
      const attachment = {
        name: firstImage.name,
        size: 0,
        type: 'image',
        dataUrl: firstImage.url
      };

      let messageText = text;
      if (uploadedImages.length > 1) {
        const otherImageNames = uploadedImages.slice(1).map(img => img.name).join(', ');
        messageText = `${text} [Also attached: ${otherImageNames}]`;
      }

      sendMessage(messageText, { type: 'attachment', attachment });
    } else {
      sendMessage(text);
    }

    setMessage('');
    setUploadedImages([]); // Clear uploaded images after sending
    inputRef.current?.focus();
  };

  const handleFileAttachment = () => {
    fileInputRef.current?.click();
  };

  const handleCommandSelect = (action: string) => {
    sendMessage(action);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      // Create image preview
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        const newImage = {
          id: Date.now().toString(),
          url: imageUrl,
          name: file.name
        };
        setUploadedImages(prev => [...prev, newImage]);
      };
      reader.readAsDataURL(file);
    } else if (file) {
      // Show error for non-image files
      setMessage(prev => prev + ' [Please select only image files]');
    }
  };

  const removeImage = (imageId: string) => {
    setUploadedImages(prev => prev.filter(img => img.id !== imageId));
  };

  // Play a quick, subtle chime indicating recording is ready
  const playReadyChime = async () => {
    try {
      const win = window as unknown as { AudioContext?: typeof AudioContext; webkitAudioContext?: typeof AudioContext };
      const Ctor = win.AudioContext || win.webkitAudioContext;
      if (!Ctor) return;
      const ctx = new Ctor();
      const duration = 0.12; // 120 ms
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = 880; // A5 tone
      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.15, ctx.currentTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
      // Close the context shortly after to free resources
      setTimeout(() => ctx.close(), 250);
    } catch {
      // Ignore audio errors silently
    }
  };

  const startVoiceRecording = async () => {
    try {
      // Reset transcript for new recording
      setTranscript('');

      // Request microphone access
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      // Set up Web Speech API for real-time transcription
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = 'en-US';

        console.log('Speech recognition initialized');

        recognition.onstart = () => {
          console.log('Speech recognition started');
          // Ready to receive speech – play a short confirmation chime
          playReadyChime();
        };

        recognition.onresult = (event: any) => {
          console.log('Speech recognition result:', event);
          let finalTranscript = '';
          let interimTranscript = '';

          for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;
            console.log(`Transcript part ${i}:`, transcript, 'isFinal:', event.results[i].isFinal);
            if (event.results[i].isFinal) {
              finalTranscript += transcript + ' ';
            } else {
              interimTranscript += transcript;
            }
          }

          // Update transcript state and message
          setTranscript(prev => prev + finalTranscript);
          const fullMessage = (transcript + finalTranscript + interimTranscript).trim();
          console.log('Setting message to:', fullMessage);
          setMessage(fullMessage);
        };

        recognition.onerror = (event: any) => {
          console.error('Speech recognition error:', event.error);
          console.error('Error details:', event);
          stopVoiceRecording();
        };

        recognition.onend = () => {
          console.log('Speech recognition ended');
        };

        recognitionRef.current = recognition;
        recognition.start();
      } else {
        console.error('Speech recognition not supported in this browser');
        setMessage(prev => prev + ' [Voice recording not supported in this browser]');
      }

      // Monitor audio levels for animation
      const audioContext = new AudioContext();
      const analyser = audioContext.createAnalyser();
      const microphone = audioContext.createMediaStreamSource(stream);
      microphone.connect(analyser);

      const updateAudioLevel = () => {
        const dataArray = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(dataArray);
        const average = dataArray.reduce((a, b) => a + b) / dataArray.length;
        const normalizedLevel = average / 255; // Normalize to 0-1
        setAudioLevel(normalizedLevel);

        // Log audio level for debugging (optional)
        if (normalizedLevel > 0.1) {
          console.log('Audio level:', normalizedLevel);
        }

        if (isRecording) {
          requestAnimationFrame(updateAudioLevel);
        }
      };

      updateAudioLevel();

      // Store media recorder reference
      mediaRecorderRef.current = new MediaRecorder(stream);
      setIsRecording(true);

    } catch (error) {
      console.error('Error accessing microphone:', error);
      // Fallback: just show a message that voice recording is not available
      setMessage(prev => prev + ' [Voice recording not available in this browser]');
    }
  };



  const toggleVoiceRecording = () => {
    if (isRecording) {
      stopVoiceRecording();
    } else {
      startVoiceRecording();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div style={{ paddingLeft: '14px', paddingRight: '14px', paddingBottom: '20px' }} className="p-5 bg-transparent shrink-0 relative">
      <CommandMenu
        isOpen={isCommandMenuOpen}
        onClose={() => setIsCommandMenuOpen(false)}
        onSelect={handleCommandSelect}
      />

      {/* Elegant keyframe animations */}
      <style>{`
        @keyframes rainbow-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(96, 165, 250, 0.4),
                        0 0 40px rgba(168, 85, 247, 0.2);
          }
          33% {
            box-shadow: 0 0 20px rgba(168, 85, 247, 0.4),
                        0 0 40px rgba(236, 72, 153, 0.2);
          }
          66% {
            box-shadow: 0 0 20px rgba(236, 72, 153, 0.4),
                        0 0 40px rgba(96, 165, 250, 0.2);
          }
        }
        
        @keyframes pulse-scale {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        
        .recording-border {
          position: relative;
          animation: rainbow-glow 3s ease-in-out infinite;
        }
        
        .recording-border::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 1rem;
          padding: 2px;
          background: linear-gradient(
            90deg,
            rgba(96, 165, 250, 0.5),
            rgba(168, 85, 247, 0.5),
            rgba(236, 72, 153, 0.5),
            rgba(96, 165, 250, 0.5)
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: pulse-scale 2s ease-in-out infinite;
          pointer-events: none;
        }
        
        /* Hide scrollbar completely */
        textarea::-webkit-scrollbar {
          display: none;
        }
        textarea {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        onChange={handleFileChange}
        style={{ display: 'none' }}
        accept="image/*"
      />

      {/* Image Preview Area */}
      {uploadedImages.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3 animate-fade-in">
          {uploadedImages.map((image) => (
            <div key={image.id} className="relative group animate-slide-in-left">
              <img
                src={image.url}
                alt={image.name}
                className="w-20 h-20 object-cover rounded-xl border-2 border-gray-200 cursor-pointer hover:border-gray-400 transition-all duration-200 shadow-sm hover:shadow-md"
              />
              <button
                onClick={() => removeImage(image.id)}
                className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-all duration-200 cursor-pointer shadow-lg focus:outline-none focus:ring-2 focus:ring-red-300 active:scale-90"
                aria-label="Remove image"
              >
                <X className="w-3.5 h-3.5" />
              </button>
              <div className="absolute inset-0 bg-black rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-200 pointer-events-none" />
            </div>
          ))}
        </div>
      )}

      <div
        style={{ paddingBottom: '44px' }}
        className={cn(
          "relative rounded-2xl bg-transparent border border-black transition-all duration-300",
          isRecording
            ? "recording-border"
            : ""
        )}
      >
        <textarea
          style={{ paddingLeft: '16px', paddingRight: '16px', paddingTop: '10px' }}
          ref={inputRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholderText}
          disabled={isDisabled}
          className="w-full pb-10 bg-transparent border-none text-[15px] leading-relaxed max-h-[200px] focus:outline-none resize-none placeholder:text-gray-400 min-h-[50px] transition-all duration-200"
          rows={1}
          aria-label="Message input"
        />

        {/* Bottom Toolbar */}
        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between">
          <div style={{ marginBottom: '-20px' }} className="flex items-center gap-5">
            <button
              onClick={() => setIsCommandMenuOpen(!isCommandMenuOpen)}
              className={cn(
                "p-2 rounded-lg transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300",
                isCommandMenuOpen ? "text-indigo-600 bg-indigo-50" : "text-gray-400 hover:text-gray-600 hover:bg-gray-100 active:bg-gray-200"
              )}
            >
              <Zap className="w-5 h-5 fill-current" />
            </button>
            <button
              onClick={handleFileAttachment}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              <Paperclip className="w-5 h-5" />
            </button>
            <button
              onClick={toggleVoiceRecording}
              className={cn(
                "p-2 rounded-lg transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-300",
                isRecording
                  ? "text-blue-600 bg-blue-50 scale-110"
                  : "text-gray-400 hover:text-gray-600 hover:bg-gray-100 active:bg-gray-200"
              )}
            >
              <Mic className="w-5 h-5" />
            </button>
          </div>

          <button
            style={{ padding: '8px 8px', justifyItems: 'center', borderRadius: '50px' }}
            onClick={handleSend}
            disabled={!message.trim() || isDisabled}
            className={cn(
              'p-1.5 rounded-lg transition-all cursor-pointer focus:outline-none',
              message.trim() && !isDisabled
                ? 'bg-black text-white shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 focus:ring-4 focus:ring-black/20'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            )}
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}