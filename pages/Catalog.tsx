import { useState, useMemo } from 'react';
import { FEATURED_CARS, MAKES, BODY_TYPES } from '../constants';
import { CarCard } from '../components/CarCard';
import { FilterState } from '../types';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { clsx } from 'clsx';

export const Catalog = () => {
  // Mobile filter state
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter states
  const [filters, setFilters] = useState<FilterState>({
    make: 'All',
    bodyType: 'All',
    minPrice: 0,
    maxPrice: 200000,
  });

  const [searchTerm, setSearchTerm] = useState('');

  // Filtering Logic
  const filteredCars = useMemo(() => {
    return FEATURED_CARS.filter((car) => {
      const matchesMake = filters.make === 'All' || car.make === filters.make;
      const matchesType = filters.bodyType === 'All' || car.bodyType === filters.bodyType;
      const matchesPrice = car.price >= filters.minPrice && car.price <= filters.maxPrice;
      const matchesSearch = 
        car.make.toLowerCase().includes(searchTerm.toLowerCase()) || 
        car.model.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesMake && matchesType && matchesPrice && matchesSearch;
    });
  }, [filters, searchTerm]);

  const handleFilterChange = (key: keyof FilterState, value: string | number) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      make: 'All',
      bodyType: 'All',
      minPrice: 0,
      maxPrice: 200000,
    });
    setSearchTerm('');
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* Header */}
      <div className="bg-secondary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-4">Our Inventory</h1>
          <p className="text-gray-300">Browse through our extensive collection of premium vehicles.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Filters - Desktop & Mobile Wrapper */}
          <div className={clsx(
            "lg:w-1/4 bg-white rounded-xl shadow-lg p-6 h-fit lg:sticky lg:top-24 z-30",
            isFilterOpen ? "fixed inset-0 z-50 overflow-y-auto w-full rounded-none" : "hidden lg:block relative"
          )}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-secondary flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5" /> Filters
              </h2>
              {isFilterOpen && (
                <button onClick={() => setIsFilterOpen(false)} className="lg:hidden p-2 text-gray-500">
                  <X className="w-6 h-6" />
                </button>
              )}
            </div>

            <div className="space-y-6">
              {/* Search (Sidebar version for mobile mostly) */}
              <div className="lg:hidden">
                 <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                 <input
                  type="text"
                  placeholder="Search model..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                />
              </div>

              {/* Make Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Make</label>
                <select
                  value={filters.make}
                  onChange={(e) => handleFilterChange('make', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary outline-none bg-white"
                >
                  {MAKES.map(make => (
                    <option key={make} value={make}>{make}</option>
                  ))}
                </select>
              </div>

              {/* Body Type Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Body Type</label>
                <div className="grid grid-cols-2 gap-2">
                  {BODY_TYPES.map(type => (
                    <button
                      key={type}
                      onClick={() => handleFilterChange('bodyType', type)}
                      className={clsx(
                        "px-3 py-2 text-sm rounded-lg border transition-colors",
                        filters.bodyType === type 
                          ? "bg-primary text-white border-primary" 
                          : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
                      )}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Max Price: ${filters.maxPrice.toLocaleString()}
                </label>
                <input
                  type="range"
                  min="0"
                  max="200000"
                  step="5000"
                  value={filters.maxPrice}
                  onChange={(e) => handleFilterChange('maxPrice', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>$0</span>
                  <span>$200k+</span>
                </div>
              </div>

              <button 
                onClick={clearFilters}
                className="w-full py-2 text-sm text-gray-500 hover:text-secondary underline"
              >
                Reset All Filters
              </button>

              <button 
                 onClick={() => setIsFilterOpen(false)}
                 className="w-full lg:hidden bg-primary text-white py-3 rounded-lg font-bold"
              >
                Show {filteredCars.length} Cars
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Controls */}
            <div className="bg-white p-4 rounded-xl shadow-sm mb-6 flex flex-col sm:flex-row gap-4 justify-between items-center">
              <div className="relative w-full sm:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by make or model..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                />
              </div>
              
              <button 
                onClick={() => setIsFilterOpen(true)}
                className="lg:hidden w-full sm:w-auto px-4 py-2 bg-gray-100 text-secondary rounded-lg font-medium flex items-center justify-center gap-2"
              >
                <SlidersHorizontal className="w-4 h-4" /> Filters
              </button>

              <div className="text-sm text-gray-500 font-medium">
                Showing <span className="text-secondary font-bold">{filteredCars.length}</span> vehicles
              </div>
            </div>

            {/* Grid */}
            {filteredCars.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCars.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-xl shadow-sm">
                <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No vehicles found</h3>
                <p className="text-gray-500 mb-6">Try adjusting your filters or search terms.</p>
                <button 
                  onClick={clearFilters}
                  className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};