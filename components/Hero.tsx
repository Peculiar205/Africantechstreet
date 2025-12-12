import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { HERO_CONTENT } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-ats-green/5 blur-3xl -z-10 rounded-l-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-2/3 bg-ats-orange/5 blur-3xl -z-10 rounded-tr-full"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-ats-green/10 text-ats-green font-bold text-xs uppercase tracking-wider mb-6 border border-ats-green/20">
              {HERO_CONTENT.tagline}
            </span>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-slate-900 leading-tight mb-6">
              Empowering <span className="text-transparent bg-clip-text bg-gradient-to-r from-ats-green to-teal-600">African Tech</span> Innovators
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {HERO_CONTENT.subheadline}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#contact" 
                className="flex items-center justify-center gap-2 bg-ats-orange hover:bg-ats-orangeLight text-white px-8 py-4 rounded-full font-bold text-base transition-all shadow-lg hover:shadow-ats-orange/40 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-ats-orange/30"
              >
                {HERO_CONTENT.ctaPrimary}
                <ArrowRight size={20} />
              </a>
              <a 
                href="#about" 
                className="flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-ats-green text-slate-700 hover:text-ats-green px-8 py-4 rounded-full font-bold text-base transition-all hover:shadow-md focus:outline-none focus:ring-4 focus:ring-ats-green/20"
              >
                <PlayCircle size={20} />
                {HERO_CONTENT.ctaSecondary}
              </a>
            </div>

            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-500 font-medium">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://picsum.photos/40/40?random=${i}`} alt="Member" className="w-10 h-10 rounded-full border-2 border-white" />
                ))}
              </div>
              <p>Join <span className="text-ats-green font-bold">500+</span> Innovators today</p>
            </div>
          </div>

          {/* Visual Content */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
               <img 
                src="https://picsum.photos/800/600?grayscale" 
                alt="African Tech Collaboration" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ats-green/80 to-transparent flex flex-col justify-end p-8">
                 <p className="text-white font-bold text-xl">Community Driven.</p>
                 <p className="text-white/80">Innovation starts here.</p>
              </div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl z-20 flex items-center gap-3 animate-pulse-slow">
              <div className="bg-green-100 p-2 rounded-full text-ats-green">
                <ArrowRight size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase">Total Startups Goal</p>
                <p className="text-lg font-extrabold text-slate-800">10,000+</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};