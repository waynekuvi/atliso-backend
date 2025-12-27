import { useState, useMemo } from 'react';
import { useChatStore } from '@/stores/chatStore';
import { Search, ChevronRight, X, ChevronLeft } from 'lucide-react';
import type { FAQItem } from '@/types';

// ... (keep data same)
const faqData: FAQItem[] = [
  {
    id: '1',
    title: 'Getting started',
    description: 'New to Atliso? Get up to speed with our intro articles and tutorials.',
    content: 'Welcome to our platform! Here you can learn how to set up your account, understand the basic features, and get started with your first project. Our comprehensive tutorials will guide you through every step of the process.',
    category: 'basics',
  },
  {
    id: '2',
    title: 'Dictionary',
    description: 'Confused by terminology? Find explanation of key terms in our dictionary.',
    content: 'Access your account settings and learn about all the terminology we use. From basic concepts to advanced features, our dictionary covers everything you need to know to use Atliso effectively.',
    category: 'account',
  },
  {
    id: '3',
    title: 'Pricing & billing',
    description: 'Learn how we charge for the usage of the Atliso platform.',
    content: 'Understand our transparent pricing structure, billing cycles, and payment options. We offer flexible plans to suit different needs, from individual users to enterprise teams.',
    category: 'billing',
  },
  {
    id: '4',
    title: 'Integrations',
    description: 'Learn how to connect Atliso with third party services.',
    content: 'Discover how to integrate Atliso with your favorite tools and services. We support integrations with Slack, Google Workspace, Microsoft Teams, and many more popular platforms.',
    category: 'integrations',
  },
  {
    id: '5',
    title: 'Advanced Features',
    description: 'Explore powerful features for power users and teams.',
    content: 'Take your productivity to the next level with advanced features like automation workflows, custom templates, advanced analytics, and team collaboration tools.',
    category: 'advanced',
  },
  {
    id: '6',
    title: 'Security & Privacy',
    description: 'Learn how we protect your data and ensure your privacy.',
    content: 'Your security is our top priority. Learn about our encryption standards, data protection policies, compliance certifications, and how we keep your information safe.',
    category: 'security',
  },
  {
    id: '7',
    title: 'Mobile App Guide',
    description: 'Get the most out of Atliso on your mobile device.',
    content: 'Access Atliso anywhere with our mobile apps for iOS and Android. Learn about mobile-specific features, offline capabilities, and how to sync across devices.',
    category: 'mobile',
  },
  {
    id: '8',
    title: 'API Documentation',
    description: 'Build custom integrations with our comprehensive API.',
    content: 'Access our complete API documentation, code examples, SDKs, and developer resources. Build custom workflows and integrate Atliso into your existing systems.',
    category: 'development',
  },
];

export function HelpView() {
  const { setCurrentView, setIsOpen, customization } = useChatStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticle, setActiveArticle] = useState<FAQItem | null>(null);
  const supportLogo = customization?.supportLogo;
  
  const filteredFaqs = useMemo(() => {
    if (!searchQuery.trim()) return faqData;
    const query = searchQuery.toLowerCase();
    return faqData.filter(
      faq =>
        faq.title.toLowerCase().includes(query) ||
        faq.description.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const handleArticleClick = (faq: FAQItem) => {
    setActiveArticle(faq);
  };

  const handleBack = () => {
    if (activeArticle) {
      setActiveArticle(null);
    } else {
      setCurrentView('home');
    }
  };

  if (activeArticle) {
    return (
      <div className="flex flex-col h-full bg-white">
        <div className="min-h-[62px] px-5 py-4 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white z-10">
          <button style={{ marginLeft: '14px' }} onClick={handleBack} className="p-1 hover:bg-gray-100 rounded-full">
            <ChevronLeft className="w-5 h-5 text-gray-500" />
          </button>
          <span className="font-semibold text-[17px] text-gray-900 text-sm truncate max-w-[200px]">{activeArticle.title}</span>
          <button style={{ marginRight: '14px' }} onClick={() => setIsOpen(false)} className="p-1 hover:bg-gray-100 rounded-full">
            <X className="w-5 h-5 text-black-500" />
          </button>
        </div>
        <div style={{ padding: '16px' }} className="p-6 overflow-y-auto">
          <div className="flex items-center gap-2 mb-6">
            <div className="flex -space-x-1">
               {supportLogo ? (
                 <img 
                   src={supportLogo}
                   alt="Atliso Logo" 
                   className="w-6 h-6 rounded-full border border-white"
                 />
               ) : (
                 <div className="w-6 h-6 rounded-full bg-gray-200 border border-white"></div>
               )}
            </div>
            <p className="text-xs text-gray-500">Written by Atliso Team</p>
          </div>
          <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed">
            <p>{activeArticle.content}</p>
            <p className="mt-4">{activeArticle.description}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-gray-50/50">
      {/* Header */}
      <div style={{ paddingLeft: '14px', paddingRight: '14px' }} className="min-h-[62px]  px-5 py-4 bg-white border-b border-gray-100 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <button onClick={() => setCurrentView('home')} className="p-1 hover:bg-gray-100 rounded-full">
            <ChevronLeft className="w-5 h-5 text-gray-500" />
          </button>
          <h2 style={{ marginLeft: '130px' }} className="text-[17px] font-semibold text-gray-900">Help</h2>
        </div>
        <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-gray-100 rounded-full">
          <X className="w-5 h-5 text-black-500" />
        </button>
      </div>

      {/* Search */}
      <div style={{ paddingLeft: '14px', paddingRight: '14px',  marginBottom: '20px' }} className="bg-white px-5 py-4 border-b border-gray-100">
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
          style={{ paddingLeft: '32px', height: '40px' }}
            type="text"
            placeholder="Search for help"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg text-[15px] focus:outline-none focus:ring-2 focus:ring-black-500/20 focus:bg-white border border-transparent focus:border-black-500 transition-all placeholder:text-gray-500"
          />
        </div>
      </div>
      
      {/* Collection Header */}
      <div style={{ paddingLeft: '14px', paddingRight: '14px' }} className="px-5 py-4 bg-gray-50/50">
        <h3 className="font-semibold text-gray-900 text-[15px]">{filteredFaqs.length} collections</h3>
      </div>
      
      {/* Collections List */}
      <div style={{cursor: 'pointer', paddingLeft: '14px', paddingRight: '14px', paddingTop: '6px', }} className="flex-1 bg-white overflow-y-auto">
        <div className="divide-y divide-gray-100">
          {filteredFaqs.map((faq) => (
            <button
              key={faq.id}
              onClick={() => handleArticleClick(faq)}
              className="w-full px-5 py-5 text-left hover:bg-gray-50 transition-colors group flex items-start justify-between gap-4"
            >
              <div style={{marginTop: '18px' }} className="space-y-3.5">
                <h3 className="text-[15px] font-semibold text-gray-900 group-hover:text-black-600 transition-colors">
                  {faq.title}
                </h3>
                <p className="text-[14px] text-gray-500 leading-normal">
                  {faq.description}
                </p>
                <p className="text-[13px] text-gray-400 pt-1">12 articles</p>
              </div>
              <ChevronRight className="w-5 h-5 text-black-500/60 shrink-0 mt-1" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
