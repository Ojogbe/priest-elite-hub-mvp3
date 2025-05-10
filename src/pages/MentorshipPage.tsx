
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import MentorshipCard from '@/components/MentorshipCard';
import { Check, X } from 'lucide-react';

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
      { id: 6, text: 'Access to Private Trading Community', included: true },
      { id: 7, text: 'Priority Support', included: true },
      { id: 8, text: 'Strategy Development Assistance', included: true },
      { id: 9, text: 'Monthly Performance Reviews', included: true }
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
      { id: 6, text: 'Access to Private Trading Community', included: false },
      { id: 7, text: 'Priority Support', included: false },
      { id: 8, text: 'Strategy Development Assistance', included: true },
      { id: 9, text: 'Monthly Performance Reviews', included: false }
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
      { id: 6, text: 'Access to Private Trading Community', included: false },
      { id: 7, text: 'Priority Support', included: false },
      { id: 8, text: 'Strategy Development Assistance', included: false },
      { id: 9, text: 'Monthly Performance Reviews', included: false }
    ],
    popular: false
  }
];

const MentorshipPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Compare Our Mentorship Plans</h1>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Find the perfect mentorship plan to accelerate your trading journey and achieve your financial goals.
          </p>
        </div>
      </section>

      {/* Plans Comparison */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
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

          {/* Detailed Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse mt-12">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-6 py-4 text-left text-gray-700 font-semibold">Features</th>
                  <th className="px-6 py-4 text-center text-gray-700 font-semibold">General Mentorship</th>
                  <th className="px-6 py-4 text-center text-gray-700 font-semibold">Private Mentorship</th>
                  <th className="px-6 py-4 text-center text-priest-orange font-semibold">Lifetime Mentorship</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 text-left font-medium">Price</td>
                  <td className="px-6 py-4 text-center font-semibold">$20</td>
                  <td className="px-6 py-4 text-center font-semibold">$100</td>
                  <td className="px-6 py-4 text-center font-semibold">$200</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 text-left font-medium">Access Duration</td>
                  <td className="px-6 py-4 text-center">1 Month</td>
                  <td className="px-6 py-4 text-center">3 Months</td>
                  <td className="px-6 py-4 text-center">Lifetime</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 text-left font-medium">Trading Materials</td>
                  <td className="px-6 py-4 text-center">Basic Only</td>
                  <td className="px-6 py-4 text-center">Full Access</td>
                  <td className="px-6 py-4 text-center">Full Access</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 text-left font-medium">Mentoring Sessions</td>
                  <td className="px-6 py-4 text-center">Group Only</td>
                  <td className="px-6 py-4 text-center">Bi-weekly One-on-One</td>
                  <td className="px-6 py-4 text-center">Unlimited One-on-One</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 text-left font-medium">Live Trading Sessions</td>
                  <td className="px-6 py-4 text-center"><X className="mx-auto text-red-500" size={20} /></td>
                  <td className="px-6 py-4 text-center"><Check className="mx-auto text-green-500" size={20} /></td>
                  <td className="px-6 py-4 text-center"><Check className="mx-auto text-green-500" size={20} /></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 text-left font-medium">Trading Certificates</td>
                  <td className="px-6 py-4 text-center"><X className="mx-auto text-red-500" size={20} /></td>
                  <td className="px-6 py-4 text-center"><Check className="mx-auto text-green-500" size={20} /></td>
                  <td className="px-6 py-4 text-center"><Check className="mx-auto text-green-500" size={20} /></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 text-left font-medium">Trade Signals & Analysis</td>
                  <td className="px-6 py-4 text-center"><X className="mx-auto text-red-500" size={20} /></td>
                  <td className="px-6 py-4 text-center"><Check className="mx-auto text-green-500" size={20} /></td>
                  <td className="px-6 py-4 text-center"><Check className="mx-auto text-green-500" size={20} /></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 text-left font-medium">Private Community Access</td>
                  <td className="px-6 py-4 text-center"><X className="mx-auto text-red-500" size={20} /></td>
                  <td className="px-6 py-4 text-center"><X className="mx-auto text-red-500" size={20} /></td>
                  <td className="px-6 py-4 text-center"><Check className="mx-auto text-green-500" size={20} /></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 text-left font-medium">Strategy Development</td>
                  <td className="px-6 py-4 text-center"><X className="mx-auto text-red-500" size={20} /></td>
                  <td className="px-6 py-4 text-center"><Check className="mx-auto text-green-500" size={20} /></td>
                  <td className="px-6 py-4 text-center"><Check className="mx-auto text-green-500" size={20} /></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 text-left font-medium">Performance Reviews</td>
                  <td className="px-6 py-4 text-center"><X className="mx-auto text-red-500" size={20} /></td>
                  <td className="px-6 py-4 text-center"><X className="mx-auto text-red-500" size={20} /></td>
                  <td className="px-6 py-4 text-center"><Check className="mx-auto text-green-500" size={20} /></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Which plan is right for me?</h3>
                <p className="text-gray-600">It depends on your trading experience and goals. If you're new to trading, the General Mentorship provides a great starting point. For more personalized support, choose the Private Mentorship. For serious traders committed to long-term success, the Lifetime Mentorship offers the best value.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-600">We accept major credit cards, PayPal, and bank transfers. For cryptocurrency payments, please contact us directly.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Can I upgrade my plan later?</h3>
                <p className="text-gray-600">Yes, you can upgrade from a lower-tier plan to a higher one at any time. The amount you've already paid will be deducted from the higher plan's cost.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Do you offer refunds?</h3>
                <p className="text-gray-600">We offer a 7-day money-back guarantee if you're not satisfied with our service. Please contact us for more details about our refund policy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Trading Journey Today</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of successful traders who have transformed their trading with Priest Elite Hub mentorship.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/register">
                <Button className="bg-priest-orange hover:bg-priest-orange-dark text-white px-8 py-6 text-lg">
                  Register Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MentorshipPage;
