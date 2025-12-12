import React, { useState, useEffect } from 'react';
import { Target, Lightbulb, Heart, Users, CheckCircle2, Trophy, Globe, ArrowRight, Zap } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { TEAM_MEMBERS, MILESTONES } from '../constants';

// Internal Stats Counter Component
const AnimatedCounter: React.FC<{ end: number; duration?: number; suffix?: string; label: string; isVisible: boolean }> = ({ 
  end, 
  duration = 2000, 
  suffix = "", 
  label,
  isVisible 
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime: number | null = null;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(step);
      } else {
        setCount(end); // Ensure exact end number
      }
    };

    animationFrame = window.requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);

  return (
    <div className="text-center p-8 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all transform hover:-translate-y-1">
      <div className="text-5xl md:text-6xl font-heading font-extrabold text-white mb-2 drop-shadow-sm">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-ats-orange font-bold uppercase tracking-widest text-xs">
        {label}
      </div>
    </div>
  );
};

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'values'>('mission');
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal();
  
  return (
    <section id="about" className="scroll-mt-28 bg-white overflow-hidden">
      
      {/* 1. Header Section */}
      <div className="relative py-24 bg-slate-50">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(#1E5E3A 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div ref={headerRef} className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block py-1 px-3 rounded-full bg-ats-orange/10 text-ats-orange font-bold text-xs uppercase tracking-wider mb-4 border border-ats-orange/20">
              Who We Are
            </span>
            <h2 className="font-heading font-bold text-4xl md:text-6xl text-slate-900 mb-6 leading-tight">
              Architects of a <span className="text-transparent bg-clip-text bg-gradient-to-r from-ats-green to-teal-600">New Digital Economy</span>
            </h2>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              African Tech Street (ATS) is a revolution dismantling barriers for African founders. We replace equity-greed with community support, ensuring innovation thrives without compromise.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Interactive DNA Section (Tabs) */}
      <div className="py-20 container mx-auto px-4 md:px-6">
        <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 overflow-hidden border border-slate-100 flex flex-col lg:flex-row min-h-[500px]">
          {/* Tabs Navigation */}
          <div className="lg:w-1/3 bg-slate-900 p-8 lg:p-12 flex flex-col justify-center space-y-2 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-800 to-slate-900 z-0"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-ats-green/20 rounded-full blur-3xl z-0"></div>

            <div className="relative z-10">
              <h3 className="text-white font-heading font-bold text-2xl mb-8 pl-4 border-l-4 border-ats-orange">Our DNA</h3>
              
              <button 
                onClick={() => setActiveTab('mission')}
                className={`w-full text-left p-5 rounded-xl transition-all duration-300 flex items-center gap-4 group ${activeTab === 'mission' ? 'bg-white text-slate-900 shadow-lg translate-x-2' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
              >
                <div className={`p-2 rounded-lg ${activeTab === 'mission' ? 'bg-ats-orange text-white' : 'bg-slate-800 text-slate-400 group-hover:text-white'}`}>
                  <Target size={20} />
                </div>
                <div>
                  <span className="font-bold text-lg block">Our Mission</span>
                  <span className={`text-xs ${activeTab === 'mission' ? 'text-slate-500' : 'text-slate-500'}`}>The goal we chase daily</span>
                </div>
              </button>

              <button 
                onClick={() => setActiveTab('vision')}
                className={`w-full text-left p-5 rounded-xl transition-all duration-300 flex items-center gap-4 group ${activeTab === 'vision' ? 'bg-white text-slate-900 shadow-lg translate-x-2' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
              >
                <div className={`p-2 rounded-lg ${activeTab === 'vision' ? 'bg-ats-orange text-white' : 'bg-slate-800 text-slate-400 group-hover:text-white'}`}>
                  <Lightbulb size={20} />
                </div>
                <div>
                  <span className="font-bold text-lg block">Our Vision</span>
                  <span className={`text-xs ${activeTab === 'vision' ? 'text-slate-500' : 'text-slate-500'}`}>The future we are building</span>
                </div>
              </button>

              <button 
                onClick={() => setActiveTab('values')}
                className={`w-full text-left p-5 rounded-xl transition-all duration-300 flex items-center gap-4 group ${activeTab === 'values' ? 'bg-white text-slate-900 shadow-lg translate-x-2' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
              >
                <div className={`p-2 rounded-lg ${activeTab === 'values' ? 'bg-ats-orange text-white' : 'bg-slate-800 text-slate-400 group-hover:text-white'}`}>
                  <Heart size={20} />
                </div>
                <div>
                  <span className="font-bold text-lg block">Core Values</span>
                  <span className={`text-xs ${activeTab === 'values' ? 'text-slate-500' : 'text-slate-500'}`}>What we stand for</span>
                </div>
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="lg:w-2/3 p-8 lg:p-16 bg-white flex items-center relative">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <Globe size={200} />
            </div>

            {activeTab === 'mission' && (
              <div className="animate-fade-in-up w-full relative z-10">
                <div className="inline-flex items-center gap-2 text-ats-orange font-bold text-sm uppercase tracking-wider mb-4">
                  <Zap size={16} /> Mission Statement
                </div>
                <h4 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">Empowerment via Unity</h4>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  To empower African tech innovators by creating the continent's first large-scale digital syndicate. We utilize the power of social platform monetization (TikTok, YouTube) to pool revenue and fund 10,000+ tech startups without taking a single percent of equity.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-green-50 text-ats-green px-4 py-2 rounded-full font-bold text-sm border border-green-100">
                    <CheckCircle2 size={16} /> Zero Equity Taken
                  </div>
                  <div className="flex items-center gap-2 bg-orange-50 text-ats-orange px-4 py-2 rounded-full font-bold text-sm border border-orange-100">
                    <CheckCircle2 size={16} /> Community Funded
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'vision' && (
              <div className="animate-fade-in-up w-full relative z-10">
                <div className="inline-flex items-center gap-2 text-ats-orange font-bold text-sm uppercase tracking-wider mb-4">
                  <Globe size={16} /> Global Vision
                </div>
                <h4 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">A Self-Sustaining Ecosystem</h4>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  We envision a dynamic pan-African tech ecosystem where millions of creators collaborate under a mutual support model. A world where financial barriers no longer kill brilliant ideas, and where African innovation leads the global stage.
                </p>
                <blockquote className="border-l-4 border-ats-green pl-4 italic text-slate-500 text-lg">
                  "Building a future where African ideas are funded by African unity."
                </blockquote>
              </div>
            )}
            
            {activeTab === 'values' && (
              <div className="animate-fade-in-up w-full relative z-10">
                <div className="inline-flex items-center gap-2 text-ats-orange font-bold text-sm uppercase tracking-wider mb-4">
                  <Heart size={16} /> Our Ethos
                </div>
                <h4 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-8">Our Code of Ethics</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="bg-ats-green/10 w-10 h-10 rounded-lg flex items-center justify-center text-ats-green mb-3"><Trophy size={20} /></div>
                    <h5 className="font-bold text-slate-900 mb-1">Excellence</h5>
                    <p className="text-slate-500 text-sm">We don't settle for average. We push boundaries.</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="bg-ats-orange/10 w-10 h-10 rounded-lg flex items-center justify-center text-ats-orange mb-3"><Users size={20} /></div>
                    <h5 className="font-bold text-slate-900 mb-1">Transparency</h5>
                    <p className="text-slate-500 text-sm">Open books, open governance, open community.</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center text-blue-600 mb-3"><Lightbulb size={20} /></div>
                    <h5 className="font-bold text-slate-900 mb-1">Creativity</h5>
                    <p className="text-slate-500 text-sm">Innovation is at the heart of our funding model.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 3. Impact Stats (Dark Band) */}
      <div ref={statsRef} className="py-20 bg-ats-green relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-ats-orange/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(45deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedCounter end={10000} suffix="+" label="Startups Goal" isVisible={statsVisible} />
            <AnimatedCounter end={54} label="African Nations" isVisible={statsVisible} />
            <AnimatedCounter end={500} suffix="+" label="Founding Members" isVisible={statsVisible} />
            <div className="text-center p-8 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all transform hover:-translate-y-1">
              <div className="text-5xl md:text-6xl font-heading font-extrabold text-white mb-2 drop-shadow-sm">
                0<span className="text-3xl">%</span>
              </div>
              <div className="text-ats-orange font-bold uppercase tracking-widest text-xs">
                Equity Taken
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Timeline Section */}
      <div className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h3 className="font-heading font-bold text-3xl md:text-4xl text-slate-900">Our Journey</h3>
            <p className="text-slate-500 mt-4 text-lg">The roadmap to 10,000+ startups.</p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2 md:block hidden"></div>
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2 md:hidden block"></div>

            {MILESTONES.map((item, index) => (
              <div key={index} className={`relative flex items-center justify-between mb-16 last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row-reverse md:gap-0 gap-6`}>
                
                {/* Content Side */}
                <div className="flex-1 min-w-0">
                   <div className={`p-8 bg-white rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1 group relative ${index % 2 === 0 ? 'md:mr-12 md:text-right' : 'md:ml-12 text-left'}`}>
                      <span className={`text-ats-orange font-bold text-6xl opacity-5 absolute -top-4 select-none group-hover:scale-110 transition-transform duration-500 ${index % 2 === 0 ? 'right-4' : 'left-4'}`}>{item.year}</span>
                      <div className={`inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold mb-3 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                        {item.year}
                      </div>
                      <h4 className="font-heading font-bold text-xl text-slate-900 mb-3 relative z-10">{item.title}</h4>
                      <p className="text-slate-600 text-base leading-relaxed relative z-10">{item.description}</p>
                   </div>
                </div>

                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-white border-4 border-ats-green rounded-full shadow-lg z-10 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-ats-orange rounded-full"></div>
                </div>
                
                {/* Empty Side for layout balance on Desktop */}
                <div className="flex-1 md:block hidden"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Team Section */}
      <div className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-ats-orange font-bold uppercase tracking-wider text-sm mb-2 block">The Vanguard</span>
              <h3 className="font-heading font-bold text-3xl md:text-5xl text-slate-900">Meet the Innovators</h3>
            </div>
            <a href="#contact" className="group flex items-center gap-2 font-bold text-ats-green hover:text-ats-orange transition-colors bg-green-50 px-6 py-3 rounded-full hover:bg-orange-50">
              Join the Team <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, idx) => (
              <div key={idx} className="group relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-5 bg-slate-100 relative shadow-md group-hover:shadow-xl transition-all duration-300">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ats-green/90 via-ats-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0">
                    <p className="text-white text-sm font-medium leading-relaxed">{member.bio}</p>
                    <div className="mt-4 pt-4 border-t border-white/20 flex gap-3">
                      <div className="p-2 bg-white/20 rounded-full hover:bg-white hover:text-ats-green transition-colors cursor-pointer text-white">
                        <Users size={16}/>
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="font-heading font-bold text-xl text-slate-900 group-hover:text-ats-green transition-colors">{member.name}</h4>
                <p className="text-ats-orange font-medium text-sm uppercase tracking-wide">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};