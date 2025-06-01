
import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    query: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Since this is frontend-only, we'll just show a success message
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', query: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-display text-4xl font-bold text-navy-900 mb-6">
            Ready to <span className="gradient-text">Transform</span> Your Life?
          </h2>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto">
            Book your free discovery call today and take the first step toward the life you've always wanted.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-on-scroll">
            <div className="bg-navy-50 p-8 rounded-2xl">
              <h3 className="font-display text-2xl font-bold text-navy-900 mb-6">
                Send Me a Message
              </h3>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 text-2xl">✓</span>
                  </div>
                  <h4 className="text-xl font-semibold text-navy-900 mb-2">Message Sent!</h4>
                  <p className="text-navy-600">I'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-navy-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-navy-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-navy-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors duration-200"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="query" className="block text-sm font-medium text-navy-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="query"
                      name="query"
                      value={formData.query}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-navy-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors duration-200 resize-none"
                      placeholder="Tell me about your goals and what you'd like to work on..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-navy-600 to-navy-700 text-white py-4 rounded-lg font-semibold hover:from-navy-700 hover:to-navy-800 transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Calendly & Contact Info */}
          <div className="animate-on-scroll">
            <div className="bg-gradient-to-br from-gold-50 to-navy-50 p-8 rounded-2xl mb-8">
              <h3 className="font-display text-2xl font-bold text-navy-900 mb-6">
                Book Your Free Discovery Call
              </h3>
              <p className="text-navy-600 mb-6">
                Ready to get started? Schedule a complimentary 30-minute discovery call to discuss your goals and see if we're a good fit.
              </p>
              
              {/* Calendly Embed Placeholder */}
              <div className="bg-white p-6 rounded-lg border border-navy-200 text-center">
                <p className="text-navy-600 mb-4">Click below to schedule your free call:</p>
                <a
                  href="https://calendly.com/gojomagar14/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-gold-500 to-gold-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-gold-600 hover:to-gold-700 transition-all duration-300"
                >
                  Schedule Free Call
                </a>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-navy-100 p-3 rounded-full">
                  <Mail className="text-navy-600" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-navy-900">Email</p>
                  <p className="text-navy-600">sarah@lifecoaching.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-navy-100 p-3 rounded-full">
                  <Phone className="text-navy-600" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-navy-900">Phone</p>
                  <p className="text-navy-600">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
