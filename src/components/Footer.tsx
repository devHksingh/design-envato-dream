
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Globe } from 'lucide-react';

const Footer = () => {
  const navigationLinks = [
    'Home',
    'Administration', 
    'Faculty',
    'Parents & Students',
    'Photo Gallery',
    'Bookmarks',
    'Calendar'
  ];

  const socialIcons = [
    { icon: Instagram, color: 'bg-pink-500 hover:bg-pink-600' },
    { icon: Facebook, color: 'bg-blue-600 hover:bg-blue-700' },
    { icon: Twitter, color: 'bg-blue-400 hover:bg-blue-500' },
    { icon: Globe, color: 'bg-gray-600 hover:bg-gray-700' },
    { icon: Youtube, color: 'bg-red-600 hover:bg-red-700' },
    { icon: Linkedin, color: 'bg-blue-700 hover:bg-blue-800' },
  ];

  return (
    <footer className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white py-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-orange-400 opacity-20 rounded-full -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-yellow-400 opacity-10 rounded-full translate-x-24 translate-y-24"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {navigationLinks.map((link, index) => (
            <a 
              key={index} 
              href="#" 
              className="text-white hover:text-yellow-300 transition-colors font-medium"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Social Media Section */}
        <div className="text-center mb-8">
          <p className="text-white mb-6 text-lg">Follow Us:</p>
          <div className="flex justify-center space-x-4">
            {socialIcons.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href="#"
                  className={`w-10 h-10 ${social.color} rounded-full flex items-center justify-center transition-colors`}
                >
                  <IconComponent className="w-5 h-5 text-white" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-purple-700 pt-8">
          <p className="text-gray-300 text-sm">&copy; 2024 Rainbow Kids Learning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
