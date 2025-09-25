import React from 'react';
import { Building, GraduationCap, Users, BarChart3, Code, Database, TrendingUp, CheckCircle, ArrowRight, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'College Internships',
      description: 'Comprehensive internship programs for college students to gain real-world experience in technology and data science.',
      features: [
        '3-6 month structured programs',
        'Industry-relevant projects',
        'Mentorship from experts',
        'Certificate of completion',
        'Potential job opportunities'
      ],
      icon: GraduationCap,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '3-6 months',
      participants: '200+ students',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      title: 'School Internships',
      description: 'Early exposure programs for high school students to explore technology careers and build foundational skills.',
      features: [
        'Age-appropriate curriculum',
        'Basic programming concepts',
        'Technology awareness sessions',
        'Career guidance',
        'Project-based learning'
      ],
      icon: Users,
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '2-4 weeks',
      participants: '150+ students',
      gradient: 'from-green-500 to-green-600'
    },
    {
      id: 3,
      title: 'Contractual Technical Training',
      description: 'Customized training programs for organizations to upskill their workforce in emerging technologies.',
      features: [
        'Customized curriculum design',
        'On-site or remote training',
        'Flexible scheduling',
        'Progress tracking & assessment',
        'Post-training support'
      ],
      icon: Building,
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: 'Flexible',
      participants: '50+ companies',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      id: 4,
      title: 'Data Analytics Projects',
      description: 'End-to-end data analytics solutions for businesses to make data-driven decisions and optimize operations.',
      features: [
        'Data collection & cleaning',
        'Statistical analysis',
        'Interactive dashboards',
        'Predictive modeling',
        'Business insights & recommendations'
      ],
      icon: BarChart3,
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '1-6 months',
      participants: '30+ projects',
      gradient: 'from-emerald-500 to-emerald-600'
    },
    {
      id: 5,
      title: 'Website Development',
      description: 'Custom website development services for businesses and individuals using modern technologies.',
      features: [
        'Responsive web design',
        'E-commerce solutions',
        'Content management systems',
        'SEO optimization',
        'Performance optimization'
      ],
      icon: Globe,
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '2-8 weeks',
      participants: '20+ projects',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      id: 6,
      title: 'Social Media Marketing',
      description: 'Comprehensive social media marketing services to boost your online presence and engagement.',
      features: [
        'Social media strategy development',
        'Content creation and curation',
        'Community management',
        'Paid advertising campaigns',
        'Analytics and reporting'
      ],
      icon: TrendingUp,
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: 'Ongoing',
      participants: '15+ clients',
      gradient: 'from-pink-500 to-pink-600'
    }
  ];

  const technologies = [
    { name: 'Python', icon: Code },
    { name: 'Data Science', icon: Database },
    { name: 'Machine Learning', icon: TrendingUp },
    { name: 'Web Development', icon: Building },
    { name: 'Power BI', icon: BarChart3 },
    { name: 'Django', icon: Code }
  ];

  // Updated clientLogos array with correct URLs and no grayscale filter
  const clientLogos = [
    { name: 'TCS', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Tata_Consultancy_Services_old_logo.svg/1200px-Tata_Consultancy_Services_old_logo.svg.png' },
    { name: 'Infosys', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/2560px-Infosys_logo.svg.png' },
    { name: 'Wipro', src: 'https://1000logos.net/wp-content/uploads/2021/05/Wipro-logo.png' },
    { name: 'Accenture', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/2560px-Accenture.svg.png' },
    { name: 'IBM', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png' },
    { name: 'Microsoft', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png' },
    { name: 'Google', src: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'Intel', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Intel_logo_2023.svg/512px-Intel_logo_2023.svg.png' },
    { name: 'Zoho', src: 'https://www.zoho.com/images/zoho-logo.svg' },
    { name: 'Flipkart', src: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Flipkart_Logo_as_of_2025.png?20250531062438' },
    { name: 'Amazon', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png' },
    { name: 'Alstom', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Alstom_logo.svg/640px-Alstom_logo.svg.png' },
    { name: 'Capgemini', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Capgemini_201x_logo.svg/640px-Capgemini_201x_logo.svg.png' },
    { name: 'SLB', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/SLB_Logo_2022.svg/640px-SLB_Logo_2022.svg.png' },
    { name: 'Cognizant', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Cognizant_logo_2022.svg/640px-Cognizant_logo_2022.svg.png' },
    { name: 'Mindtree', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/L%26T.png/640px-L%26T.png' },
    { name: 'HP', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/640px-HP_logo_2012.svg.png' },
    { name: 'Deloitte', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Logo_of_Deloitte.svg/640px-Logo_of_Deloitte.svg.png' },
    { name: 'JP Morgan', src: 'https://upload.wikimedia.org/wikipedia/en/6/6c/Jp_morgan_logo.jpg?20140309070205' },
    { name: 'Caterpillar', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Caterpillar-shortened.svg/150px-Caterpillar-shortened.svg.png' },
    { name: 'Tech Mahindra', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Tech_Mahindra_New_Logo.svg/640px-Tech_Mahindra_New_Logo.svg.png' },
    { name: 'Tesla', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/2560px-Tesla_Motors.svg.png' },
    { name: 'Bosch', src: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Bosch-logo.svg' },
    { name: 'Dell', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dell_logo_2016.svg/1024px-Dell_logo_2016.svg.png' }
  ];

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Our
            <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
              {' '}Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Future Key provides comprehensive services to unlock career opportunities for individuals and organizations through education, training, and data-driven solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-gray-800 rounded-2xl border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <div className={`p-4 bg-gradient-to-r ${service.gradient} rounded-xl shadow-lg`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-300">
                      <span className="bg-black/50 px-3 py-1 rounded-full">
                        Duration: {service.duration}
                      </span>
                      <span className="bg-black/50 px-3 py-1 rounded-full">
                        {service.participants}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-4">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-300">
                          <CheckCircle className="h-5 w-5 text-emerald-400 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>



                  <Link
                    to="/contact"
                    className="px-8 py-4 border-2 border-emerald-500 text-emerald-400 rounded-full font-semibold text-lg hover:bg-emerald-500 hover:text-white transition-all duration-300 hover:scale-105"
                  >
                    Get Free Consultation
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technologies We Work With */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Technologies We Work With
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We leverage cutting-edge technologies to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 text-center"
                >
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-gradient-to-r from-emerald-500 to-green-400 rounded-xl">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-white font-medium text-sm">{tech.name}</h3>
                </div>
              );
            })}
          </div>
        </div>

        {/* Client Testimonials with Logos */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Alumni's Are Work In Fortune 500 Companies
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-blue-1000 hover:border-emerald-500/50 transition-all duration-300 flex items-center justify-center"
              >
                <img
                  src={client.src}
                  alt={`${client.name} Logo`}
                  className="max-h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 lg:p-12 border border-gray-700 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let Future Key be the key to unlock your organization's potential. Contact us to discuss your specific requirements.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-400 text-white rounded-full font-semibold text-lg hover:from-emerald-600 hover:to-green-500 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-emerald-500/25"
            >
              Contact Us
            </Link>
            <Link
              to="/courses"
              className="px-8 py-4 border-2 border-emerald-500 text-emerald-400 rounded-full font-semibold text-lg hover:bg-emerald-500 hover:text-white transition-all duration-300 hover:scale-105"
            >
              View Courses
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;