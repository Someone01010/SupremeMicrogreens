import { Instagram, CircleFadingPlus, Facebook} from 'lucide-react';

const Footer = () => {
  return (
    <div className="bg-[#2B432B] py-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
          <div className="flex justify-center md:justify-start">
            <img 
              src="images/logo.png" 
              alt="Supreme Microgreens Logo" 
              className="w-32 sm:w-48 md:w-72 lg:w-96 h-auto object-contain"
            />
          </div>
          <div className="text-white">
            <div className="space-y-1 mb-4">
              <h3 className="text-2xl font-semibold">Want more of us?</h3>
              <p className="text-xl text-white/80 italic">We know you do...</p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-2">Find Us On...</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="https://www.instagram.com/supreme.microgreens/" className="text-white/80 hover:text-white flex items-center gap-2 transition-colors">
                      <Instagram size={18} />
                      <span>Instagram</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.threads.net/@supreme.microgreens?xmt=AQGztOunoAIfL_wMXbDMcrhtx9njBNSzFFkmCn26mbqAqZo" className="text-white/80 hover:text-white flex items-center gap-2 transition-colors">
                      <CircleFadingPlus size={18} />
                      <span>Threads</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/suprememicrogreens/" className="text-white/80 hover:text-white flex items-center gap-2 transition-colors">
                      <Facebook size={18} />
                      <span>Facebook</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Find Us At...</h4>
                <ul className="space-y-2">
                  <li className="text-white/80">Amherst Farmers Market</li>
                  <li className="text-white/80">Greenfield Farmers Market</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-white/10 text-center">
          <p className="text-white/60 text-sm">&copy; {new Date().getFullYear()} Supreme Microgreens. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;