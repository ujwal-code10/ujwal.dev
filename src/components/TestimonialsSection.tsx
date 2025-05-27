import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      content: "Sarah helped me transition from a corporate job I hated to starting my own successful consulting business. Her guidance was invaluable in building my confidence and creating a clear action plan.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Michael Chen",
      role: "Entrepreneur", 
      content: "Working with Sarah was a game-changer. She helped me overcome imposter syndrome and scale my business to 7 figures. I can't recommend her enough!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Jessica Thompson",
      role: "Creative Professional",
      content: "Sarah's coaching helped me find clarity in my career path and gave me the tools to pursue my passion project. Her support made all the difference in my success.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-display text-4xl font-bold text-navy-900 mb-6">
            What My <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto">
            Real stories from real people who have transformed their lives through coaching.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-navy-50 p-8 rounded-2xl shadow-lg animate-on-scroll">
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-navy-900">{testimonial.name}</h3>
                  <p className="text-navy-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-navy-700 leading-relaxed italic">"{testimonial.content}"</p>
              <div className="flex text-gold-500 mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
