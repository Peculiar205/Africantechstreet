import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Minimize2, Sparkles, Bot } from 'lucide-react';
import { GoogleGenAI, Chat } from "@google/genai";

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([
    { role: 'model', text: 'Hello! I am the ATS AI Assistant. Ask me anything about our mission, zero-equity funding, or how to join the movement.' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  // Initialize Chat with System Instruction
  useEffect(() => {
    if (!process.env.API_KEY) {
      console.warn("Gemini API Key is missing");
      return;
    }

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      chatRef.current = ai.chats.create({
        model: 'gemini-3-pro-preview',
        config: {
          systemInstruction: `You are the official AI assistant for African Tech Street (ATS). 
          ATS is a digital syndicate empowering African tech innovators, creators, and founders.
          
          CORE KNOWLEDGE BASE:
          - Mission: To fund 10,000+ startups and empower 10 million innovators.
          - Key Differentiator: We do NOT take equity. Founders keep 100% ownership.
          - Funding Model: We use revenue pooling from social media monetization (TikTok, YouTube) and community solidarity.
          - Target Audience: Tech Founders, Content Creators, and Investors/Partners.
          - Vision: A self-sustaining Pan-African digital economy.
          - Status: Pilot launching in Nigeria in 2025, expanding to Kenya, Ghana, South Africa.
          - Contact: hello@africantechstreet.com.
          
          TONE:
          - Inspiring, professional, helpful, and community-focused. 
          - Keep answers concise and readable. Use emojis sparingly but effectively.`
        }
      });
    } catch (error) {
      console.error("Failed to initialize Gemini chat", error);
    }
  }, []);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || !chatRef.current) return;

    const userMsg = inputValue;
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const response = await chatRef.current.sendMessage({ message: userMsg });
      const responseText = response.text || "I'm not sure how to answer that right now, but I'm learning!";
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm having trouble connecting to the network. Please try again in a moment." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center ${isOpen ? 'bg-slate-800 text-white rotate-90' : 'bg-ats-orange text-white'}`}
        aria-label="Toggle Chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={28} />}
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-24 right-6 z-50 w-[90vw] md:w-96 max-h-[600px] h-[70vh] flex flex-col bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
        
        {/* Header */}
        <div className="bg-gradient-to-r from-ats-green to-teal-700 p-4 flex justify-between items-center text-white shrink-0">
          <div className="flex items-center gap-2">
            <div className="bg-white/20 p-1.5 rounded-lg">
              <Bot size={20} className="text-white" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-sm leading-tight">ATS Assistant</h3>
              <p className="text-[10px] text-green-100 opacity-90 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span> Online
              </p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-lg transition-colors">
            <Minimize2 size={18} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4">
            {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] p-3.5 text-sm leading-relaxed shadow-sm ${
                        msg.role === 'user' 
                        ? 'bg-ats-orange text-white rounded-2xl rounded-tr-none' 
                        : 'bg-white border border-slate-200 text-slate-700 rounded-2xl rounded-tl-none'
                    }`}>
                        {msg.text}
                    </div>
                </div>
            ))}
            {isLoading && (
                <div className="flex justify-start animate-fade-in-up">
                    <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-2">
                        <Loader2 size={16} className="animate-spin text-ats-green" />
                        <span className="text-xs text-slate-400 font-medium">Thinking...</span>
                    </div>
                </div>
            )}
            <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-slate-100 flex gap-2 shrink-0">
            <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about ATS..."
                className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-ats-orange focus:ring-1 focus:ring-ats-orange transition-all"
            />
            <button 
                type="submit" 
                disabled={isLoading || !inputValue.trim()}
                className="bg-ats-green hover:bg-ats-greenLight text-white p-2.5 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
            >
                <Send size={18} />
            </button>
        </form>
      </div>
    </>
  );
};