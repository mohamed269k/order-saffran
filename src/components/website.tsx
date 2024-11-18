import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart, Package, Star, Award, Truck, Shield, ChevronDown, Menu, X } from 'lucide-react';

const ZelijPattern = () => (
  <div className="w-full h-8 flex overflow-hidden opacity-20">
    {[...Array(8)].map((_, i) => (
      <div key={i} className="w-16 h-16 rotate-45 transform -translate-y-8" 
           style={{backgroundColor: i % 2 === 0 ? '#9575CD' : '#B71C1C'}} />
    ))}
  </div>
);

const SaffranWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [quantity, setQuantity] = useState(10);
  const [activeSection, setActiveSection] = useState('home');
  
  const theme = {
    primary: '#B71C1C',
    accent: '#9575CD',
    gold: '#FFD700',
    text: '#2D3748',
    light: '#F7FAFC'
  };

  const subscriptionPlans = [
    {
      name: "Premium Monthly",
      amount: "150g",
      price: 449,
      savings: "50% off retail",
      features: ["Best value", "Free priority shipping", "Monthly recipe book"]
    },
    {
      name: "Standard Monthly",
      amount: "70g",
      price: 199,
      savings: "45% off retail",
      features: ["Great savings", "Free shipping", "Monthly tips"]
    }
  ];

  const navItems = ['Home', 'Shop', 'About', 'Contact'];

  return (
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold" style={{color: theme.primary}}>Saffran</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map(item => (
                <button 
                  key={item}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2"
                  onClick={() => setActiveSection(item.toLowerCase())}
                >
                  {item}
                </button>
              ))}
              <button 
                className="flex items-center px-4 py-2 rounded-full text-white"
                style={{backgroundColor: theme.primary}}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Cart
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              {navItems.map(item => (
                <button
                  key={item}
                  className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
                  onClick={() => {
                    setActiveSection(item.toLowerCase());
                    setIsMenuOpen(false);
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/25" />
        <div className="relative max-w-7xl mx-auto px-4 py-24 text-white">
          <h1 className="text-5xl font-bold mb-6">
            Experience the World's Finest Saffron
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Hand-harvested from the Atlas Mountains of Morocco, our premium saffron brings centuries of tradition to your kitchen.
          </p>
          <button 
            className="px-8 py-3 rounded-full text-lg font-semibold shadow-lg"
            style={{backgroundColor: theme.primary}}
          >
            Shop Now
          </button>
        </div>
        <ZelijPattern />
      </div>

      {/* Features */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="w-12 h-12 mx-auto mb-4" style={{color: theme.primary}} />
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">Grade I Superior Saffron, certified organic and pure</p>
            </div>
            <div className="text-center">
              <Truck className="w-12 h-12 mx-auto mb-4" style={{color: theme.primary}} />
              <h3 className="text-xl font-semibold mb-2">Free Global Shipping</h3>
              <p className="text-gray-600">Delivered to your door, wherever you are</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-4" style={{color: theme.primary}} />
              <h3 className="text-xl font-semibold mb-2">Satisfaction Guaranteed</h3>
              <p className="text-gray-600">30-day money-back guarantee</p>
            </div>
          </div>
        </div>
      </div>

      {/* Shop Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Saffron</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* One-time Purchase */}
            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent>
                <h3 className="text-2xl font-bold mb-4">One-Time Purchase</h3>
                <div className="mb-6">
                  <p className="text-xl mb-4">Premium Grade Saffron</p>
                  <p className="text-3xl font-bold mb-2" style={{color: theme.primary}}>
                    $6.99
                    <span className="text-lg text-gray-600"> per gram</span>
                  </p>
                  <div className="flex items-center gap-4 my-6">
                    <label className="text-lg">Quantity (grams):</label>
                    <input 
                      type="number" 
                      min="10"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(10, parseInt(e.target.value) || 10))}
                      className="border p-2 w-24 rounded"
                    />
                  </div>
                  <p className="text-lg mb-4">Total: ${(quantity * 6.99).toFixed(2)}</p>
                  <button 
                    className="w-full py-3 px-6 rounded-full text-white font-semibold transition-transform hover:scale-105"
                    style={{backgroundColor: theme.primary}}
                  >
                    <ShoppingCart className="inline mr-2" />
                    Add to Cart
                  </button>
                  <p className="text-sm mt-2 text-gray-600">Minimum order: 10 grams</p>
                </div>
              </CardContent>
            </Card>

            {/* Subscription Plans */}
            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent>
                <h3 className="text-2xl font-bold mb-4">Monthly Subscription</h3>
                <div className="space-y-6">
                  {subscriptionPlans.map((plan, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:border-purple-300 transition-colors">
                      <h4 className="text-xl font-semibold mb-2">{plan.name}</h4>
                      <p className="text-lg mb-1">{plan.amount} monthly</p>
                      <p className="text-3xl font-bold mb-2" style={{color: theme.primary}}>
                        ${plan.price}
                        <span className="text-lg text-gray-600">/month</span>
                      </p>
                      <p className="text-green-600 mb-4">{plan.savings}</p>
                      <ul className="mb-4">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-center mb-2">
                            <Star className="w-4 h-4 mr-2" style={{color: theme.gold}} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <button 
                        className="w-full py-3 px-6 rounded-full text-white font-semibold transition-transform hover:scale-105"
                        style={{backgroundColor: theme.accent}}
                      >
                        <Package className="inline mr-2" />
                        Subscribe Now
                      </button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg mb-4 text-gray-700">
                In the heart of Morocco's Atlas Mountains, our saffron is carefully hand-harvested by local farmers using traditional methods passed down through generations.
              </p>
              <p className="text-lg mb-6 text-gray-700">
                Each crimson thread represents centuries of expertise and dedication to producing the world's finest saffron.
              </p>
              <button 
                className="px-6 py-3 rounded-full font-semibold border-2 transition-colors hover:bg-gray-50"
                style={{borderColor: theme.primary, color: theme.primary}}
              >
                Learn More
              </button>
            </div>
            <div className="relative">
              <img 
                src="/api/placeholder/600/400" 
                alt="Moroccan saffron fields" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Saffran</h3>
              <p className="text-gray-400">Premium Moroccan Saffron</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button className="hover:text-white">Shop</button></li>
                <li><button className="hover:text-white">About Us</button></li>
                <li><button className="hover:text-white">Contact</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button className="hover:text-white">Shipping</button></li>
                <li><button className="hover:text-white">Returns</button></li>
                <li><button className="hover:text-white">FAQ</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe for recipes and special offers</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="px-4 py-2 rounded-l w-full text-gray-900"
                />
                <button 
                  className="px-4 py-2 rounded-r text-white"
                  style={{backgroundColor: theme.primary}}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 Saffran. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default function SaffranWebsite()
