import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center bg-gradient-to-br from-navy-50 to-white pt-16"
    >
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1 md:ml-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 leading-tight animate-fade-in">
            <span className="font-serif">Hello, I'm</span>
            <br />
            <span className="text-navy-700">Abishan Rajendran</span>
          </h1>
          
          <p className="mt-6 text-lg text-navy-700 max-w-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Showcasing My Skills and Learning Journey
          </p>
          
          <div className="mt-8 flex space-x-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-navy-700 hover:bg-navy-800 text-white"
            >
              Contact Me
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-navy-300 text-navy-700 hover:bg-navy-50"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center md:justify-start animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="/profile-photo.jpeg" 
                alt="Abishan Rajendran" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 right-4 bg-gold-400 text-navy-900 py-2 px-4 rounded-full font-bold shadow-lg">
              Software engineering Undergraduate
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;