import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FEATURED_CARS } from '../constants';
import { Car } from '../types';
import { ChevronLeft, Calendar, Gauge, Fuel, Shield, Check, Phone, MessageSquare } from 'lucide-react';
import { clsx } from 'clsx';

export const CarDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [car, setCar] = useState<Car | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    // Simulate finding car
    const foundCar = FEATURED_CARS.find(c => c.id === id);
    if (foundCar) {
      setCar(foundCar);
    }
  }, [id]);

  if (!car) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Car not found</h2>
        <Link to="/catalog" className="text-primary hover:underline flex items-center gap-1">
          <ChevronLeft className="w-4 h-4" /> Back to Inventory
        </Link>
      </div>
    );
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Inquiry sent for ${car.make} ${car.model}! We will contact you at ${formData.email}.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link to="/catalog" className="inline-flex items-center text-gray-500 hover:text-primary transition-colors">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Inventory
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Images & Details */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Gallery */}
            <div className="bg-white rounded-2xl p-2 shadow-sm">
              <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-xl mb-2">
                <img 
                  src={car.images[activeImage]} 
                  alt={car.model} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {car.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={clsx(
                      "flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all",
                      activeImage === idx ? "border-primary opacity-100" : "border-transparent opacity-70 hover:opacity-100"
                    )}
                  >
                    <img src={img} alt={`View ${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Description & Features */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-secondary mb-4">Overview</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                {car.description}
              </p>

              <h3 className="text-lg font-bold text-secondary mb-4">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {car.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-700">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-green-600" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Pricing & Contact */}
          <div className="space-y-6">
            {/* Price Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24">
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-secondary mb-1">{car.make} {car.model}</h1>
                <p className="text-gray-500">{car.year} • {car.bodyType}</p>
              </div>

              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold text-primary">${car.price.toLocaleString()}</span>
                <span className="text-gray-400 text-sm">plus taxes & licensing</span>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-2 mb-8 text-center">
                 <div className="p-3 bg-gray-50 rounded-lg">
                    <Calendar className="w-5 h-5 mx-auto text-gray-400 mb-1" />
                    <span className="block text-xs text-gray-500">Year</span>
                    <span className="font-semibold text-secondary">{car.year}</span>
                 </div>
                 <div className="p-3 bg-gray-50 rounded-lg">
                    <Gauge className="w-5 h-5 mx-auto text-gray-400 mb-1" />
                    <span className="block text-xs text-gray-500">Mileage</span>
                    <span className="font-semibold text-secondary">{car.mileage.toLocaleString()}</span>
                 </div>
                 <div className="p-3 bg-gray-50 rounded-lg">
                    <Fuel className="w-5 h-5 mx-auto text-gray-400 mb-1" />
                    <span className="block text-xs text-gray-500">Fuel</span>
                    <span className="font-semibold text-secondary">{car.fuelType}</span>
                 </div>
              </div>

              <hr className="border-gray-100 mb-6" />

              {/* Contact Form */}
              <h3 className="font-bold text-secondary mb-4 flex items-center gap-2">
                <MessageSquare className="w-4 h-4" /> Interested? Send a message
              </h3>
              
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <input 
                    required
                    type="text" 
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-sm"
                  />
                </div>
                <div>
                  <input 
                    required
                    type="email" 
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-sm"
                  />
                </div>
                <div>
                  <textarea 
                    rows={3}
                    placeholder="I am interested in this vehicle..."
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-sm resize-none"
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20">
                  Send Inquiry
                </button>
              </form>

              <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                <p className="text-xs text-gray-500 mb-2">Or call us directly at</p>
                <a href="tel:+15551234567" className="inline-flex items-center gap-2 text-secondary font-bold hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" /> +1 (555) 123-4567
                </a>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="bg-blue-50 p-4 rounded-xl flex items-start gap-3">
              <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-sm text-secondary">AutoPrime Certified</h4>
                <p className="text-xs text-gray-600 mt-1">
                  This vehicle has passed our 150-point inspection and includes a 12-month warranty.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};