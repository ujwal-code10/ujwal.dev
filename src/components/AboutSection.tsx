
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll">
            <img
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Sarah Mitchell working with client"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>

          <div className="animate-on-scroll">
            <h2 className="font-display text-4xl font-bold text-navy-900 mb-6">
              About <span className="gradient-text">Sarah</span>
            </h2>
            <p className="text-lg text-navy-600 mb-6 leading-relaxed">
              With over 8 years of experience in personal development and life coaching, I've had the privilege of guiding hundreds of individuals toward their breakthrough moments.
            </p>
            <p className="text-lg text-navy-600 mb-8 leading-relaxed">
              My approach combines evidence-based coaching techniques with intuitive guidance, creating a safe space for transformation. I specialize in helping high-achievers overcome limiting beliefs, clarify their vision, and create actionable plans for success.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-navy-50 p-6 rounded-xl">
                <h3 className="font-semibold text-navy-900 mb-2">Certifications</h3>
                <ul className="text-navy-600 space-y-1">
                  <li>• ICF Certified Coach</li>
                  <li>• NLP Practitioner</li>
                  <li>• Mindfulness Teacher</li>
                </ul>
              </div>
              <div className="bg-gold-50 p-6 rounded-xl">
                <h3 className="font-semibold text-navy-900 mb-2">Specialties</h3>
                <ul className="text-navy-600 space-y-1">
                  <li>• Career Transitions</li>
                  <li>• Confidence Building</li>
                  <li>• Goal Achievement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
