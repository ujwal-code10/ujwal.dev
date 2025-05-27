
import React from 'react';

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "$149",
      period: "per session",
      description: "Perfect for those new to coaching",
      features: [
        "60-minute coaching session",
        "Goal-setting framework",
        "Email support for 48 hours",
        "Resource recommendations",
        "Action plan template"
      ],
      popular: false
    },
    {
      name: "Transformation",
      price: "$497",
      period: "per month",
      description: "Most popular for serious change-makers",
      features: [
        "4 coaching sessions per month",
        "Unlimited email support",
        "Custom action plans",
        "Weekly check-ins",
        "Resource library access",
        "Progress tracking tools"
      ],
      popular: true
    },
    {
      name: "Elite",
      price: "$997",
      period: "per month",
      description: "For high-achievers wanting rapid results",
      features: [
        "8 coaching sessions per month",
        "24/7 text support",
        "Custom strategies & frameworks",
        "Monthly intensive sessions",
        "Priority scheduling",
        "Exclusive masterclasses"
      ],
      popular: false
    }
  ];

  const handleGetStarted = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-navy-900 to-navy-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-display text-4xl font-bold mb-6">
            Investment in Your <span className="text-gold-400">Future</span>
          </h2>
          <p className="text-xl text-navy-200 max-w-3xl mx-auto">
            Choose the coaching package that aligns with your goals and commitment level.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`relative p-8 rounded-2xl ${
              plan.popular 
                ? 'bg-gradient-to-b from-gold-400 to-gold-500 text-navy-900 transform scale-105' 
                : 'bg-navy-700/50 backdrop-blur-sm border border-navy-600'
            } animate-on-scroll`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-navy-900 text-gold-400 px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="font-display text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`mb-4 ${plan.popular ? 'text-navy-700' : 'text-navy-300'}`}>
                  {plan.description}
                </p>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className={`text-lg ${plan.popular ? 'text-navy-700' : 'text-navy-300'}`}>
                    /{plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className={`${plan.popular ? 'text-navy-900' : 'text-gold-400'} mr-3`}>✓</span>
                    <span className={plan.popular ? 'text-navy-800' : 'text-navy-200'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={handleGetStarted}
                className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-navy-900 text-gold-400 hover:bg-navy-800'
                    : 'bg-gold-500 text-navy-900 hover:bg-gold-400'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
