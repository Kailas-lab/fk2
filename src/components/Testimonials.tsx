import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Shanmuga Vadivu',
      role: 'Full Stack Developer',
      company: 'Tech Solutions Inc.',
      image: 'https://images.pexels.com/photos/15612102/pexels-photo-15612102.jpeg',
      rating: 5,
      text: 'Future Key completely transformed my career! The Python programming course was incredibly well-structured, and the hands-on projects gave me the confidence to land my dream job as a Full Stack Developer.',
      course: 'Python Programming'
    },
    {
      id: 2,
      name: 'Karthikeyan S',
      role: 'Data Scientist',
      company: 'Analytics Pro',
      image: 'https://images.pexels.com/photos/33955746/pexels-photo-33955746.jpeg',
      rating: 5,
      text: 'The Data Science Mastery course exceeded my expectations. The instructors are true experts, and the practical approach to learning helped me transition from a traditional business role to data science.',
      course: 'Data Science Mastery'
    },
    {
      id: 3,
      name: 'Valliyammai M',
      role: 'Digital Marketing Intern',
      company: 'Creative Agency',
      image: 'https://images.pexels.com/photos/31868218/pexels-photo-31868218.jpeg',
      rating: 5,
      text: 'Amazing experience! The digital marketing course covered everything from SEO to social media strategies. The real-world case studies and personalized feedback made all the difference in my learning journey.',
      course: 'Digital Marketing'
    },
    {
      id: 4,
      name: 'Krounchan Shivan',
      role: 'Machine Learning Engineer',
      company: 'AI Innovations',
      image: 'https://images.pexels.com/photos/6476365/pexels-photo-6476365.jpeg',
      rating: 5,
      text: 'The Machine Learning course at Future Key is outstanding! The depth of content and practical implementation exercises prepared me perfectly for my current role. Highly recommend to anyone serious about AI.',
      course: 'Machine Learning'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-emerald-900/50 rounded-full text-emerald-400 text-sm font-medium mb-4 backdrop-blur-sm border border-emerald-800">
            Student Success Stories
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            What Our Students
            <span className="block bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our successful graduates have to say about their experience.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="bg-gray-800 rounded-3xl p-8 lg:p-12 border border-gray-700 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Student Image */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 lg:w-32 lg:h-32 rounded-2xl object-cover border-4 border-emerald-500"
                  />
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-emerald-500 to-green-400 p-2 rounded-full">
                    <Quote className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-lg lg:text-xl text-gray-200 mb-6 leading-relaxed italic">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                <div className="space-y-2">
                  <div className="text-xl font-bold text-white">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-emerald-400 font-medium">
                    {testimonials[currentIndex].role}
                  </div>
                  <div className="text-gray-400">
                    {testimonials[currentIndex].company}
                  </div>
                  <div className="inline-block px-3 py-1 bg-emerald-900/50 rounded-full text-emerald-400 text-sm border border-emerald-800">
                    {testimonials[currentIndex].course}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-gray-800 border border-gray-700 rounded-full hover:bg-emerald-600 hover:border-emerald-500 transition-all duration-300 text-gray-300 hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-emerald-400 scale-125'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 bg-gray-800 border border-gray-700 rounded-full hover:bg-emerald-600 hover:border-emerald-500 transition-all duration-300 text-gray-300 hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4 overflow-x-auto pb-2">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => setCurrentIndex(index)}
                className={`flex-shrink-0 transition-all duration-300 ${
                  index === currentIndex
                    ? 'scale-110'
                    : 'scale-100 opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className={`w-12 h-12 rounded-xl object-cover border-2 ${
                    index === currentIndex
                      ? 'border-emerald-400'
                      : 'border-gray-600 hover:border-gray-500'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;