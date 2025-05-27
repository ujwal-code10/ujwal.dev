
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does it take to see results from coaching?",
      answer: "Most clients start seeing positive changes within the first 2-3 sessions. However, lasting transformation typically occurs over 3-6 months of consistent work. The timeline depends on your goals, commitment level, and willingness to implement the strategies we develop together."
    },
    {
      question: "What makes your coaching approach different?",
      answer: "I combine evidence-based coaching techniques with intuitive guidance and practical tools. My approach is holistic, addressing mindset, habits, and actionable strategies. I also provide ongoing support between sessions and customize everything to your unique situation and goals."
    },
    {
      question: "Do you offer refunds if I'm not satisfied?",
      answer: "I offer a 30-day satisfaction guarantee for all my coaching packages. If you're not completely satisfied with your experience in the first month, I'll provide a full refund. Your success and satisfaction are my top priorities."
    },
    {
      question: "How often should I book coaching sessions?",
      answer: "For optimal results, I recommend weekly sessions initially, then biweekly as you build momentum. The frequency depends on your goals, budget, and schedule. We'll work together to find the rhythm that works best for your transformation journey."
    },
    {
      question: "Can coaching help with career transitions?",
      answer: "Absolutely! Career transitions are one of my specialties. I help clients gain clarity on their values and goals, overcome fear and limiting beliefs, develop transition strategies, and build confidence for the change they want to make."
    },
    {
      question: "What happens during a typical coaching session?",
      answer: "Each session begins with checking in on your progress and challenges. We'll dive deep into what's blocking you, explore new perspectives, set clear action steps, and ensure you leave feeling motivated and clear on your next moves. Sessions are completely confidential and tailored to your needs."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-navy-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-display text-4xl font-bold text-navy-900 mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-navy-600">
            Everything you need to know about working with me.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden animate-on-scroll">
              <button
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-navy-50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-semibold text-navy-900 text-lg pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="text-gold-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="text-gold-500 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-navy-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
