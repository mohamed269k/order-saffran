import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '/components/ui/';
import { ShoppingCart, Clock, Star, Award, Truck, Shield, Heart, AlertCircle, ArrowRight, Check } from 'lucide-react';

const PremiumSaffronStore = () => {
  const [selectedGrams, setSelectedGrams] = useState(5);
  const [timeLeft, setTimeLeft] = useState({ minutes: 15, seconds: 0 });
  const [stockLeft, setStockLeft] = useState(12);

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
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
    { stars: 5, author: "Sarah M.", text: "This saffron transformed my paella! Worth every penny.", verified: true },
    { stars: 5, author: "Chef Michael", text: "The best saffron I've used in my 15 years of cooking.", verified: true },
    { stars: 5, author: "Emma L.", text: "Amazing aroma and color. My risotto was restaurant quality!", verified: true }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Urgency Bar */}
      <div className="bg-red-600 text-white py-3 px-4 text-center font-medium">
        <Clock className="inline-block mr-2 animate-pulse" size={18} />
        Flash Sale Ends In: {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')} | Only {stockLeft} units left at this price!
      </div>

      {/* Main Product Section */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <img 
                src="/api/placeholder/800/800" 
                alt="Premium Grade 1 Saffron" 
                className="object-cover w-full h-full"
              />
              <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold">
                SAVE 45%
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <img src="/api/placeholder/200/200" alt="Detail 1" className="rounded-lg" />
              <img src="/api/placeholder/200/200" alt="Detail 2" className="rounded-lg" />
              <img src="/api/placeholder/200/200" alt="Detail 3" className="rounded-lg" />
            </div>
          </div>

          {/* Product Info & CTA */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">Premium Persian Saffron</h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-600">(2,547 reviews)</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <p className="text-5xl font-bold text-red-600">$29.99</p>
              <p className="text-xl text-gray-500 line-through">$54.99</p>
              <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full font-medium">
                45% OFF
              </span>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 py-6">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Shield className="text-green-600" />
                Money-Back Guarantee
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Truck className="text-green-600" />
                Free Express Shipping
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Award className="text-green-600" />
                Premium Grade 1
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Check className="text-green-600" />
                Lab Tested & Certified
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <label className="block text-lg font-medium mb-3">Select Amount:</label>
              <div className="grid grid-cols-3 gap-4">
                {[5, 10, 25].map((grams) => (
                  <button
                    key={grams}
                    onClick={() => setSelectedGrams(grams)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedGrams === grams 
                        ? 'border-red-600 bg-red-50' 
                        : 'border-gray-200 hover:border-red-600'
                    }`}
                  >
                    <p className="font-bold">{grams}g</p>
                    <p className="text-sm text-gray-600">
                      ${(29.99 * (grams/5)).toFixed(2)}
                    </p>
                    {grams === 25 && (
                      <span className="text-xs text-red-600 font-medium">
                        Best Value
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-4">
              <button 
                className="w-full py-4 px-6 bg-red-600 text-white rounded-full font-bold text-lg hover:bg-red-700 transform transition hover:scale-105"
              >
                Add to Cart - ${(29.99 * (selectedGrams/5)).toFixed(2)}
                <ArrowRight className="inline-block ml-2" />
              </button>
              
              <p className="text-center text-sm text-gray-600">
                <AlertCircle className="inline-block mr-1" size={16} />
                Only {stockLeft} units left at this price
              </p>
            </div>

            {/* Key Benefits */}
            <Card className="border-none shadow-none bg-gray-50">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Why Choose Our Saffron?</h3>
                <ul className="space-y-3">
                  {[
                    "Highest grade Persian saffron with rich aroma",
                    "Lab-tested for authenticity & purity",
                    "Ethically sourced from family farms",
                    "Intense natural color (250+ color strength)",
                    "Premium packaging preserves freshness"
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="text-green-600 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Trusted by Over 50,000+ Happy Customers
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <div className="flex mb-2">
                    {[...Array(review.stars)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">"{review.text}"</p>
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{review.author}</p>
                    {review.verified && (
                      <span className="text-green-600 text-sm flex items-center">
                        <Check className="w-4 h-4 mr-1" />
                        Verified Purchase
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 md:hidden">
        <button className="w-full py-3 bg-red-600 text-white rounded-full font-bold">
          Add to Cart - ${(29.99 * (selectedGrams/5)).toFixed(2)}
        </button>
      </div>
    </div>
  );
};

export default PremiumSaffronStore;
