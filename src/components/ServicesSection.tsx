
import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      title: "1-on-1 Coaching",
      description: "Personalized coaching sessions tailored to your specific goals and challenges. Deep-dive into what's holding you back and create a clear path forward.",
      features: ["Weekly 60-minute sessions", "Customized action plans", "Email support between sessions", "Goal tracking & accountability"],
      price: "Starting at $200/session"
    },
    {
      title: "VIP Intensive Days",
      description: "Transform your life in a single day with this immersive, high-impact coaching experience designed for rapid breakthrough.",
      features: ["Full-day 1-on-1 session", "Complete life audit", "90-day action plan", "3 follow-up sessions"],
      price: "Starting at $1,500/day"
    },
    {
      title: "Group Coaching Program",
      description: "Join like-minded individuals in a supportive group environment. Perfect for those who thrive in community settings.",
      features: ["8-week program", "Weekly group calls", "Private community access", "Workbooks & resources"],
      price: "Starting at $497/program"
    }
  ];

  const handleLearnMore = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-display text-4xl font-bold text-navy-900 mb-6">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto">
            Choose the coaching format that best fits your needs and lifestyle. Each option is designed to create lasting transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll transform hover:scale-105">
              <h3 className="font-display text-2xl font-bold text-navy-900 mb-4">{service.title}</h3>
              <p className="text-navy-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-gold-500 mr-2">✓</span>
                    <span className="text-navy-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t pt-6">
                <div className="text-2xl font-bold text-navy-900 mb-4">{service.price}</div>
                <button 
                  onClick={handleLearnMore}
                  className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-white py-3 rounded-lg font-semibold hover:from-gold-600 hover:to-gold-700 transition-all duration-300"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
