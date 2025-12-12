import React, { useState, useEffect } from 'react';
import { Target, Lightbulb, Heart, Users, CheckCircle2, Trophy, Globe, ArrowRight } from 'lucide-react';
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
      }
    };

    animationFrame = window.requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);

  return (
    <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
      <div className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-2">
        {count}{suffix}
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
    <section id="about" className="bg-white overflow-hidden">
      
      {/* 1. Header Section */}
      <div className="relative py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div ref={headerRef} className={`max-w-4xl mx-auto text-center ${headerVisible ? 'reveal active' : 'reveal'}`}>
            <h2 className="text-ats-orange font-bold uppercase tracking-wider text-sm mb-4">Who We Are</h2>
            <h3 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-8 leading-tight">
              We are the <span className="text-ats-green">architects</span> of a new digital economy.
            </h3>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              African Tech Street (ATS) is more than a company; it's a revolution. We are dismantling barriers to entry for African founders by replacing equity-greed with community support.
            </p>
          </div>
        </div>
        {/* Decorative background element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-50/50 via-transparent to-transparent -z-0 pointer-events-none"></div>
      </div>

      {/* 2. Interactive DNA Section (Tabs) */}
      <div className="py-20 container mx-auto px-4 md:px-6">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex flex-col md:flex-row">
          {/* Tabs Navigation */}
          <div className="md:w-1/3 bg-slate-900 p-8 md:p-12 flex flex-col justify-center space-y-4">
            <button 
              onClick={() => setActiveTab('mission')}
              className={`text-left p-4 rounded-xl transition-all duration-300 flex items-center gap-3 ${activeTab === 'mission' ? 'bg-ats-orange text-white shadow-lg transform translate-x-2' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
            >
              <Target size={24} />
              <span className="font-heading font-bold text-lg">Our Mission</span>
            </button>
            <button 
              onClick={() => setActiveTab('vision')}
              className={`text-left p-4 rounded-xl transition-all duration-300 flex items-center gap-3 ${activeTab === 'vision' ? 'bg-ats-orange text-white shadow-lg transform translate-x-2' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
            >
              <Lightbulb size={24} />
              <span className="font-heading font-bold text-lg">Our Vision</span>
            </button>
            <button 
              onClick={() => setActiveTab('values')}
              className={`text-left p-4 rounded-xl transition-all duration-300 flex items-center gap-3 ${activeTab === 'values' ? 'bg-ats-orange text-white shadow-lg transform translate-x-2' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
            >
              <Heart size={24} />
              <span className="font-heading font-bold text-lg">Core Values</span>
            </button>
          </div>

          {/* Tab Content */}
          <div className="md:w-2/3 p-8 md:p-16 bg-white flex items-center">
            {activeTab === 'mission' && (
              <div className="animate-fade-in-up">
                <h4 className="text-3xl font-heading font-bold text-slate-900 mb-6">Empowerment via Unity</h4>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  To empower African tech innovators by creating the continent's first large-scale digital syndicate. We utilize the power of social platform monetization (TikTok, YouTube) to pool revenue and fund 10 Million tech startups without taking a single percent of equity.
                </p>
                <div className="flex items-center gap-2 text-ats-green font-bold">
                  <CheckCircle2 size={20} />
                  <span>Zero Equity Taken</span>
                </div>
              </div>
            )}
            {activeTab === 'vision' && (
              <div className="animate-fade-in-up">
                <h4 className="text-3xl font-heading font-bold text-slate-900 mb-6">A Self-Sustaining Ecosystem</h4>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  We envision a dynamic pan-African tech ecosystem where millions of creators collaborate under a mutual support model. A world where financial barriers no longer kill brilliant ideas, and where African innovation leads the global stage.
                </p>
                <div className="flex items-center gap-2 text-ats-green font-bold">
                  <Globe size={20} />
                  <span>Pan-African Reach</span>
                </div>
              </div>
            )}
            {activeTab === 'values' && (
              <div className="animate-fade-in-up">
                <h4 className="text-3xl font-heading font-bold text-slate-900 mb-6">Our Code of Ethics</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="bg-ats-green/10 p-2 rounded-lg text-ats-green"><Trophy size={20} /></div>
                    <div>
                      <h5 className="font-bold text-slate-900">Excellence</h5>
                      <p className="text-slate-500 text-sm">We don't settle for average. We push boundaries.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-ats-orange/10 p-2 rounded-lg text-ats-orange"><Users size={20} /></div>
                    <div>
                      <h5 className="font-bold text-slate-900">Transparency</h5>
                      <p className="text-slate-500 text-sm">Open books, open governance, open community.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Lightbulb size={20} /></div>
                    <div>
                      <h5 className="font-bold text-slate-900">Creativity</h5>
                      <p className="text-slate-500 text-sm">Innovation is at the heart of our funding model.</p>
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 3. Impact Stats (Dark Band) */}
      <div ref={statsRef} className="py-20 bg-ats-green relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-ats-orange/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <AnimatedCounter end={10} suffix="M+" label="Startups Goal" isVisible={statsVisible} />
            <AnimatedCounter end={54} label="African Nations" isVisible={statsVisible} />
            <AnimatedCounter end={500} suffix="+" label="Founding Members" isVisible={statsVisible} />
            <AnimatedCounter end={0} suffix="%" label="Equity Taken" isVisible={statsVisible} />
          </div>
        </div>
      </div>

      {/* 4. Timeline Section */}
      <div className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h3 className="font-heading font-bold text-3xl md:text-4xl text-slate-900">Our Journey</h3>
            <p className="text-slate-500 mt-4">The roadmap to 10 million startups.</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2"></div>

            {MILESTONES.map((item, index) => (
              <div key={index} className={`relative flex items-center justify-between mb-12 md:mb-24 last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Content Side */}
                <div className="ml-12 md:ml-0 md:w-5/12">
                   <div className={`p-6 bg-white rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1 group relative ${index % 2 === 0 ? 'text-left' : 'md:text-right text-left'}`}>
                      <span className="text-ats-orange font-bold text-5xl opacity-10 absolute -top-4 -right-2 select-none group-hover:scale-110 transition-transform">{item.year}</span>
                      <h4 className="font-heading font-bold text-xl text-slate-900 mb-2 relative z-10">{item.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed relative z-10">{item.description}</p>
                   </div>
                </div>

                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-4 border-ats-green rounded-full shadow-lg z-10"></div>
                
                {/* Empty Side for layout balance */}
                <div className="hidden md:block md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Team Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-ats-orange font-bold uppercase tracking-wider text-sm mb-3">The Vanguard</h2>
              <h3 className="font-heading font-bold text-3xl md:text-4xl text-slate-900">Meet the Innovators</h3>
            </div>
            <a href="#contact" className="group flex items-center gap-2 font-bold text-ats-green hover:text-ats-orange transition-colors">
              Join the Team <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, idx) => (
              <div key={idx} className="group relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-slate-100 relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <p className="text-white text-sm font-medium">{member.bio}</p>
                    <div className="flex gap-3 mt-4 text-white">
                      {/* Social placeholders for team */}
                      <div className="p-2 bg-white/20 rounded-full hover:bg-ats-orange transition-colors cursor-pointer"><Users size={14}/></div>
                    </div>
                  </div>
                </div>
                <h4 className="font-heading font-bold text-xl text-slate-900">{member.name}</h4>
                <p className="text-ats-orange font-medium text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};