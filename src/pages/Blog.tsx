import React from 'react';
import { Calendar, User, Clock, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: '10 Essential Python Tips for Beginners',
      excerpt: 'Master these fundamental Python concepts to accelerate your programming journey and write cleaner, more efficient code.',
      content: 'Python is one of the most popular programming languages today, and for good reason. Its simple syntax and powerful capabilities make it perfect for beginners...',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Programming',
      tags: ['Python', 'Beginners', 'Tips'],
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      id: 2,
      title: 'The Future of Data Science in 2024',
      excerpt: 'Explore the latest trends, tools, and technologies that are shaping the data science landscape this year.',
      content: 'Data science continues to evolve at a rapid pace. As we move through 2024, several key trends are emerging that will shape the future of this field...',
      author: 'Prof. Michael Chen',
      date: '2024-01-12',
      readTime: '8 min read',
      category: 'Data Science',
      tags: ['Data Science', 'Trends', 'AI'],
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      id: 3,
      title: 'Building Your First Machine Learning Model',
      excerpt: 'A step-by-step guide to creating, training, and deploying your first machine learning model from scratch.',
      content: 'Machine learning might seem daunting at first, but with the right approach, you can build your first model in just a few steps...',
      author: 'Dr. Emily Rodriguez',
      date: '2024-01-10',
      readTime: '12 min read',
      category: 'Machine Learning',
      tags: ['ML', 'Tutorial', 'Beginner'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      id: 4,
      title: 'React Best Practices for Modern Web Development',
      excerpt: 'Learn the latest React patterns and techniques that will help you build scalable and maintainable applications.',
      content: 'React has revolutionized how we build user interfaces. As the ecosystem continues to evolve, new patterns and best practices emerge...',
      author: 'David Thompson',
      date: '2024-01-08',
      readTime: '10 min read',
      category: 'Web Development',
      tags: ['React', 'JavaScript', 'Best Practices'],
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      id: 5,
      title: 'Digital Marketing Strategies That Actually Work',
      excerpt: 'Discover proven digital marketing techniques that can help you grow your online presence and drive real results.',
      content: 'In the crowded digital landscape, effective marketing strategies can make or break your online success...',
      author: 'Emily Rodriguez',
      date: '2024-01-05',
      readTime: '7 min read',
      category: 'Marketing',
      tags: ['Digital Marketing', 'SEO', 'Strategy'],
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      id: 6,
      title: 'Career Transition: From Non-Tech to Tech',
      excerpt: 'A comprehensive guide for professionals looking to transition into the tech industry from other fields.',
      content: 'Making a career transition into tech can be challenging but incredibly rewarding. Here is everything you need to know...',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-03',
      readTime: '15 min read',
      category: 'Career',
      tags: ['Career', 'Transition', 'Tech Jobs'],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    }
  ];

  const categories = ['All', 'Programming', 'Data Science', 'Machine Learning', 'Web Development', 'Marketing', 'Career'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = blogPosts.filter(post => 
    selectedCategory === 'All' || post.category === selectedCategory
  );

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Programming': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Data Science': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'Machine Learning': return 'bg-pink-500/20 text-pink-400 border-pink-500/30';
      case 'Web Development': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Marketing': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'Career': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Learning
            <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
              {' '}Resources
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover the keys to career success with the latest insights, tutorials, and professional advice from our expert instructors and industry professionals.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-emerald-500 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {featuredPost && selectedCategory === 'All' && (
          <div className="mb-16">
            <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-emerald-500/50 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full">
                      FEATURED
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                    <span className={`px-3 py-1 rounded-full border text-xs ${getCategoryColor(featuredPost.category)}`}>
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 hover:text-emerald-400 transition-colors duration-300">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-400 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-gray-300 font-medium">{featuredPost.author}</span>
                    </div>
                    
                    <button className="group px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-400 text-white rounded-full font-medium hover:from-emerald-600 hover:to-green-500 transition-all duration-300 hover:scale-105 flex items-center">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <article
              key={post.id}
              className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full border text-xs ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 hover:text-emerald-400 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-300 mb-4 line-clamp-3 text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 3).map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded flex items-center">
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-400 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-300 text-sm">{post.author}</span>
                  </div>

                  <button className="group text-emerald-400 hover:text-emerald-300 font-medium flex items-center text-sm">
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 lg:p-12 border border-gray-700 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Stay Updated with Our Latest Posts
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest career keys, professional tips, and industry insights delivered straight to your virtual learning space.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-green-400 text-white rounded-xl font-semibold hover:from-emerald-600 hover:to-green-500 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-emerald-500/25">
                Subscribe
              </button>
            </div>

            <p className="text-sm text-gray-400 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;