import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-ats-orange rounded-lg p-1">
            <Logo className="h-10 w-10 md:h-12 md:w-12 transition-transform group-hover:scale-105" />
            <div className={`flex flex-col ${isScrolled ? 'text-ats-green' : 'text-ats-green'}`}>
              <span className="font-heading font-bold text-xl leading-none">African</span>
              <span className="font-heading font-bold text-xl leading-none text-ats-orange">Tech Street</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-semibold transition-colors hover:text-ats-orange focus:outline-none focus:ring-2 focus:ring-ats-orange rounded-md px-2 py-1 ${
                  isScrolled ? 'text-slate-700' : 'text-slate-800' // Dark text by default as hero might be light
                }`}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact"
              className="bg-ats-orange hover:bg-ats-orangeLight text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-orange-500/30 transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-ats-orange/30"
            >
              Join ATS
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-ats-green focus:outline-none focus:ring-2 focus:ring-ats-orange rounded-md p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col p-6 space-y-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-slate-800 font-medium text-lg hover:text-ats-orange focus:outline-none focus:ring-2 focus:ring-ats-orange rounded-md px-2 py-1"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact"
            className="bg-ats-orange text-white text-center py-3 rounded-lg font-bold shadow-md focus:outline-none focus:ring-4 focus:ring-ats-orange/30"
            onClick={() => setIsOpen(false)}
          >
            Join the Movement
          </a>
        </div>
      </div>
    </nav>
  );
};