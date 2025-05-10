
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import TestimonialsSection from '@/components/TestimonialsSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import MentorshipCard from '@/components/MentorshipCard';
import { ArrowRight, TrendingUp, BookOpen, Users, Award, Play } from 'lucide-react';

const mentorshipPlans = [
  {
    id: 1,
    title: 'Lifetime Mentorship',
    price: 200,
    period: 'once',
    description: 'Premium for serious traders seeking lifelong guidance and support',
    features: [
      { id: 1, text: 'Lifetime Access to All Trading Materials', included: true },
      { id: 2, text: 'One-on-One Mentoring Sessions', included: true },
      { id: 3, text: 'Weekly Live Trading Sessions', included: true },
      { id: 4, text: 'Trading Certificates', included: true },
      { id: 5, text: 'Trade Signals & Analysis', included: true },
      { id: 6, text: 'Access to Private Trading Community', included: true }
    ],
    popular: true
  },
  {
    id: 2,
    title: 'Private Mentorship',
    price: 100,
    period: 'once',
    description: 'Personalized coaching for traders who want dedicated support',
    features: [
      { id: 1, text: '3 Months Access to All Trading Materials', included: true },
      { id: 2, text: 'Bi-weekly One-on-One Sessions', included: true },
      { id: 3, text: 'Weekly Live Trading Sessions', included: true },
      { id: 4, text: 'Trading Certificates', included: true },
      { id: 5, text: 'Trade Signals & Analysis', included: true },
      { id: 6, text: 'Access to Private Trading Community', included: false }
    ],
    popular: false
  },
  {
    id: 3,
    title: 'General Mentorship',
    price: 20,
    period: 'once',
    description: 'Get started with fundamental trading knowledge and community support',
    features: [
      { id: 1, text: '1 Month Access to Basic Trading Materials', included: true },
      { id: 2, text: 'Group Mentoring Sessions', included: true },
      { id: 3, text: 'Weekly Live Trading Sessions', included: false },
      { id: 4, text: 'Trading Certificates', included: false },
      { id: 5, text: 'Trade Signals & Analysis', included: false },
      { id: 6, text: 'Access to Private Trading Community', included: false }
    ],
    popular: false
  }
];

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-20 bg-cover bg-center" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/lovable-uploads/8f61ef66-1c35-4ebb-bc4b-f4bf801314ce.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in text-white">
                Raising Traders, <span className="text-priest-orange">Empowering Lives</span>
              </h1>
              <p className="text-xl mb-8 text-gray-300 max-w-lg">
                Join Priest Elite Hub and transform your trading journey with expert mentorship, 
                proven strategies, and a supportive community.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/mentorship">
                  <Button className="bg-priest-orange hover:bg-priest-orange-dark text-white px-8 py-6 text-lg">
                    Join a Mentorship Plan
                    <ArrowRight size={18} />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="/lovable-uploads/a3aaa974-98d0-405e-98e8-e6f695b9f6bc.png" 
                alt="Priest Elite Hub Logo" 
                className="w-3/4 md:max-w-md animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Founder Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/27a13f6a-b687-4544-b8af-69208f7d83c9.png" 
                  alt="PRIEST - Founder" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet PRIEST</h2>
              <h3 className="text-xl text-priest-orange mb-4">Founder & Lead Mentor</h3>
              <p className="text-gray-600 mb-6">
                With over 10 years of experience in financial markets, PRIEST has helped hundreds of traders 
                transform their trading journey from inconsistent results to profitable strategies. 
                His passion for education and mentorship led to the creation of Priest Elite Hub, 
                where his mission is to raise successful traders and empower lives through financial knowledge.
              </p>
              <p className="text-gray-600 mb-6">
                PRIEST specializes in technical analysis, risk management, and psychological aspects of trading. 
                His unique approach combines practical trading techniques with mindset training to create 
                well-rounded traders who can navigate any market condition.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center">
                  <div className="bg-priest-orange/10 p-3 rounded-full mr-3">
                    <TrendingUp size={24} className="text-priest-orange" />
                  </div>
                  <div>
                    <h4 className="font-semibold">500+</h4>
                    <p className="text-sm text-gray-500">Successful Students</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-priest-orange/10 p-3 rounded-full mr-3">
                    <BookOpen size={24} className="text-priest-orange" />
                  </div>
                  <div>
                    <h4 className="font-semibold">20+</h4>
                    <p className="text-sm text-gray-500">Trading Courses</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-priest-orange/10 p-3 rounded-full mr-3">
                    <Award size={24} className="text-priest-orange" />
                  </div>
                  <div>
                    <h4 className="font-semibold">10+ Years</h4>
                    <p className="text-sm text-gray-500">Trading Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Explainer Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Watch How We Transform Traders</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn about our unique approach to trading education and how we've helped hundreds of traders achieve consistency and profitability.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto aspect-w-16 aspect-h-9 relative">
            <div 
              className="w-full h-0 pb-[56.25%] rounded-lg shadow-lg relative bg-cover bg-center overflow-hidden"
              style={{ 
                backgroundImage: 'url("/lovable-uploads/da54e1e8-cd7d-4a74-9c3d-046a2a810845.png")',
              }}
            >
              {/* Overlay to darken the image slightly */}
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-priest-orange/90 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center cursor-pointer hover:bg-priest-orange transition-colors z-10">
                  <Play size={32} className="text-white ml-1" />
                </div>
              </div>
              <p className="absolute bottom-4 left-0 right-0 text-white font-medium text-center text-shadow z-10">Priest Elite Hub - Trading Mentorship</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mentorship Plans Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mentorship Plans</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the mentorship plan that best fits your trading goals and experience level.
              All plans include access to our exclusive trading community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {mentorshipPlans.map((plan) => (
              <MentorshipCard 
                key={plan.id}
                title={plan.title}
                price={plan.price}
                period={plan.period}
                description={plan.description}
                features={plan.features}
                popular={plan.popular}
              />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/mentorship">
              <Button className="bg-priest-orange hover:bg-priest-orange-dark text-white">
                Compare All Plans
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Priest Elite Hub</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our unique approach to trading education and mentorship sets us apart from the rest.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="bg-priest-orange/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F26522" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <line x1="10" y1="9" x2="8" y2="9"></line>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Comprehensive Curriculum</h3>
              <p className="text-gray-600">
                From basic concepts to advanced strategies, our structured learning path ensures you build a solid trading foundation.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="bg-priest-orange/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Users size={32} className="text-priest-orange" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalized Mentorship</h3>
              <p className="text-gray-600">
                Get direct guidance from experienced mentors who are actively trading in the markets and understand your unique challenges.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="bg-priest-orange/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F26522" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Real Market Experience</h3>
              <p className="text-gray-600">
                Learn with live trading sessions where you can watch real-time analysis, entries, exits, and risk management in action.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="bg-priest-orange/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F26522" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 1 0 7.75"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Supportive Community</h3>
              <p className="text-gray-600">
                Join a network of like-minded traders who share insights, strategies, and support each other on the trading journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Trading?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join Priest Elite Hub today and start your journey towards becoming a confident, 
              consistent, and profitable trader.
            </p>
            <Link to="/register">
              <Button className="bg-priest-orange hover:bg-priest-orange-dark text-white px-8 py-6 text-lg">
                Start Your Trading Journey
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* WhatsApp Button */}
      <WhatsAppButton phoneNumber="1234567890" />
    </div>
  );
};

export default HomePage;
