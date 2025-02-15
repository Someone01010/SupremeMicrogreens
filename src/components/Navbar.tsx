import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ContactForm from './ContactForm';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center -my-8 sm:-my-12 md:-my-16 lg:-my-20">
            <Link 
              to="/" 
              className="flex items-center space-x-2 group"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <img 
                src="/images/logotext.png" 
                alt="Supreme Microgreens Logo" 
                className={`h-24 sm:h-32 md:h-48 lg:h-64 w-auto transform transition-all duration-300 group-hover:scale-105 ${
                  scrolled ? 'scale-75' : 'scale-100'
                }`}
              />
            </Link>

            <div 
              className="hidden md:flex items-center space-x-6"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              {[
                { name: 'Home', path: '/' },
                { name: 'Recipes', path: '/recipes' },
                { name: 'About', path: '/about' },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-lg font-medium transition-all duration-300 hover:scale-105 text-gray-700 hover:text-green-600 ${
                    location.pathname === item.path ? 'border-b-2 border-green-500' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <button 
                onClick={() => setShowContactForm(true)}
                className="px-6 py-1 rounded-lg transition-all duration-300 hover:scale-105 bg-green-600 text-white hover:bg-green-700 text-lg"
              >
                Contact Us
              </button>
            </div>

            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={(e) => {
                e.stopPropagation(); // Prevent event bubbling
                setIsOpen(!isOpen);
              }}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-8 w-8 text-gray-900" />
              ) : (
                <Menu className="h-8 w-8 text-gray-900" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Positioned below the navbar */}
        <div 
          className={`md:hidden fixed left-0 right-0 transition-all duration-300 bg-white shadow-lg ${
            isOpen 
              ? 'translate-y-0 opacity-100 pointer-events-auto' 
              : '-translate-y-full opacity-0 pointer-events-none'
          }`}
          style={{
            top: '3rem', // Reduced top spacing
          }}
        >
          <div className="p-4 space-y-3">
            {[
              { name: 'Home', path: '/' },
              { name: 'Recipes', path: '/recipes' },
              { name: 'About', path: '/about' },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block text-lg font-medium px-4 py-2 rounded-lg transition-colors duration-300 ${
                  location.pathname === item.path 
                    ? 'bg-green-50 text-green-600' 
                    : 'text-gray-700 hover:bg-gray-50 hover:text-green-600'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button 
              onClick={() => {
                setIsOpen(false);
                setShowContactForm(true);
              }}
              className="w-full px-4 py-2 rounded-lg transition-all duration-300 bg-green-600 text-white hover:bg-green-700 text-lg"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </nav>
      {showContactForm && <ContactForm onClose={() => setShowContactForm(false)} />}
    </>
  );
};

export default Navbar;