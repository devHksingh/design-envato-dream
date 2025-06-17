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
    <footer className="bg-[#2d2156] text-white py-8 mt-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
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
        <div className="mt-6 md:mt-0">
          <span>Follow us:</span>
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
      </div>
      <div className="text-center text-xs mt-4 opacity-70">
        © {new Date().getFullYear()} Rainbow Play School. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
