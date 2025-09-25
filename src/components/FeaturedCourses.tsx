import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Database, Brain, Globe, TrendingUp, ArrowRight, Clock, Users } from 'lucide-react';

const FeaturedCourses = () => {
  const courses = [
    {
      id: 1,
      title: 'Python Programming Fundamentals',
      description: 'Master Python from basics to advanced concepts with real-world projects and practical exercises.',
      price: '4999 INR',
      duration: '4 Weeks',
      students: '34+',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Code,
      level: 'Beginner',
      rating: 4.8
    },
    {
      id: 2,
      title: 'Data Science Mastery',
      description: 'Learn data analysis, visualization, and machine learning techniques with hands-on projects.',
      price: '7999 INR',
      duration: '4 Weeks',
      students: '85+',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Database,
      level: 'Intermediate',
      rating: 4.9
    },
    {
      id: 3,
      title: 'Advanced Machine Learning',
      description: 'Dive deep into AI and ML algorithms with hands-on implementation and real-world case studies.',
      price: '5999 INR',
      duration: '4 Weeks',
      students: '23+',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Brain,
      level: 'Advanced',
      rating: 4.7
    },
    {
      id: 4,
      title: 'Python Full Stack Development',
      description: 'Build modern web applications using Python, Django, databases, and deployment strategies.',
      price: '3499 INR',
      duration: '4 Weeks',
      students: '9+',
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Globe,
      level: 'Intermediate',
      rating: 4.8
    },
    {
      id: 5,
      title: 'Digital Marketing & Analytics',
      description: 'Learn SEO, social media marketing, content strategy, and digital advertising techniques.',
      price: '2499 INR',
      duration: '4 Weeks',
      students: '76+',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: TrendingUp,
      level: 'Beginner',
      rating: 4.6
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Advanced': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-emerald-900/50 rounded-full text-emerald-400 text-sm font-medium mb-4 backdrop-blur-sm border border-emerald-800">
            Featured Courses
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Start Your Learning
            <span className="block bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
              Journey Today
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Choose from our carefully curated selection of courses designed by industry experts to boost your career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <div
                key={course.id}
                className="group bg-gray-800 rounded-2xl overflow-hidden hover:bg-gray-750 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10 border border-gray-700 hover:border-emerald-500/30"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Course Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="p-3 bg-gradient-to-r from-emerald-500 to-green-400 rounded-xl shadow-lg">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getLevelColor(course.level)}`}>
                      {course.level}
                    </span>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                      {course.title}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-sm text-gray-300">{course.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 line-clamp-2">
                    {course.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-emerald-400" />
                        {course.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1 text-emerald-400" />
                        {course.students}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-emerald-400">
                      {course.price}
                    </div>
                    <button className="group/btn px-6 py-2 bg-gradient-to-r from-emerald-500 to-green-400 text-white rounded-full font-medium hover:from-emerald-600 hover:to-green-500 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-emerald-500/25 flex items-center">
                      {course.id === 1 ? (
                        <Link to="/courses/python-programming" className="flex items-center">
                          Enroll Now
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Link>
                      ) : course.id === 2 ? (
                        <Link to="/courses/data-science" className="flex items-center">
                          Enroll Now
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Link>
                      ) : course.id === 3 ? (
                        <Link to="/courses/machine-learning" className="flex items-center">
                          Enroll Now
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Link>
                      ) : course.id === 4 ? (
                        <Link to="/courses/full-stack" className="flex items-center">
                          Enroll Now
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Link>
                      ) : course.id === 5 ? (
                        <Link to="/courses/digital-marketing" className="flex items-center">
                          Enroll Now
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Link>
                      ) : (
                        <>
                          Enroll Now
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            to="/courses"
            className="inline-flex items-center px-8 py-4 bg-gray-800 border border-emerald-500 text-emerald-400 rounded-full font-semibold text-lg hover:bg-emerald-500 hover:text-white transition-all duration-300 hover:scale-105"
          >
            View All Courses
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;