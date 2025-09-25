import React, { useState } from 'react';
import {
  ArrowRight,
  Users,
  BookOpen,
  TrendingUp,
  Award,
  CheckCircle,
  Lightbulb,
  Target,
  Handshake,
  Rocket,
  Star,
  Send,
  MapPin,
  Phone,
  Mail,
  User
} from 'lucide-react';

const Franchise = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    subject: 'Franchise Partnership Inquiry',
    message: 'I am interested in starting an education franchise with Future Key. Please provide more details about the partnership opportunity.',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleFormSubmission();
  };

  const handleFormSubmission = async () => {
    const scriptUrl =
      'https://script.google.com/macros/s/AKfycbxd-FfwTRovx7KLlrI1EslZkq8n9tIcb2763yyurj4tP6oJlPbnuTTY7GSUVxLRaq1ipg/exec';

    const dataToSend = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      location: formData.location,
      subject: formData.subject,
      message: formData.message,
      timestamp: new Date().toISOString(),
    };

    try {
      const response = await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
        subject: 'Franchise Partnership Inquiry',
        message: 'I am interested in starting an education franchise with Future Key. Please provide more details about the partnership opportunity.'
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
        subject: 'Franchise Partnership Inquiry',
        message: 'I am interested in starting an education franchise with Future Key. Please provide more details about the partnership opportunity.'
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const benefits = [
    {
      icon: BookOpen,
      title: 'Customized Syllabus',
      description: 'Get access to our proven curriculum designed by industry experts, tailored to market demands.',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      icon: Users,
      title: 'Ongoing Support & Guidance',
      description: 'Receive continuous mentorship and support from our experienced team throughout your journey.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Rocket,
      title: 'Business Setup Assistance',
      description: 'Complete guidance on setting up your education center, from location to operations.',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: TrendingUp,
      title: 'Marketing & Growth Strategies',
      description: 'Proven marketing techniques and growth strategies to scale your education business.',
      gradient: 'from-rose-500 to-orange-500'
    }
  ];

  const steps = [
    {
      step: 1,
      title: 'Apply',
      description: 'Submit your franchise application',
      icon: User,
      color: 'from-blue-500 to-purple-500'
    },
    {
      step: 2,
      title: 'Training',
      description: 'Complete our comprehensive training program',
      icon: BookOpen,
      color: 'from-purple-500 to-pink-500'
    },
    {
      step: 3,
      title: 'Launch',
      description: 'Set up and launch your education center',
      icon: Rocket,
      color: 'from-pink-500 to-rose-500'
    },
    {
      step: 4,
      title: 'Support',
      description: 'Receive ongoing operational support',
      icon: Handshake,
      color: 'from-rose-500 to-orange-500'
    },
    {
      step: 5,
      title: 'Grow',
      description: 'Scale your business with our guidance',
      icon: TrendingUp,
      color: 'from-orange-500 to-yellow-500'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Mumbai, Maharashtra',
      image: 'https://images.pexels.com/photos/9159272/pexels-photo-9159272.jpeg',
      quote: 'Starting my Future Key franchise was the best decision I made. The support and guidance helped me build a successful education center that now serves 200+ students.',
      rating: 5
    },
    {
      name: 'Rahul Patel',
      location: 'Bangalore, Karnataka',
      image: 'https://images.pexels.com/photos/31558479/pexels-photo-31558479.jpeg',
      quote: 'The customized syllabus and marketing support made it easy to attract students. Within 6 months, I had a thriving business with excellent student outcomes.',
      rating: 5
    },
    {
      name: 'Tharan Singh',
      location: 'Delhi, NCR',
      image: 'https://images.pexels.com/photos/9663015/pexels-photo-9663015.jpeg',
      quote: 'Future Key provided everything I needed to succeed - from training to ongoing support. My franchise is now expanding to a second location!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-40 bg-gradient-to-br from-black via-gray-900 to-purple-950 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-400 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-600 rounded-full filter blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-purple-900/50 rounded-full text-purple-400 text-sm font-medium mb-6 backdrop-blur-sm border border-purple-800">
                <img
                  src="/fk_final_logo_key.png"
                  alt="Future Key"
                  className="h-4 w-auto mr-2"
                />
                Franchise Partnership Opportunity
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-white">Start Your Own</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Education Franchise
                </span>
                <br />
                <span className="text-white">with Us</span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                Join the Future Key family and build a successful education business with our proven model, comprehensive support, and industry-leading curriculum.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <a
                  href="#franchise-form"
                  className="group px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-full font-semibold text-lg hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-purple-500/50 flex items-center justify-center"
                >
                  Become a Partner
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>

                <a
                  href="tel:+918680870950"
                  className="group px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-full font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center justify-center"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us Now
                </a>
              </div>

              {/* Stats */}
              <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">2+</div>
                  <div className="text-gray-400">Active Franchises</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">150+</div>
                  <div className="text-gray-400">Students Impacted</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">95%</div>
                  <div className="text-gray-400">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl transform rotate-3 scale-105 opacity-20"></div>
                <img
                  src="https://www.indiafilings.com/learn/wp-content/uploads/2018/12/Rights-and-Duties-of-Partners-in-a-Partnership-Firm.jpg"
                  alt="Education franchise partnership"
                  className="relative rounded-3xl shadow-2xl max-w-md lg:max-w-lg hover:scale-105 transition-transform duration-500"
                />

                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-2xl shadow-lg animate-bounce">
                  <Handshake className="h-6 w-6 text-white" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-2xl shadow-lg animate-bounce delay-1000">
                  <span className="text-xl">🚀</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Franchise */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Why Choose
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {' '}Future Key Franchise?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We empower young entrepreneurs with everything they need to build a successful education business. From customized curriculum to ongoing mentorship, we're your partner in success.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Education franchise support"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Proven Business Model</h3>
                  <p className="text-gray-300">Our franchise model has been tested and refined to ensure maximum success for our partners.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Innovation & Technology</h3>
                  <p className="text-gray-300">Stay ahead with our cutting-edge curriculum and modern teaching methodologies.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Brand Recognition</h3>
                  <p className="text-gray-300">Leverage the Future Key brand reputation and trust built over years of excellence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Franchise Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to build and grow a successful education business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 text-center group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-center mb-4">
                    <div className={`p-4 bg-gradient-to-r ${benefit.gradient} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              How It
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {' '}Works
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Your journey to becoming a successful education entrepreneur in 5 simple steps
            </p>
          </div>

          {/* Desktop View */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform -translate-y-1/2 z-0"></div>

              <div className="grid grid-cols-5 gap-4 relative z-10">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.step} className="text-center">
                      <div className="relative mb-6">
                        <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg hover:scale-110 transition-transform duration-300`}>
                          <Icon className="h-10 w-10 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-900 font-bold text-sm shadow-lg">
                          {step.step}
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-300 text-sm">{step.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile View */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center text-gray-900 font-bold text-xs shadow-lg">
                        {step.step}
                      </div>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-0.5 h-12 bg-gradient-to-b from-purple-500 to-pink-500 mx-auto mt-4"></div>
                    )}
                  </div>

                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Hear from our successful franchise partners who are making a difference in education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-purple-500 mr-4"
                  />
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Form */}
      <section id="franchise-form" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Start Your Franchise
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {' '}Journey Today
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Ready to build your own education empire? Fill out the form below and our team will contact you within 24 hours.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Benefits Recap */}
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6">What You Get</h3>

                <div className="space-y-4">
                  {[
                    'Complete business setup guidance',
                    'Proven curriculum and training materials',
                    'Marketing and branding support',
                    'Ongoing operational assistance',
                    'Technology platform access',
                    'Regular performance reviews'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-blue-900/50 via-purple-900/50 to-pink-900/50 rounded-xl border border-purple-700">
                  <div className="text-center">
                    <div className="text-sm text-purple-400 font-medium mb-2">Investment Range</div>
                    <div className="text-2xl font-bold text-white mb-2">Just In Thousands</div>
                    <div className="text-sm text-gray-300">Flexible payment options available</div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                {!isSubmitted ? (
                  <>
                    <h3 className="text-2xl font-bold text-white mb-6">
                      Get Started Today
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          placeholder="Enter your email"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          placeholder="Enter your phone number"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="location"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Preferred Location *
                        </label>
                        <input
                          type="text"
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          placeholder="City, State"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Message (Optional)
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                          placeholder="Tell us about your background and goals"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25 flex items-center justify-center"
                      >
                        Start My Franchise Journey
                        <Send className="ml-2 h-5 w-5" />
                      </button>

                      <p className="text-xs text-gray-400 text-center">
                        By submitting this form, you agree to our terms and conditions. We'll contact you within 24 hours to discuss your franchise opportunity.
                      </p>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full">
                        <CheckCircle className="h-12 w-12 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Application Submitted Successfully!
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      Thank you for your interest in Future Key franchise! Our team will review your application and contact you within 24 hours to discuss the next steps.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-full font-medium hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300"
                    >
                      Submit Another Application
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-950 via-purple-950 to-pink-950">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Transform Lives Through Education?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the Future Key family and build a business that makes a real difference in your community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#franchise-form"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-full font-semibold text-lg hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-purple-500/50 flex items-center"
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>

              <div className="text-sm text-gray-400">
                📞 Call us: +91 8680870950 | 📧 Email: Kailas.manickam8@gmail.com
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center space-x-8 text-gray-400 text-sm">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-purple-400 mr-2" />
                No hidden fees
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-purple-400 mr-2" />
                Ongoing support guaranteed
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Franchise;