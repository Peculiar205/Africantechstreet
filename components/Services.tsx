import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Services: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-ats-orange font-bold uppercase tracking-wider text-sm mb-3">Who We Are For</h2>
          <h3 className="font-heading font-bold text-3xl md:text-4xl text-slate-900">
            A Unified Ecosystem for Growth
          </h3>
        </div>

        <div ref={ref} className={`grid lg:grid-cols-3 gap-8 ${isVisible ? 'reveal active' : 'reveal'}`}>
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            const isMiddle = index === 1;
            
            return (
              <div 
                key={service.title}
                className={`relative flex flex-col p-8 rounded-2xl transition-all duration-300 ${
                  isMiddle 
                    ? 'bg-ats-green text-white shadow-xl scale-105 lg:-mt-4' 
                    : 'bg-white text-slate-800 shadow-md hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                {isMiddle && (
                  <div className="absolute top-0 right-0 bg-ats-orange text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                    MOST POPULAR
                  </div>
                )}
                
                <div className={`p-3 w-fit rounded-lg mb-6 ${isMiddle ? 'bg-white/10' : 'bg-green-50 text-ats-green'}`}>
                  <Icon size={32} />
                </div>
                
                <h4 className="font-heading font-bold text-2xl mb-1">{service.title}</h4>
                <span className={`text-sm font-medium mb-4 uppercase tracking-wide ${isMiddle ? 'text-green-200' : 'text-ats-orange'}`}>
                  {service.targetAudience}
                </span>
                
                <p className={`mb-8 leading-relaxed ${isMiddle ? 'text-green-50' : 'text-slate-500'}`}>
                  {service.description}
                </p>

                <div className="mt-auto space-y-3">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className={`mt-0.5 flex-shrink-0 ${isMiddle ? 'text-ats-orange' : 'text-ats-green'}`} />
                      <span className={`text-sm ${isMiddle ? 'text-green-50' : 'text-slate-600'}`}>{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <button className={`mt-8 py-3 px-4 rounded-lg font-bold text-sm transition-colors ${
                  isMiddle 
                    ? 'bg-white text-ats-green hover:bg-gray-100' 
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}>
                  Get Started
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
