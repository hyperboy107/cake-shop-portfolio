import React from 'react';
import { Heart, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
              S.L.V Cake Palace
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Creating sweet memories with every bite. Your celebration, our passion.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-pink-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-pink-400 transition-colors">About</a></li>
              <li><a href="#menu" className="hover:text-pink-400 transition-colors">Menu</a></li>
              <li><a href="#gallery" className="hover:text-pink-400 transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-pink-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>WH4J+74P, KR Layout, JP Nagar 7th Phase, J. P. Nagar</p>
              <p>Bengaluru, Karnataka 560078</p>
              <p>09980701196</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart className="w-4 h-4 text-red-500 mx-2" /> by S.L.V Cake Palace
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2024 S.L.V Cake Palace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;