import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Logo className="h-10 w-10" />
              <span className="font-heading font-bold text-2xl">ATS</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-6">
              The first syndicate to leverage platform monetization at scale for African tech startups. Building the future, together.
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((link) => {
                const Icon = link.icon;
                return (
                  <a 
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-ats-orange hover:text-white transition-all duration-300"
                    aria-label={`Follow us on ${link.platform}`}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#home" className="hover:text-ats-orange transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-ats-orange transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-ats-orange transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-ats-orange transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Community</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-ats-orange transition-colors">Founder Stories</a></li>
              <li><a href="#" className="hover:text-ats-orange transition-colors">Events</a></li>
              <li><a href="#" className="hover:text-ats-orange transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-ats-orange transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} African Tech Street. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
