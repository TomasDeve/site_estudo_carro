import { Link } from 'react-router-dom';
import { FEATURED_CARS } from '../constants';
import { CarCard } from '../components/CarCard';
import { ShieldCheck, Clock, Award, ChevronRight, Search } from 'lucide-react';

export const Home = () => {
  const featuredCars = FEATURED_CARS.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/1070/1920/1080" 
            alt="Luxury Car Background" 
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-transparent to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <span className="inline-block py-1 px-3 rounded-full bg-accent/90 text-sm font-bold mb-6 backdrop-blur-sm">
            New Arrivals Available
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Find Your Dream Car <br className="hidden md:block" />
            <span className="text-primary">Without the Hassle</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Browse our curated selection of premium vehicles. inspected, certified, and ready for the road.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/catalog" 
              className="px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2"
            >
              Browse Inventory
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/catalog" 
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              <Search className="w-5 h-5" />
              Advanced Search
            </Link>
          </div>
        </div>
      </section>

      {/* Features/Trust Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gray-50 flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-secondary mb-2">Certified Quality</h3>
                <p className="text-gray-600 text-sm">Every vehicle undergoes a rigorous 150-point inspection before listing.</p>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50 flex items-start gap-4">
              <div className="p-3 bg-orange-100 rounded-lg">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-secondary mb-2">7-Day Return Policy</h3>
                <p className="text-gray-600 text-sm">Love it or return it. We offer a 7-day money-back guarantee on all purchases.</p>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50 flex items-start gap-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-secondary mb-2">Best Price Guarantee</h3>
                <p className="text-gray-600 text-sm">We match any competitor's price for the same vehicle configuration.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Listing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-2">Featured Vehicles</h2>
              <p className="text-gray-600">Hand-picked selections just for you.</p>
            </div>
            <Link to="/catalog" className="text-primary font-semibold hover:text-blue-700 flex items-center gap-1">
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Drive Your Dream?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule a test drive today or start your purchase online. Our team is ready to assist you every step of the way.
          </p>
          <button className="px-8 py-3 bg-accent text-white rounded-lg font-bold hover:bg-orange-600 transition-colors">
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  );
};