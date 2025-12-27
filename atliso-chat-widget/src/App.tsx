import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ChatWidget } from './components/ChatWidget';
import { AdminDashboard } from './components/AdminDashboard';
import { ProspectDemo } from './components/ProspectDemo';
import { useChatStore } from './stores/chatStore';
import type { MountOptions } from './types';

// Development configuration
const devOptions: MountOptions = {
  webhookUrl: 'http://localhost:8000/webhook/chatbot',
  customization: {
    gradient: {
      color1: '#0D1321', // black-600
      color2: '#2D3142', // Violet-600
      color3: '#4A5568',
      color4: '#7C8595',
    },
    logo: 'https://res.cloudinary.com/dwjvtgiid/image/upload/v1766321945/image_42_s2rakp.png', // Placeholder
    supportLogo: 'https://res.cloudinary.com/dwjvtgiid/image/upload/v1764419666/logo-white_x64htk.svg', // Placeholder
    avatars: [
      'https://res.cloudinary.com/dwjvtgiid/image/upload/v1762618487/freepik__the-style-is-candid-image-photography-with-natural__92271_i3wbbw.png',
      'https://res.cloudinary.com/dwjvtgiid/image/upload/v1762618487/freepik__the-style-is-candid-image-photography-with-natural__92272_kt5ypq.png',
      'https://res.cloudinary.com/dwjvtgiid/image/upload/v1762618487/freepik__the-style-is-candid-image-photography-with-natural__31122_lpgfhk.png',
    ],
  },
};

const DemoPage = () => (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    <div className="text-center max-w-lg">
      <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
        Atliso Chat Widget
      </h1>
      <p className="text-gray-600 text-lg mb-8">
        The new widget UI is now live in the bottom right corner.
      </p>
      <Link
        to="/admin/analytics"
        className="text-indigo-600 font-semibold hover:underline bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200"
      >
        View Analytics Dashboard →
      </Link>
    </div>

    {/* Chat Widget */}
    <ChatWidget options={devOptions} />
  </div>
);

function App() {
  // No auto-creation of conversations on load
  useChatStore();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<DemoPage />} />
        <Route path="/admin/analytics" element={<AdminDashboard />} />
        <Route path="/prospect-demo" element={<ProspectDemo />} />
      </Routes>
    </Router>
  );
}

export default App;
