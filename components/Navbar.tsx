import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight, Zap } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  {
    label: 'Industries',
    path: '#', // Placeholder, triggers dropdown
    children: [
      { label: 'Motorsports', path: '/motorsports' },
      { label: 'Fleets', path: '/fleets' },
      { label: 'Drones/Aerial', path: '/drones' },
    ]
  },
  { label: 'Residential', path: '/residential' },
  { label: 'Blog', path: '/blog' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [location]);

  // Handle outside click for dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className="fixed top-0 w-full z-50 bg-lux-bg/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center gap-2 group">
              <Zap className="h-8 w-8 text-lux-accent transition-transform group-hover:scale-110" />
              <span className="font-heading font-bold text-2xl tracking-wider text-white">
                LUX<span className="text-lux-accent">OPS</span>
              </span>
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => {
                if (item.children) {
                  return (
                    <div key={item.label} className="relative" ref={dropdownRef}>
                      <button
                        onClick={toggleDropdown}
                        className="flex items-center gap-1 font-heading text-lg font-medium text-gray-300 hover:text-lux-accent transition-colors px-3 py-2 rounded-md focus:outline-none"
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {dropdownOpen && (
                        <div className="absolute left-0 mt-2 w-48 bg-lux-card border border-white/10 rounded-md shadow-lg py-1 z-50 animate-in fade-in zoom-in-95 duration-200">
                          {item.children.map((child) => (
                            <NavLink
                              key={child.path}
                              to={child.path}
                              className={({ isActive }) =>
                                `block px-4 py-3 text-sm font-sans text-gray-300 hover:bg-white/5 hover:text-lux-accent transition-colors ${
                                  isActive ? 'text-lux-accent bg-white/5' : ''
                                }`
                              }
                            >
                              {child.label}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `font-heading text-lg font-medium transition-colors px-3 py-2 rounded-md ${
                        isActive ? 'text-lux-accent' : 'text-gray-300 hover:text-lux-accent'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-lux-accent hover:bg-white/10 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-lux-card border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => {
              if (item.children) {
                return (
                  <div key={item.label} className="space-y-1">
                     <button
                        onClick={toggleDropdown}
                        className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-heading font-medium text-gray-300 hover:text-lux-accent hover:bg-white/5"
                      >
                        {item.label}
                        <ChevronRight className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-90' : ''}`} />
                      </button>
                      {dropdownOpen && (
                        <div className="pl-4 space-y-1 border-l border-white/10 ml-2">
                           {item.children.map((child) => (
                             <NavLink
                               key={child.path}
                               to={child.path}
                               className={({ isActive }) =>
                                 `block px-3 py-2 rounded-md text-base font-sans font-medium ${
                                   isActive ? 'text-lux-accent bg-white/5' : 'text-gray-400 hover:text-lux-accent hover:bg-white/5'
                                 }`
                               }
                             >
                               {child.label}
                             </NavLink>
                           ))}
                        </div>
                      )}
                  </div>
                );
              }
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-heading font-medium ${
                      isActive ? 'text-lux-accent bg-white/5' : 'text-gray-300 hover:text-lux-accent hover:bg-white/5'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;