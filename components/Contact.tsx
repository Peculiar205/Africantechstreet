import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    role: 'innovator',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');
    
    try {
      const response = await fetch("https://formspree.io/f/mblnqpwj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formState)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormState({ name: '', email: '', role: 'innovator', message: '' });
      } else {
        const data = await response.json();
        setSubmitStatus('error');
        if (data.errors) {
           setErrorMessage(data.errors.map((error: any) => error.message).join(", "));
        } else {
           setErrorMessage("Oops! There was a problem submitting your form. Please try again.");
        }
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage("Oops! There was a network problem submitting your form. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitStatus('idle');
    setErrorMessage('');
  };

  return (
    <section id="contact" className="scroll-mt-28 py-24 bg-white relative">
       {/* Decorative Background */}
       <div className="absolute top-0 left-0 w-full h-1/2 bg-slate-50 -z-0 skew-y-1 origin-top-left"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Info Side */}
          <div className="order-2 lg:order-1">
            <span className="text-ats-orange font-bold uppercase tracking-wider text-sm mb-2 block">Get Involved</span>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-slate-900 mb-6">
              Join the Movement
            </h2>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              Whether you're a founder with a big idea, a creator looking to monetize, or a partner wanting to support African growth, there's a place for you at ATS.
            </p>

            <div className="space-y-6">
              <a href={`mailto:${CONTACT_INFO.email}`} className="block group">
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex items-start gap-5">
                  <div className="bg-green-50 p-4 rounded-xl text-ats-green group-hover:bg-ats-green group-hover:text-white transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-1 group-hover:text-ats-green transition-colors">Email Us</h4>
                    <p className="text-slate-500">{CONTACT_INFO.email}</p>
                    <span className="text-xs text-ats-orange font-bold mt-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">Send Message <ArrowRight size={12}/></span>
                  </div>
                </div>
              </a>
              
              <a href={`tel:${CONTACT_INFO.phone}`} className="block group">
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex items-start gap-5">
                  <div className="bg-orange-50 p-4 rounded-xl text-ats-orange group-hover:bg-ats-orange group-hover:text-white transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-1 group-hover:text-ats-orange transition-colors">Call Us</h4>
                    <p className="text-slate-500">{CONTACT_INFO.phone}</p>
                     <span className="text-xs text-ats-orange font-bold mt-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">Call Now <ArrowRight size={12}/></span>
                  </div>
                </div>
              </a>

              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-5">
                <div className="bg-slate-100 p-4 rounded-xl text-slate-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">Location</h4>
                  <p className="text-slate-500">{CONTACT_INFO.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="order-1 lg:order-2 bg-white p-8 md:p-10 rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100 min-h-[550px] flex flex-col justify-center relative overflow-hidden transition-all duration-300">
            {submitStatus === 'success' ? (
              <div className="flex flex-col items-center justify-center text-center animate-fade-in-up py-10">
                <div className="w-24 h-24 bg-green-100 text-ats-green rounded-full flex items-center justify-center mb-8 shadow-inner">
                  <CheckCircle size={48} />
                </div>
                <h3 className="text-3xl font-heading font-bold text-slate-900 mb-4">Message Sent!</h3>
                <p className="text-slate-600 mb-10 max-w-sm text-lg">
                  Thank you for joining the African Tech Street movement! We've received your message and will be in touch shortly.
                </p>
                <button 
                  onClick={resetForm}
                  className="bg-white border-2 border-slate-200 text-slate-700 hover:border-ats-green hover:text-ats-green font-bold py-3 px-8 rounded-xl transition-all w-full"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-heading font-bold text-2xl mb-2 text-slate-900">Let's build together</h3>
                <p className="text-slate-500 mb-8">Fill out the form below to get started.</p>
                
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-100 text-red-600 p-4 rounded-xl mb-6 flex items-start gap-3 animate-fade-in-up">
                    <AlertCircle size={20} className="shrink-0 mt-0.5" />
                    <p className="text-sm">{errorMessage}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:border-ats-orange focus:ring-0 outline-none transition-all bg-slate-50 focus:bg-white"
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:border-ats-orange focus:ring-0 outline-none transition-all bg-slate-50 focus:bg-white"
                        placeholder="john@example.com"
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="role" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">I am a...</label>
                    <div className="relative">
                      <select 
                        id="role"
                        name="role"
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:border-ats-orange focus:ring-0 outline-none transition-all bg-slate-50 focus:bg-white appearance-none cursor-pointer"
                        value={formState.role}
                        onChange={(e) => setFormState({...formState, role: e.target.value})}
                        disabled={isSubmitting}
                      >
                        <option value="innovator">Founder / Innovator</option>
                        <option value="creator">Content Creator</option>
                        <option value="investor">Investor / Partner</option>
                        <option value="enthusiast">Tech Enthusiast</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                        <ArrowRight size={16} className="rotate-90"/>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Message</label>
                    <textarea 
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:border-ats-orange focus:ring-0 outline-none transition-all bg-slate-50 focus:bg-white resize-none"
                      placeholder="Tell us about your project..."
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      disabled={isSubmitting}
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-ats-green hover:bg-ats-greenLight text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Join ATS Now
                        <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};