
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display font-bold text-2xl gradient-text mb-4">
              Sarah Mitchell
            </h3>
            <p className="text-navy-300 leading-relaxed">
              Empowering ambitious professionals to unlock their potential and create extraordinary lives through transformational coaching.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Services', 'Testimonials', 'Pricing', 'FAQ', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-navy-300 hover:text-gold-400 transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-2 text-navy-300">
              <p>sarah@lifecoaching.com</p>
              <p>+1 (555) 123-4567</p>
              <p>Available Mon-Fri, 9AM-6PM PST</p>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-700 mt-8 pt-8 text-center">
          <p className="text-navy-400">
            © 2024 Sarah Mitchell Coaching. All rights reserved. | 
            <span className="ml-2">Privacy Policy | Terms of Service</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
