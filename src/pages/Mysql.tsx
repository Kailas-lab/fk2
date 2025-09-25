import React, { useState } from 'react';
import { 
  ArrowRight, 
  Clock, 
  Users, 
  Star, 
  CheckCircle, 
  BookOpen, 
  Code, 
  FileText, 
  Layers,
  User,
  Send,
  Calendar,
  Award,
  Target,
  Zap,
  TrendingUp,
  Database,
  Table,
  Shield,
  Search,
  Settings,
  DollarSign
} from 'lucide-react';

const MySQLCourse = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'MySQL Database Masterclass Enrollment',
    message: 'I would like to enroll in the MySQL Database Masterclass.',
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
        subject: 'MySQL Database Masterclass Enrollment',
        message: 'I would like to enroll in the MySQL Database Masterclass.' 
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitted(true);
      setFormData({ 
        name: '', 
        email: '', 
        phone: '', 
        subject: 'MySQL Database Masterclass Enrollment',
        message: 'I would like to enroll in the MySQL Database Masterclass.' 
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

  const syllabus = [
    {
      day: 1,
      title: 'Database Fundamentals & SQL Basics',
      icon: Database,
      image: 'https://images.pexels.com/photos/17489160/pexels-photo-17489160.jpeg',
      topics: [
        'Introduction to RDBMS and MySQL',
        'Setting up MySQL Server & Workbench',
        'Data types and table creation',
        'CRUD operations: INSERT, SELECT, UPDATE, DELETE'
      ],
      handsOn: 'Creating a database and performing basic data manipulation'
    },
    {
      day: 2,
      title: 'Advanced Querying & Joins',
      icon: Search,
      image: 'https://images.pexels.com/photos/7376/startup-photos.jpg',
      topics: [
        'Filtering data with WHERE and LIKE',
        'Aggregating data with GROUP BY and HAVING',
        'Mastering INNER, LEFT, RIGHT, and FULL JOINS',
        'Subqueries and common table expressions (CTEs)'
      ],
      handsOn: 'Writing complex queries to retrieve insights from multiple tables'
    },
    {
      day: 3,
      title: 'Database Design & Programming',
      icon: Settings,
      image: 'https://images.pexels.com/photos/10725897/pexels-photo-10725897.jpeg',
      topics: [
        'Principles of database normalization',
        'Creating views and managing transactions',
        'Developing stored procedures and functions',
        'Introduction to triggers and events'
      ],
      handsOn: 'Designing a relational database schema and automating tasks'
    },
    {
      day: 4,
      title: 'Optimization & Administration',
      icon: TrendingUp,
      image: 'https://images.pexels.com/photos/5380643/pexels-photo-5380643.jpeg',
      topics: [
        'Query optimization with EXPLAIN',
        'Creating and managing indexes',
        'Backup and restore strategies',
        'User management and security best practices'
      ],
      handsOn: 'Optimizing a slow query and implementing a backup plan'
    }
  ];

  const whyChoose = [
    {
      icon: Target,
      title: 'Practical Learning',
      description: 'Learn by simulating real-world database design and administration tasks.'
    },
    {
      icon: User,
      title: 'Expert Trainer',
      description: 'Learn from an industry expert with extensive experience in database management.'
    },
    {
      icon: Award,
      title: 'Hands-on Projects',
      description: 'Complete 12+ practical exercises and a capstone project to build a strong portfolio.'
    },
    {
      icon: Zap,
      title: 'High-Demand Skills',
      description: 'Gain proficiency in MySQL, a fundamental skill for data analysis, backend development, and DevOps.'
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-24 pb-18">
      {/* Hero Section */}
      <section className="relative py-40 bg-gradient-to-br from-black via-gray-900 to-amber-950 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-400 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px- relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-amber-900/50 rounded-full text-amber-400 text-sm font-medium mb-6 backdrop-blur-sm border border-amber-800">
               
                Database & SQL
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-white">Become a</span>
                <br />
                <span className="bg-gradient-to-r from-amber-400 to-orange-300 bg-clip-text text-transparent">
                  MySQL Master
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 mb-2 font-semibold">
                No prior database experience is required
              </p>
              
              <p className="text-lg text-gray-400 mb-8">
                4 Days Intensive | Fundamentals to Advanced | Hands-on Practice
              </p>

              {/* Price */}
              <div className="flex items-center justify-center lg:justify-start space-x-4 mb-8">
                <div className="text-4xl font-bold text-amber-400">₹4599</div>
                <div className="text-2xl text-gray-500 line-through">₹10000</div>
                <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  54% OFF
                </div>
              </div>

              {/* Course Info */}
              <div className="flex flex-col sm:flex-row gap-6 mb-8 justify-center lg:justify-start">
                <div className="flex items-center text-gray-300">
                  <Clock className="h-5 w-5 text-amber-400 mr-2" />
                  4 Saturdays
                </div>
                <div className="flex items-center text-gray-300">
                  <Users className="h-5 w-5 text-amber-400 mr-2" />
                  4+ Students
                </div>
                <div className="flex items-center text-gray-300">
                  <Star className="h-5 w-5 text-yellow-400 mr-2" />
                  4.9 Rating
                </div>
              </div>

              <a
                href="#enrollment-form"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-400 text-white rounded-full font-semibold text-lg hover:from-amber-600 hover:to-orange-500 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-amber-500/50"
              >
                Enroll Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>

            {/* Hero Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-400 rounded-3xl transform rotate-3 scale-105 opacity-20"></div>
                <img
                  src="https://images.pexels.com/photos/6549358/pexels-photo-6549358.jpeg"
                  alt="A database schema on a computer screen"
                  className="relative rounded-3xl shadow-2xl max-w-md lg:max-w-lg hover:scale-105 transition-transform duration-500"
                />
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 bg-gradient-to-r from-amber-500 to-orange-400 p-3 rounded-2xl shadow-lg animate-bounce">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-orange-400 to-amber-500 p-3 rounded-2xl shadow-lg animate-bounce delay-1000">
                  <Table className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Syllabus */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Course Syllabus –
              <span className="bg-gradient-to-r from-amber-400 to-orange-300 bg-clip-text text-transparent">
                {' '}4 Days Intensive Training On Weekends
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A complete guide to mastering MySQL, from basic queries to advanced administration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {syllabus.map((day, index) => {
              const Icon = day.icon;
              return (
                <div
                  key={day.day}
                  className="bg-gray-800 rounded-2xl border border-gray-700 hover:border-amber-500/50 transition-all duration-300 hover:scale-105 overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-48">
                    <img
                      src={day.image}
                      alt={`Day ${day.day} - ${day.title}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="p-3 bg-gradient-to-r from-amber-500 to-orange-400 rounded-xl">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                          Day {day.day}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white">{day.title}</h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-3">Topics Covered:</h4>
                      <ul className="space-y-2">
                        {day.topics.map((topic, i) => (
                          <li key={i} className="flex items-start text-gray-300 text-sm">
                            <CheckCircle className="h-4 w-4 text-amber-400 mr-2 mt-0.5 flex-shrink-0" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gray-700 p-4 rounded-xl">
                      <h4 className="text-amber-400 font-semibold mb-2 text-sm">Hands-on Practice:</h4>
                      <p className="text-gray-300 text-sm">{day.handsOn}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose This Course */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose This Course?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Designed for practical application and building a solid foundation in data management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-amber-500/50 transition-all duration-300 hover:scale-105 text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-gradient-to-r from-amber-500 to-orange-400 rounded-xl">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enrollment Form */}
      <section id="enrollment-form" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Limited Seats –
                <span className="bg-gradient-to-r from-amber-400 to-orange-300 bg-clip-text text-transparent">
                  {' '}Enroll Now!
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Secure your spot in our next MySQL Masterclass batch. Only 20 seats available!
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Course Highlights */}
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6">Course Highlights</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-gradient-to-r from-amber-500 to-orange-400 rounded-lg">
                      <Calendar className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Duration</h4>
                      <p className="text-gray-300 text-sm">4 Saturdays, 2 hours per day</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-gradient-to-r from-amber-500 to-orange-400 rounded-lg">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Batch Size</h4>
                      <p className="text-gray-300 text-sm">Limited to 20 students for personalized attention</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-gradient-to-r from-amber-500 to-orange-400 rounded-lg">
                      <Award className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Certificate</h4>
                      <p className="text-gray-300 text-sm">Industry-recognized completion certificate</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-gradient-to-r from-amber-500 to-orange-400 rounded-lg">
                      <TrendingUp className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Career Support</h4>
                      <p className="text-gray-300 text-sm">Job placement assistance and career guidance</p>
                    </div>
                  </div>
                </div>

                {/* Price Section */}
                <div className="mt-8 p-6 bg-gradient-to-r from-amber-900/50 to-orange-900/50 rounded-xl border border-amber-700">
                  <div className="text-center">
                    <div className="text-sm text-amber-400 font-medium mb-2">Special Launch Price</div>
                    <div className="flex items-center justify-center space-x-4 mb-2">
                      <span className="text-3xl font-bold text-white">₹4599</span>
                      <span className="text-xl text-gray-400 line-through">₹10000</span>
                    </div>
                    <div className="text-sm text-gray-300">Save ₹5401 (54% discount)</div>
                  </div>
                </div>
              </div>

              {/* Enrollment Form */}
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                {!isSubmitted ? (
                  <>
                    <h3 className="text-2xl font-bold text-white mb-6">
                      Enroll in MySQL Masterclass
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
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
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
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
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
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                          placeholder="Enter your phone number"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Additional Message (Optional)
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                          placeholder="Any questions or special requirements?"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-400 text-white rounded-xl font-semibold hover:from-amber-600 hover:to-orange-500 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-amber-500/25 flex items-center justify-center"
                      >
                        Secure My Spot
                        <Send className="ml-2 h-5 w-5" />
                      </button>

                      <p className="text-xs text-gray-400 text-center">
                        By enrolling, you agree to our terms and conditions. We'll contact you within 24 hours to confirm your enrollment.
                      </p>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-gradient-to-r from-amber-500 to-orange-400 rounded-full">
                        <CheckCircle className="h-12 w-12 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Enrollment Successful!
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      Thank you for enrolling in MySQL Database Masterclass! We'll contact you within 24 hours with course details and payment instructions.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-400 text-white rounded-full font-medium hover:from-amber-600 hover:to-orange-500 transition-all duration-300"
                    >
                      Enroll Another Student
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-950 to-black">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Master Data Management?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 4+ students who have already gained a competitive edge with our MySQL course
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#enrollment-form"
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-400 text-white rounded-full font-semibold text-lg hover:from-amber-600 hover:to-orange-500 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-amber-500/50 flex items-center"
              >
                Enroll Now - ₹4599
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              
              <div className="text-sm text-gray-400">
                💳 Secure payment | 📞 24/7 support | 🎓 Certificate included
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center space-x-8 text-gray-400 text-sm">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-amber-400 mr-2" />
                7-day money back guarantee
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-amber-400 mr-2" />
                Lifetime course access
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MySQLCourse;