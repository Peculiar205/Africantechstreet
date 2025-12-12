import React from 'react';
import { UNIQUE_FEATURES } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const WhyUs: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="features" className="py-20 bg-ats-dark text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#2F8554 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-ats-orange font-bold uppercase tracking-wider text-sm mb-3">Why Choose ATS</h2>
            <h3 className="font-heading font-bold text-3xl md:text-4xl">
              We're disrupting the traditional incubator model.
            </h3>
          </div>
          <div className="md:text-right">
             <p className="text-slate-400 max-w-md">
               No equity taken. Community funded. Revenue shared.
             </p>
          </div>
        </div>

        <div ref={ref} className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 ${isVisible ? 'reveal active' : 'reveal'}`}>
          {UNIQUE_FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
                <div className="bg-gradient-to-br from-ats-orange to-red-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                  <Icon size={24} className="text-white" />
                </div>
                <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                <p className="text-slate-300 text-sm leading-relaxed">
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
