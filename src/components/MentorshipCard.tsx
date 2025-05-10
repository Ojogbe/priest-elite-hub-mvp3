
import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MentorshipFeature {
  id: number;
  text: string;
  included: boolean;
}

interface MentorshipCardProps {
  title: string;
  price: number;
  period?: string;
  description: string;
  features: MentorshipFeature[];
  popular?: boolean;
  buttonText?: string;
  buttonLink?: string;
}

const MentorshipCard: React.FC<MentorshipCardProps> = ({
  title,
  price,
  period,
  description,
  features,
  popular = false,
  buttonText = "Register Now",
  buttonLink = "/register"
}) => {
  return (
    <Card className={`pricing-card h-full border ${popular ? 'border-priest-orange' : 'border-gray-200'} transition-all duration-300 relative overflow-hidden`}>
      {popular && (
        <div className="absolute top-0 right-0">
          <div className="bg-priest-orange text-white text-xs font-semibold px-3 py-1 transform rotate-45 translate-x-8 translate-y-2">
            POPULAR
          </div>
        </div>
      )}
      <CardHeader className={`text-center pb-8 pt-6 ${popular ? 'bg-priest-orange text-white' : ''}`}>
        <h3 className={`text-2xl font-bold ${popular ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
        <div className="mt-4">
          <span className={`text-4xl font-bold ${popular ? 'text-white' : 'text-priest-orange'}`}>${price}</span>
          {period && <span className={`text-sm ml-1 ${popular ? 'text-white/80' : 'text-gray-500'}`}>{period}</span>}
        </div>
        <p className={`mt-2 ${popular ? 'text-white/80' : 'text-gray-600'}`}>{description}</p>
      </CardHeader>
      <CardContent className="pt-6">
        <ul className="space-y-3">
          {features.map((feature) => (
            <li key={feature.id} className="flex items-start">
              <div className={`flex-shrink-0 rounded-full p-1 ${feature.included ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                {feature.included ? (
                  <Check size={16} />
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <span className={`ml-3 text-gray-700 ${!feature.included && 'line-through text-gray-400'}`}>{feature.text}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="pt-4 pb-6">
        <Link to={buttonLink} className="w-full">
          <Button 
            className={`w-full ${popular ? 'bg-priest-orange hover:bg-priest-orange-dark' : 'bg-black hover:bg-gray-800'} text-white`}
          >
            {buttonText}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default MentorshipCard;
