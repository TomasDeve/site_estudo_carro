import { Car } from './types';

export const FEATURED_CARS: Car[] = [
  {
    id: '1',
    make: 'BMW',
    model: 'X5 M Competition',
    year: 2023,
    price: 105000,
    mileage: 1200,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'SUV',
    image: 'https://picsum.photos/id/1070/800/600',
    images: ['https://picsum.photos/id/1070/800/600', 'https://picsum.photos/id/111/800/600', 'https://picsum.photos/id/133/800/600'],
    description: 'The BMW X5 M Competition combines the spirit of a sports car with the functionality of an SAV. Its powerful M TwinPower Turbo V8 engine delivers an impressive 625 hp.',
    features: ['Leather Seats', 'Panoramic Sunroof', 'M Sport Exhaust', 'Head-up Display', 'Adaptive Suspension']
  },
  {
    id: '2',
    make: 'Tesla',
    model: 'Model S Plaid',
    year: 2024,
    price: 89990,
    mileage: 50,
    fuelType: 'Electric',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    image: 'https://picsum.photos/id/1071/800/600',
    images: ['https://picsum.photos/id/1071/800/600', 'https://picsum.photos/id/1072/800/600'],
    description: 'Model S Plaid has the quickest acceleration of any vehicle in production. Updated battery architecture for all trims enables back-to-back track runs without performance degradation.',
    features: ['Autopilot', 'Yoke Steering', '21" Wheels', 'Premium Audio', 'Supercharging']
  },
  {
    id: '3',
    make: 'Mercedes-Benz',
    model: 'C-Class AMG',
    year: 2022,
    price: 55000,
    mileage: 15000,
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    image: 'https://picsum.photos/id/1072/800/600',
    images: ['https://picsum.photos/id/1072/800/600', 'https://picsum.photos/id/106/800/600'],
    description: 'The C-Class AMG represents the perfect entry point into the world of Mercedes-AMG. Efficient yet powerful, offering a dynamic driving experience.',
    features: ['Burmester Sound', 'Ambient Lighting', 'AMG Styling', 'Night Package', 'Heated Seats']
  },
  {
    id: '4',
    make: 'Porsche',
    model: '911 Carrera',
    year: 2021,
    price: 115000,
    mileage: 8500,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'Coupe',
    image: 'https://picsum.photos/id/111/800/600',
    images: ['https://picsum.photos/id/111/800/600', 'https://picsum.photos/id/183/800/600'],
    description: 'The 911 is the quintessential sports car. Unmistakable design, powerful performance, and everyday usability make it a legend.',
    features: ['Sport Chrono', 'PASM', 'Leather Interior', 'Bose Surround', 'Apple CarPlay']
  },
  {
    id: '5',
    make: 'Audi',
    model: 'Q8 e-tron',
    year: 2023,
    price: 74000,
    mileage: 3000,
    fuelType: 'Electric',
    transmission: 'Automatic',
    bodyType: 'SUV',
    image: 'https://picsum.photos/id/133/800/600',
    images: ['https://picsum.photos/id/133/800/600', 'https://picsum.photos/id/183/800/600'],
    description: 'The Audi Q8 e-tron builds on the success of the e-tron with increased range, higher charging power, and a sharpened design.',
    features: ['Virtual Mirrors', 'Air Suspension', 'Bang & Olufsen 3D', 'Matrix LED', 'Valcona Leather']
  },
  {
    id: '6',
    make: 'Ford',
    model: 'Mustang GT',
    year: 2020,
    price: 35000,
    mileage: 25000,
    fuelType: 'Petrol',
    transmission: 'Manual',
    bodyType: 'Coupe',
    image: 'https://picsum.photos/id/183/800/600',
    images: ['https://picsum.photos/id/183/800/600', 'https://picsum.photos/id/1070/800/600'],
    description: 'The Ford Mustang GT is an American icon. With a 5.0L V8 engine, it offers raw power and a thrilling soundtrack.',
    features: ['Recaro Seats', 'Active Valve Exhaust', 'Brembo Brakes', 'SYNC 3', 'Digital Cluster']
  }
];

export const MAKES = ['All', 'BMW', 'Tesla', 'Mercedes-Benz', 'Porsche', 'Audi', 'Ford', 'Toyota'];
export const BODY_TYPES = ['All', 'SUV', 'Sedan', 'Coupe', 'Hatchback', 'Truck'];
