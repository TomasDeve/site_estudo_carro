import React from 'react';
import { Link } from 'react-router-dom';
import { Car } from '../types';
import { Gauge, Fuel, Calendar, ArrowRight } from 'lucide-react';

interface CarCardProps {
  car: Car;
}

export const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img
          src={car.image}
          alt={`${car.make} ${car.model}`}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-secondary shadow-sm">
          {car.bodyType}
        </div>
        {car.price < 60000 && (
          <div className="absolute top-3 left-3 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
            Great Deal
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="mb-4">
          <div className="flex justify-between items-start mb-1">
            <h3 className="text-lg font-bold text-secondary line-clamp-1">
              {car.make} {car.model}
            </h3>
          </div>
          <p className="text-primary font-bold text-xl">
            ${car.price.toLocaleString()}
          </p>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-3 gap-2 py-4 border-t border-gray-100 mb-4">
          <div className="flex flex-col items-center justify-center text-center p-2 bg-gray-50 rounded-lg">
            <Calendar className="w-4 h-4 text-gray-400 mb-1" />
            <span className="text-xs font-medium text-gray-700">{car.year}</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center p-2 bg-gray-50 rounded-lg">
            <Gauge className="w-4 h-4 text-gray-400 mb-1" />
            <span className="text-xs font-medium text-gray-700">{car.mileage.toLocaleString()} mi</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center p-2 bg-gray-50 rounded-lg">
            <Fuel className="w-4 h-4 text-gray-400 mb-1" />
            <span className="text-xs font-medium text-gray-700">{car.fuelType}</span>
          </div>
        </div>

        {/* Action */}
        <div className="mt-auto">
          <Link
            to={`/car/${car.id}`}
            className="w-full flex items-center justify-center gap-2 bg-secondary text-white py-3 rounded-lg font-medium hover:bg-slate-700 transition-colors group-hover:bg-primary"
          >
            View Details
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};