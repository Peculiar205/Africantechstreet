import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Services: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" className="scroll-mt-28 py-24 bg-slate-50 relative overflow-hidden">
      {/* Subtle Background Blob */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-ats-green/5 rounded-full blur-3xl -z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-ats-orange font-bold uppercase tracking-wider text-sm mb-3 block">Who We Serve</span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-slate-900 mb-6">
            A Unified Ecosystem for Growth
          </h2>
          <p className="text-slate-600 text-lg">
            We bridge the gap between innovation and funding. Whether you are building the product or sharing the story, ATS is your platform.
          </p>
        </div>

        <div ref={ref} className={`grid lg:grid-cols-3 gap-8 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}>
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            const isMiddle = index === 1;
            
            return (
              <div 
                key={service.title}
                className={`relative flex flex-col p-8 rounded-3xl transition-all duration-300 group ${
                  isMiddle 
                    ? 'bg-ats-green text-white shadow-2xl scale-105 lg:-mt-4 ring-4 ring-green-50' 
                    : 'bg-white text-slate-800 shadow-lg hover:shadow-2xl hover:-translate-y-2 border border-slate-100'
                }`}
              >
                {isMiddle && (
                  <div className="absolute top-0 right-8 bg-ats-orange text-white text-xs font-bold px-4 py-1.5 rounded-b-lg shadow-md tracking-wider">
                    MOST POPULAR
                  </div>
                )}
                
                <div className={`p-4 w-fit rounded-2xl mb-6 transition-transform group-hover:scale-110 duration-300 ${isMiddle ? 'bg-white/10' : 'bg-green-50 text-ats-green'}`}>
                  <Icon size={32} />
                </div>
                
                <h4 className="font-heading font-bold text-2xl mb-2">{service.title}</h4>
                <span className={`text-xs font-bold uppercase tracking-widest mb-6 ${isMiddle ? 'text-green-200' : 'text-ats-orange'}`}>
                  {service.targetAudience}
                </span>
                
                <p className={`mb-8 leading-relaxed text-base ${isMiddle ? 'text-green-50' : 'text-slate-500'}`}>
                  {service.description}
                </p>

                <div className="mt-auto space-y-4 mb-8">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className={`mt-0.5 flex-shrink-0 ${isMiddle ? 'text-ats-orange' : 'text-ats-green'}`} />
                      <span className={`text-sm font-medium ${isMiddle ? 'text-green-50' : 'text-slate-600'}`}>{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <a 
                  href="#contact"
                  className={`py-4 px-6 rounded-xl font-bold text-sm transition-all text-center flex items-center justify-center gap-2 group-hover:gap-4 ${
                  isMiddle 
                    ? 'bg-white text-ats-green hover:bg-gray-50 shadow-md' 
                    : 'bg-slate-900 text-white hover:bg-ats-orange shadow-md'
                }`}>
                  Get Started
                  <ArrowRight size={18} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};