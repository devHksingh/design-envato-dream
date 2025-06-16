
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mr-2"></div>
            <h1 className="text-2xl font-bold text-purple-800">Rainbow</h1>
            <span className="text-sm text-gray-600 ml-1">kids learning</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">
              HOME
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">
              ABOUT US
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">
              PAGES
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">
              PROGRAMS
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">
              GALLERY
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">
              CONTACT
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <button className="bg-yellow-400 text-purple-800 px-6 py-2 rounded-full font-bold hover:bg-yellow-500 transition-colors">
              REGISTER
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-purple-600 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="space-y-2">
              <a href="#" className="block text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium">
                HOME
              </a>
              <a href="#" className="block text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium">
                ABOUT US
              </a>
              <a href="#" className="block text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium">
                PAGES
              </a>
              <a href="#" className="block text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium">
                PROGRAMS
              </a>
              <a href="#" className="block text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium">
                GALLERY
              </a>
              <a href="#" className="block text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium">
                CONTACT
              </a>
              <button className="w-full mt-4 bg-yellow-400 text-purple-800 px-6 py-2 rounded-full font-bold hover:bg-yellow-500 transition-colors">
                REGISTER
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
