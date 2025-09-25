import React, { useState } from 'react';
import { Code, Database, Brain, Globe, TrendingUp, Filter, Search, Clock, Users, ArrowRight, Star, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const courses = [
    {
      id: 1,
      title: 'Python Programming Fundamentals',
      description: 'Complete Python programming course covering fundamentals to advanced topics. Learn variables, data types, functions, OOP, file handling, and build real-world projects.',
      price: '4999 INR',
      originalPrice: '10000 INR',
      duration: '4 Weeks',
      students: '34+',
      lessons: '20+',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Code,
      level: 'Beginner',
      category: 'Programming',
      rating: 4.8,
      instructor: 'Karthick',
      skills: ['Python Basics', 'Data Structures', 'Functions & Modules', 'OOP Concepts', 'File Operations', 'Error Handling']
    },
    {
      id: 2,
      title: 'Data Science Mastery',
      description: 'Comprehensive data science program covering data analysis, visualization, statistics, and machine learning using Python, Pandas, and industry-standard tools.',
      price: '7999 INR',
      originalPrice: '15000 INR',
      duration: '4 Weeks',
      students: '20+',
      lessons: '18+',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Database,
      level: 'Intermediate',
      category: 'Data Science',
      rating: 4.9,
      instructor: 'Karthick',
      skills: ['Pandas & NumPy', 'Data Visualization', 'Statistical Analysis', 'Power BI', 'Machine Learning Basics', 'Data Cleaning']
    },
    {
      id: 3,
      title: 'Advanced Machine Learning',
      description: 'Advanced ML course covering deep learning, computer vision, NLP, and AI algorithms. Build production-ready ML models with real-world applications.',
      price: '5999 INR',
      originalPrice: '12000 INR',
      duration: '4 Weeks',
      students: '23+',
      lessons: '24+',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Brain,
      level: 'Advanced',
      category: 'AI/ML',
      rating: 4.7,
      instructor: 'Kailas Manickam',
      skills: ['Deep Learning', 'Computer Vision', 'OpenCV', 'Scikit-Learn', 'Model Optimization', 'Neural Networks']
    },
    {
      id: 4,
      title: 'Python Full Stack Development',
      description: 'Complete full-stack web development using Python Django framework. Learn frontend, backend, databases, APIs, and deployment on cloud platforms.',
      price: '3499 INR',
      originalPrice: '8000 INR',
      duration: '4 Weeks',
      students: '9+',
      lessons: '16+',
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Globe,
      level: 'Intermediate',
      category: 'Web Development',
      rating: 4.8,
      instructor: 'Kailas Manickam',
      skills: ['HTML/CSS/JavaScript', 'Django Framework', 'REST APIs', 'Database Design', 'Authentication', 'Cloud Deployment']
    },
    {
      id: 5,
      title: 'Digital Marketing & Analytics',
      description: 'Master digital marketing strategies including SEO, social media marketing, content creation, Google Ads, and analytics to grow your business online.',
      price: '2499 INR',
      originalPrice: '5000 INR',
      duration: '4 Weeks',
      students: '10+',
      lessons: '20+',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: TrendingUp,
      level: 'Beginner',
      category: 'Marketing',
      rating: 4.6,
      instructor: 'Prasanth',
      skills: ['SEO Optimization', 'Social Media Marketing', 'Content Strategy', 'Google Ads', 'Analytics & Tracking', 'Email Marketing']
    },
    {
      id: 6,
      title: 'Python Automation & Scripting',
      description: 'Learn advanced Python for automation, web scraping, task scheduling, and building powerful scripts to streamline workflows and increase productivity.',
      price: '2499 INR',
      originalPrice: '5000 INR',
      duration: '4 Weeks',
      students: '15+',
      lessons: '20+',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Code,
      level: 'Advanced',
      category: 'Programming',
      rating: 4.8,
      instructor: 'Kailas Manickam',
      skills: ['Web Scraping', 'Task Automation', 'API Integration', 'File Processing', 'Scheduling Scripts', 'GUI Development']
    },
    {
      id: 7,
      title: 'Tally Prime Course',
      description: 'Learn accounting and finance with Tally Prime. From basics to advanced GST, payroll, and financial reports for business growth.',
      price: '5999 INR',
      originalPrice: '12000 INR',
      duration: '4 Weeks',
      students: '12+',
      lessons: '18+',
      image: 'https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: BookOpen,
      level: 'Beginner',
      category: 'Finance',
      rating: 4.7,
      instructor: 'Aarthi',
      skills: ['Tally Basics', 'GST Filing', 'Payroll Management', 'Inventory Handling', 'Financial Reporting']
    },
    {
      id: 8,
      title: 'Generative AI with LangChain & Gemini',
      description: 'Hands-on Generative AI course using LangChain, Gemini API, and AI tools. Build chatbots, AI agents, and automation solutions.',
      price: '3299 INR',
      originalPrice: '6000 INR',
      duration: '4 Weeks',
      students: '21+',
      lessons: '15+',
      image: 'https://images.pexels.com/photos/1181318/pexels-photo-1181318.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Brain,
      level: 'Advanced',
      category: 'AI/ML',
      rating: 4.9,
      instructor: 'Kailas Manickam',
      skills: ['LangChain', 'Gemini API', 'Prompt Engineering', 'AI Agent Design', 'Workflow Automation']
    },
    {
      id: 9,
      title: 'R Programming Essentials',
      description: 'Master R programming for data science, analytics, and visualization. Learn statistical computing and create compelling insights.',
      price: '2499 INR',
      originalPrice: '5000 INR',
      duration: '4 Weeks',
      students: '3+',
      lessons: '5+',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Database,
      level: 'Intermediate',
      category: 'Data Science',
      rating: 4.6,
      instructor: 'Kailas Manickam',
      skills: ['R Basics', 'Data Wrangling', 'Data Visualization', 'Statistical Modeling', 'R Libraries']
    },
    {
      id: 10,
      title: 'Python Libraries Mastery',
      description: 'Deep dive into essential Python libraries: NumPy, Pandas, Matplotlib, Seaborn. Learn data manipulation, visualization, and analysis.',
      price: '4999 INR',
      originalPrice: '10000 INR',
      duration: '4 Weeks',
      students: '17+',
      lessons: '24+',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Code,
      level: 'Intermediate',
      category: 'Programming',
      rating: 4.8,
      instructor: 'Karthick',
      skills: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Data Analysis']
    },
    {
      id: 11,
      title: 'MySQL Database Masterclass',
      description: 'Learn MySQL from basics to advanced concepts. Master queries, joins, indexes, triggers, and database design for applications.',
      price: '4599 INR',
      originalPrice: '10000 INR',
      duration: '4 Weeks',
      students: '4+',
      lessons: '19+',
      image: 'https://images.pexels.com/photos/4508751/pexels-photo-4508751.jpeg',
      icon: Database,
      level: 'Beginner',
      category: 'Database',
      rating: 4.7,
      instructor: 'Karthick',
      skills: ['SQL Queries', 'Joins & Subqueries', 'Indexes', 'Stored Procedures', 'Database Design']
    },
    {
      id: 12,
      title: 'Power BI Data Analytics',
      description: 'A complete course on data analytics using Power BI. Learn data modeling, report creation, DAX functions, and creating interactive dashboards.',
      price: '4499 INR',
      originalPrice: '10000 INR',
      duration: '4 Weeks',
      students: '30+',
      lessons: '28+',
      image: 'https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg',
      icon: TrendingUp, // Using TrendingUp for business/analytics
      level: 'Intermediate',
      category: 'Data Science',
      rating: 4.8,
      instructor: 'Kailas Manickam',
      skills: ['Data Modeling', 'DAX', 'Power Query', 'Data Visualization', 'Report Publishing', 'Dashboard Creation']
    }
  ];

  const categories = ['All', 'Programming', 'Data Science', 'AI/ML', 'Web Development', 'Marketing', 'Finance', 'Database'];

  // 🔽 rest of your component code stays the same


  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Advanced': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Our
            <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
              {' '}Courses
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive collection of courses designed to accelerate your career growth and skill development.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
                    ? 'bg-emerald-500 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => {
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

                  {/* Icon and Level */}
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

                  {/* Discount Badge */}

                  {course.originalPrice && (
                    <div className="absolute bottom-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      SAVE INR {parseInt(course.originalPrice) - parseInt(course.price)}
                    </div>
                  )}

                </div>

                {/* Course Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300 line-clamp-2">
                      {course.title}
                    </h3>
                    <div className="flex items-center space-x-1 ml-2">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-300">{course.rating}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 line-clamp-3 text-sm">
                    {course.description}
                  </p>

                  {/* Instructor */}
                  <div className="text-sm text-emerald-400 mb-3 font-medium">
                    By {course.instructor}
                  </div>

                  {/* Skills */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {course.skills.slice(0, 3).map((skill, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                          {skill}
                        </span>
                      ))}
                      {course.skills.length > 3 && (
                        <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                          +{course.skills.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Course Info */}
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
                    <div className="text-emerald-400">
                      {course.lessons} lessons
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="text-2xl font-bold text-emerald-400">
                        {course.price}
                      </div>
                      {course.originalPrice && (
                        <div className="text-lg text-gray-500 line-through">
                          {course.originalPrice}
                        </div>
                      )}
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
                      ) : course.id === 6 ? (
                        <Link to="/courses/automation" className="flex items-center">
                          Enroll Now
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Link>
                      ) : course.id === 7 ? (
                        <Link to="/courses/tally-prime" className="flex items-center">
                          Enroll Now
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Link>
                      ) : course.id === 8 ? (
                        <Link to="/courses/generative-ai-langchain-gemini" className="flex items-center">
                          Enroll Now
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Link>
                      ) : course.id === 9 ? (
                        <Link to="/courses/r-programming-essentials" className="flex items-center">
                          Enroll Now
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Link>
                      ) : course.id === 10 ? (
                        <Link to="/courses/python-libraries-mastery" className="flex items-center">
                          Enroll Now
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Link>
                      ) : course.id === 11 ? (
                        <Link to="/courses/mysql-database-masterclass" className="flex items-center">
                          Enroll Now
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Link>
                      ) : course.id === 12 ? (
                        <Link to="/courses/power-bi-data-analytics" className="flex items-center">
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

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-4">No courses found</h3>
            <p className="text-gray-400 mb-8">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="px-6 py-3 bg-emerald-500 text-white rounded-full font-medium hover:bg-emerald-600 transition-colors duration-300"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;