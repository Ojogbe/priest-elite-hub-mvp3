
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "5 Essential Trading Strategies Every Beginner Should Know",
    excerpt: "Learn the fundamental trading strategies that will help you build a solid foundation for your trading journey.",
    author: "PRIEST",
    date: "May 5, 2025",
    readTime: "8 min read",
    category: "Trading Basics",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=800&q=80",
    slug: "essential-trading-strategies"
  },
  {
    id: 2,
    title: "Understanding Market Psychology: How to Control Your Emotions While Trading",
    excerpt: "Discover how psychological factors influence your trading decisions and learn techniques to maintain emotional discipline.",
    author: "PRIEST",
    date: "April 28, 2025",
    readTime: "10 min read",
    category: "Psychology",
    image: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=800&q=80",
    slug: "market-psychology"
  },
  {
    id: 3,
    title: "Technical Analysis: The Art of Reading Charts",
    excerpt: "Master the essential chart patterns and indicators that can help you identify potential trading opportunities.",
    author: "PRIEST",
    date: "April 15, 2025",
    readTime: "12 min read",
    category: "Technical Analysis",
    image: "https://images.unsplash.com/photo-1642790551116-304db51e9fd8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=800&q=80",
    slug: "technical-analysis-charts"
  },
  {
    id: 4,
    title: "Risk Management: The Key to Long-Term Trading Success",
    excerpt: "Learn how proper risk management strategies can protect your capital and ensure your longevity in the markets.",
    author: "PRIEST",
    date: "April 10, 2025",
    readTime: "9 min read",
    category: "Risk Management",
    image: "https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=800&q=80",
    slug: "risk-management-trading"
  },
  {
    id: 5,
    title: "From Novice to Expert: A Trader's Journey",
    excerpt: "Follow the inspiring story of how one of our students transformed from a complete beginner to a consistent profitable trader.",
    author: "PRIEST",
    date: "March 30, 2025",
    readTime: "7 min read",
    category: "Success Stories",
    image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=800&q=80",
    slug: "novice-to-expert-journey"
  },
  {
    id: 6,
    title: "The Power of Trading Communities: Learning from Others",
    excerpt: "Discover how being part of a supportive trading community can accelerate your growth and provide invaluable insights.",
    author: "PRIEST",
    date: "March 22, 2025",
    readTime: "6 min read",
    category: "Community",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=800&q=80",
    slug: "trading-communities"
  }
];

const BlogPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Trading Insights & Updates</h1>
          <p className="text-xl mb-0 text-gray-300 max-w-2xl mx-auto">
            Expert articles, market analysis, and success stories to enhance your trading knowledge.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden h-full transition-transform hover:-translate-y-1 hover:shadow-lg">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <span className="bg-gray-100 px-2 py-1 rounded-full">{post.category}</span>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex justify-between items-center mt-4 mb-2">
                    <div className="flex items-center">
                      <div className="bg-priest-orange text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
                        <User size={16} />
                      </div>
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar size={14} className="mr-1" />
                      {post.date}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Link to={`/blog/${post.slug}`} className="w-full">
                    <Button 
                      variant="ghost" 
                      className="w-full text-priest-orange hover:text-priest-orange-dark hover:bg-priest-orange/10 justify-start px-0"
                    >
                      Read More <ArrowRight size={16} className="ml-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-12">
            <nav className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Previous</span>
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-priest-orange hover:bg-gray-50"
              >
                1
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                2
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Next</span>
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-6">
              Get the latest trading insights, market updates, and educational content delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 sm:w-96 rounded-md focus:outline-none focus:ring-2 focus:ring-priest-orange"
              />
              <Button className="bg-priest-orange hover:bg-priest-orange-dark text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
