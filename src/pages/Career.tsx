import React from 'react';
import { Briefcase, TrendingUp, Users, Award, CheckCircle, ArrowRight, Target, Building, Globe, Zap, BarChart3, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const Career = () => {
  const careerPaths = [
    {
      title: 'Prompt Engineer',
      description: 'Design and optimize AI prompts for large language models and AI systems to achieve desired outputs.',
      averageSalary: '₹6-12 LPA',
      skills: ['AI/ML Understanding', 'Natural Language Processing', 'Python', 'Prompt Design', 'LLM Optimization'],
      companies: ['Google', 'Microsoft', 'Amazon', 'Flipkart', 'Zomato'],
      icon: Briefcase,
      growth: '22% growth expected',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Data Analyst',
      description: 'Transform raw data into actionable insights using statistical analysis and visualization tools.',
      averageSalary: '₹5-10 LPA',
      skills: ['Excel', 'SQL', 'Power BI', 'Python', 'Statistical Analysis', 'Data Visualization'],
      companies: ['Deloitte', 'EY', 'KPMG', 'PwC', 'Capgemini'],
      icon: BarChart3,
      growth: '28% growth expected',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'AI Engineer',
      description: 'Develop and implement artificial intelligence solutions and machine learning models for various applications.',
      averageSalary: '₹10-18 LPA',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Deep Learning', 'Computer Vision', 'NLP'],
      companies: ['NVIDIA', 'Intel', 'IBM', 'Microsoft', 'OpenAI'],
      icon: Brain,
      growth: '40% growth expected',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Power BI Developer',
      description: 'Create interactive dashboards and business intelligence solutions using Microsoft Power BI platform.',
      averageSalary: '₹6-12 LPA',
      skills: ['Power BI', 'DAX', 'Power Query', 'SQL', 'Data Modeling', 'Excel'],
      companies: ['Microsoft', 'Accenture', 'Deloitte', 'TCS', 'Infosys'],
      icon: Target,
      growth: '25% growth expected',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg'
    },
    {
      title: 'Data Scientist',
      description: 'Analyze complex data to help organizations make informed business decisions.',
      averageSalary: '₹8-15 LPA',
      skills: ['Python', 'R', 'Machine Learning', 'Statistics', 'Data Visualization'],
      companies: ['IBM', 'Accenture', 'TCS', 'Wipro', 'Infosys'],
      icon: TrendingUp,
      growth: '35% growth expected',
      image: 'https://images.pexels.com/photos/6153344/pexels-photo-6153344.jpeg'
    },
    {
      title: 'Digital Marketing Specialist',
      description: 'Create and execute digital marketing strategies to grow business online presence.',
      averageSalary: '₹4-8 LPA',
      skills: ['SEO', 'Social Media Marketing', 'Content Strategy', 'Google Ads', 'Analytics'],
      companies: ['Byju\'s', 'Unacademy', 'Swiggy', 'Paytm', 'OYO'],
      icon: TrendingUp,
      growth: '18% growth expected',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg'
    }
  ];

  const placementStats = [
    { number: '95%', label: 'Placement Rate' },
    { number: '₹6.5 LPA', label: 'Average Package' },
    { number: '50+', label: 'Students Placed' },
    { number: '5+', label: 'Partner Companies' }
  ];

  const placementServices = [
    {
      title: 'Resume Building',
      description: 'Professional resume creation and optimization for your target roles.',
      icon: Award
    },
    {
      title: 'Interview Preparation',
      description: 'Mock interviews and technical preparation with industry experts.',
      icon: Users
    },
    {
      title: 'Portfolio Development',
      description: 'Build impressive portfolios showcasing your projects and skills.',
      icon: Briefcase
    },
    {
      title: 'Industry Certifications',
      description: 'Real-time industry certification guidance: PL-300, Oracle MySQL, MS Excel, and more.',
      icon: Award
    },
    {
      title: 'Job Matching',
      description: 'Connect with companies that match your skills and career goals.',
      icon: Target
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Career
            <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
              {' '}Opportunities
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Unlock your dream career with Future Key. We provide the key to open doors to high-growth opportunities in the tech industry.
          </p>
        </div>

        {/* Career Paths */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Popular Career Paths
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore high-demand career opportunities that our courses prepare you for
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {careerPaths.map((career, index) => {
              const Icon = career.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800 rounded-2xl border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 overflow-hidden"
                >
                  <div className="relative h-48">
                    <img
                      src={career.image}
                      alt={career.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="p-3 bg-gradient-to-r from-emerald-500 to-green-400 rounded-xl">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-2">{career.title}</h3>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="bg-emerald-500 text-white px-3 py-1 rounded-full font-medium">
                          {career.averageSalary}
                        </span>
                        <span className="text-emerald-400 font-medium">
                          {career.growth}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {career.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Key Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {career.skills.map((skill, i) => (
                          <span key={i} className="px-3 py-1 bg-gray-700 text-emerald-400 text-sm rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-2">Top Companies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {career.companies.slice(0, 3).map((company, i) => (
                          <span key={i} className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded">
                            {company}
                          </span>
                        ))}
                        <span className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded">
                          +{career.companies.length - 3} more
                        </span>
                      </div>
                    </div>

                    <Link
                      to="/courses"
                      className="w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-400 text-white rounded-xl font-medium hover:from-emerald-600 hover:to-green-500 transition-all duration-300 flex items-center justify-center"
                    >
                      Start Learning
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Placement Support */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Placement Support
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We don't just teach - we help you land your dream job with comprehensive placement assistance
            </p>
          </div>

          {/* Placement Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {placementStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Placement Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {placementServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-gradient-to-r from-emerald-500 to-green-400 rounded-xl">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Course Completion Certificate */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Earn a Certificate of Completion
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Showcase your new skills and enhance your professional profile with a verifiable certificate from Future Key.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center bg-gray-800 rounded-2xl p-6 lg:p-12 border border-gray-700">
            <div className="w-full lg:w-3/4">
              <img
                src="/cert.png"
                alt="Course Completion Certificate"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="bg-gray-800 rounded-2xl p-8 lg:p-12 border border-gray-700">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300">
              Real students, real success stories, real career transformations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Krounchan Shivan',
                role: 'Machine Learning Engineer at AI Innovations',
                package: '₹6 LPA',
                course: 'Data Science Mastery',
                image: 'https://images.pexels.com/photos/6476365/pexels-photo-6476365.jpeg'
              },
              {
                name: 'Karthikeyan S',
                role: 'Data Scientist at Analytics Pro',
                package: '₹8 LPA',
                course: 'Machine Learning',
                image: 'https://images.pexels.com/photos/33955746/pexels-photo-33955746.jpeg'
              },
              {
                name: 'Valliyammai M',
                role: 'Digital Marketer at Creative Agency',
                package: '₹5 LPA',
                course: 'Digital Marketing Mastery',
                image: 'https://images.pexels.com/photos/31868218/pexels-photo-31868218.jpeg'
              }
            ].map((story, index) => (
              <div key={index} className="text-center">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-emerald-500"
                />
                <h3 className="text-xl font-bold text-white mb-2">{story.name}</h3>
                <p className="text-emerald-400 font-medium mb-1">{story.role}</p>
                <p className="text-gray-300 text-sm mb-2">Package: {story.package}</p>
                <p className="text-gray-400 text-sm">Course: {story.course}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;