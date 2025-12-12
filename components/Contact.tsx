import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
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
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Info Side */}
          <div>
            <span className="text-ats-orange font-bold uppercase tracking-wider text-sm">Get Involved</span>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-slate-900 mt-2 mb-6">
              Join the Movement
            </h2>
            <p className="text-slate-600 text-lg mb-10">
              Whether you're a founder with a big idea, a creator looking to monetize, or a partner wanting to support African growth, there's a place for you at ATS.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="bg-ats-green/10 p-3 rounded-full text-ats-green">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email Us</h4>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-slate-600 hover:text-ats-orange transition-colors">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-ats-green/10 p-3 rounded-full text-ats-green">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Call Us</h4>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="text-slate-600 hover:text-ats-orange transition-colors">
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-ats-green/10 p-3 rounded-full text-ats-green">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Location</h4>
                  <p className="text-slate-600">
                    {CONTACT_INFO.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-slate-50 p-8 rounded-3xl shadow-lg border border-slate-100 min-h-[500px] flex flex-col justify-center relative overflow-hidden transition-all duration-300">
            {submitStatus === 'success' ? (
              <div className="flex flex-col items-center justify-center text-center animate-fade-in-up p-4">
                <div className="w-20 h-20 bg-green-100 text-ats-green rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-heading font-bold text-slate-900 mb-3">Message Sent!</h3>
                <p className="text-slate-600 mb-8 max-w-sm">
                  Thank you for joining the African Tech Street movement! We've received your message and will be in touch shortly.
                </p>
                <button 
                  onClick={resetForm}
                  className="bg-white border-2 border-slate-200 text-slate-700 hover:border-ats-green hover:text-ats-green font-bold py-3 px-8 rounded-lg transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-bold text-xl mb-6 text-slate-800">Send us a message</h3>
                
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-100 text-red-600 p-4 rounded-lg mb-6 flex items-start gap-3 animate-fade-in-up">
                    <AlertCircle size={20} className="shrink-0 mt-0.5" />
                    <p className="text-sm">{errorMessage}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-ats-green focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-ats-green focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-slate-700 mb-1">I am a...</label>
                    <select 
                      id="role"
                      name="role"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-ats-green focus:border-transparent outline-none transition-all bg-white"
                      value={formState.role}
                      onChange={(e) => setFormState({...formState, role: e.target.value})}
                      disabled={isSubmitting}
                    >
                      <option value="innovator">Founder / Innovator</option>
                      <option value="creator">Content Creator</option>
                      <option value="investor">Investor / Partner</option>
                      <option value="enthusiast">Tech Enthusiast</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                    <textarea 
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-ats-green focus:border-transparent outline-none transition-all"
                      placeholder="Tell us about your project or how you want to contribute..."
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      disabled={isSubmitting}
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-ats-green hover:bg-ats-greenLight text-white font-bold py-4 rounded-lg shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Join ATS Now
                        <Send size={18} className="group-hover:translate-x-1 transition-transform" />
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