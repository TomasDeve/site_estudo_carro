export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid';
  transmission: 'Automatic' | 'Manual';
  bodyType: 'SUV' | 'Sedan' | 'Coupe' | 'Hatchback' | 'Truck';
  image: string;
  images: string[];
  description: string;
  features: string[];
}

export interface FilterState {
  make: string;
  minPrice: number;
  maxPrice: number;
  bodyType: string;
}