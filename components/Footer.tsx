import React from 'react';
import { NavLink } from 'react-router-dom';
import { Zap, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-lux-card border-t border-white/10 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <NavLink to="/" className="flex items-center gap-2 mb-4 group">
              <Zap className="h-6 w-6 text-lux-accent group-hover:text-white transition-colors" />
              <span className="font-heading font-bold text-xl tracking-wider text-white">
                LUX<span className="text-lux-accent">OPS</span>
              </span>
            </NavLink>
            <p className="text-gray-400 text-sm font-sans leading-relaxed">
              Engineering the future of high-speed operations. From the track to the sky, we provide the systems that power elite performance.
            </p>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-white tracking-wide mb-4">Industries</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><NavLink to="/motorsports" className="hover:text-lux-accent transition-colors">Motorsports</NavLink></li>
              <li><NavLink to="/fleets" className="hover:text-lux-accent transition-colors">Commercial Fleets</NavLink></li>
              <li><NavLink to="/drones" className="hover:text-lux-accent transition-colors">Aerial Systems</NavLink></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white tracking-wide mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><NavLink to="/about" className="hover:text-lux-accent transition-colors">About Us</NavLink></li>
              <li><NavLink to="/blog" className="hover:text-lux-accent transition-colors">Insights</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-lux-accent transition-colors">Contact</NavLink></li>
            </ul>
          </div>

          <div>
             <h3 className="font-heading font-semibold text-white tracking-wide mb-4">Connect</h3>
             <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-lux-accent transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="text-gray-400 hover:text-lux-accent transition-colors"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="text-gray-400 hover:text-lux-accent transition-colors"><Instagram className="w-5 h-5" /></a>
             </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 font-sans">© 2024 Lux Ops Systems. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-xs text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;