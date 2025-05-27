
import React from 'react';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-50 via-white to-gold-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-navy-900 mb-6 leading-tight">
              Transform Your Life with 
              <span className="gradient-text"> Expert Coaching</span>
            </h1>
            <p className="text-xl text-navy-600 mb-8 leading-relaxed">
              I'm Sarah Mitchell, a certified life coach with 8+ years of experience helping ambitious professionals unlock their potential and create extraordinary lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-navy-600 to-navy-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-navy-700 hover:to-navy-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Book Free Discovery Call
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-gold-500 text-gold-600 px-8 py-4 rounded-lg font-semibold hover:bg-gold-500 hover:text-white transition-all duration-300"
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="animate-on-scroll lg:pl-12">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-navy-500 rounded-3xl transform rotate-6"></div>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Sarah Mitchell - Life Coach"
                className="relative z-10 w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20">
                <div className="text-center">
                  <div className="font-bold text-2xl text-navy-900">500+</div>
                  <div className="text-navy-600">Lives Transformed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
