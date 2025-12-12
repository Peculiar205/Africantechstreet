import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WhyUs } from './components/WhyUs';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ChatBot } from './components/ChatBot';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyUs />
        <Services />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;