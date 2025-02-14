import InstagramFeed from '../components/InstagramFeed';
import Footer from '../components/Footer';
import { Megaphone, Code } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Illustration */}
          <div className="relative h-[300px] bg-[#E8F3E8] rounded-lg overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-[#8BA888]" />
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-16 bg-white rounded-full" />
                <div className="w-24 h-16 bg-white rounded-full ml-12 -mt-8" />
              </div>
            </div>
          </div>

          {/* Right side - Text */}
          <div>
            <h1 className="text-5xl font-script text-[#2B432B] mb-6">4 guys who like greens!</h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-2 py-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Logo */}
          <div>
            <div className="w-90 h-90 relative">
              <img src="/src/assets/images/shopping.png" alt="Supreme Microgreens Logo" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Right side - Text */}
          <div className="space-y-3">
            <p className="text-gray-700 leading-relaxed">
              Here at Supreme Microgreens, we are passionate about providing our community with fresh, nutrient-rich microgreens grown right here in Amherst. As a local business, we take pride in our commitment to sustainability, quality, and supporting local food systems.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our journey began with a simple idea: to bring the health benefits and culinary delights of microgreens to our neighbors. What started as a small project in our backyard has blossomed into a thriving business, serving restaurants, farmers' markets, and health-conscious individuals across Western Massachusetts.
            </p>
          </div>
        </div>
      </div>

      {/* Accolades Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* PR Manager */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Megaphone className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Yelizaveta Price</h3>
                  <p className="text-gray-600">PR Manager</p>
                </div>
              </div>
              <p className="text-gray-700">
                Leading our public relations efforts, Yelizaveta ensures our message of sustainability and quality reaches every corner of Western Massachusetts. With a passion for community engagement and storytelling, he's the voice behind our brand's growing presence.
              </p>
            </div>

            {/* Developer */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Code className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Tom Solus</h3>
                  <p className="text-gray-600">Developper</p>
                </div>
              </div>
              <p className="text-gray-700">
                As our tech wizard, Tom brings Supreme Microgreens into the digital age. His expertise in web development and digital solutions helps us connect with our customers and streamline our operations, making fresh microgreens more accessible than ever.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Section */}
      <div className="bg-[#2B432B] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-script text-white text-center mb-12">Let's get social!</h2>
          <InstagramFeed />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;