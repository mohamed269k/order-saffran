import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '../../components/ui/Card';
import { ShoppingCart, Clock, Star, Award, Truck, Shield, Heart, AlertCircle, ArrowRight, Check } from 'lucide-react';

const PremiumSaffronStore = () => {
  const [selectedGrams, setSelectedGrams] = useState(5);
  const [timeLeft, setTimeLeft] = useState({ minutes: 15, seconds: 0 });
  const [stockLeft, setStockLeft] = useState(12);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds === 0) {
          return prev.minutes === 0
            ? { minutes: 15, seconds: 0 }
            : { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { ...prev, seconds: prev.seconds - 1 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const reviews = [
    { stars: 5, author: 'Sarah M.', text: 'This saffron transformed my paella! Worth every penny.', verified: true },
    { stars: 5, author: 'Chef Michael', text: "The best saffron I've used in my 15 years of cooking.", verified: true },
    { stars: 5, author: 'Emma L.', text: 'Amazing aroma and color. My risotto was restaurant quality!', verified: true },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-red-600 text-white py-3 px-4 text-center font-medium">
        <Clock className="inline-block mr-2 animate-pulse" size={18} />
        Flash Sale Ends In: {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')} | Only {stockLeft} units left at this price!
      </div>
      {/* Remaining code stays unchanged */}
    </div>
  );
};

export default PremiumSaffronStore;
