import React from 'react';
import { UNIQUE_FEATURES } from '../constants';

export const WhyUs: React.FC = () => {
  return (
    <section id="features" className="scroll-mt-28 py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Vibrant Background Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-ats-green/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-ats-orange/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8 border-b border-white/10 pb-12">
          <div className="max-w-2xl">
            <span className="text-ats-orange font-bold uppercase tracking-wider text-sm mb-3 block">Why Choose ATS</span>
            <h2 className="font-heading font-bold text-4xl md:text-5xl leading-tight">
              Disrupting the traditional <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">incubator model.</span>
            </h2>
          </div>
          <div className="md:text-right">
             <p className="text-slate-400 text-lg max-w-md leading-relaxed">
               We don't just fund; we fuel. No equity taken. Community funded. Revenue shared.
             </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up">
          {UNIQUE_FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="group relative bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                {/* Gradient Border Glow on Hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-ats-orange/30 rounded-3xl transition-colors pointer-events-none"></div>
                
                <div className="bg-gradient-to-br from-ats-orange to-red-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Icon size={28} className="text-white" />
                </div>
                
                <h4 className="font-heading font-bold text-xl mb-3 group-hover:text-ats-orange transition-colors">{feature.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};