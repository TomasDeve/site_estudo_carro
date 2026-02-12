import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Car, Phone } from 'lucide-react';
import { clsx } from 'clsx';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Inventory', path: '/catalog' },
    { name: 'About', path: '/about' }, // Placeholder link
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="bg-primary p-2 rounded-lg">
                <Car className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-secondary">
                AutoPrime
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={clsx(
                  "text-sm font-medium transition-colors duration-200",
                  isActive(link.path)
                    ? "text-primary"
                    : "text-gray-600 hover:text-primary"
                )}
              >
                {link.name}
              </Link>
            ))}
            <button className="bg-secondary text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-700 transition-colors flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Contact Sales
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-700 focus:outline-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={clsx(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  isActive(link.path)
                    ? "bg-blue-50 text-primary"
                    : "text-gray-700 hover:bg-gray-50 hover:text-primary"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 pb-2">
               <button className="w-full bg-secondary text-white px-5 py-3 rounded-lg text-base font-medium hover:bg-slate-700 transition-colors flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};