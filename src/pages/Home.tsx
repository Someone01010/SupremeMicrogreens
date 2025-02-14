import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import InstagramFeed from '../components/InstagramFeed';
import Footer from '../components/Footer';



const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1524179091875-bf99a9a6af57?auto=format&fit=crop&q=80"
            alt="Fresh Microgreens"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-6xl font-shabby mb-6 leading-tight" data-aos="fade-up" data-aos-duration="1000">
              Tiny yet mighty...
            </h1>
            <p className="text-xl font-montserrat mb-8 text-gray-200" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
              Here at Supreme Microgreens, we are all about providing our community with fresh, nutrient-rich microgreens grown right here in the Pioneer Valley.
            </p>
            <div className="flex gap-4" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
              <Link to="/about" className="inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all hover:translate-y-[-2px]">
                Learn More
                <ArrowRight className="ml-2" />
              </Link>
              <Link to="/recipes" className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all hover:translate-y-[-2px]">
                View Recipes
              </Link>
            </div>
          </div>
        </div>
      </section>


{/* Floating Logo Container */}
<div className="relative z-10 h-0">
        <div className="absolute right-10 -top-48 transform translate-x-1/3">
          <div 
            className="relative w-96 h-96 animate-tilt"
            style={{
              animation: 'tilt 10s infinite linear'
            }}
          >
            <img 
              src="/src/assets/images/logogreen.png"
              alt="Supreme Microgreens Circle Logo"
              className="w-full h-full object-contain"
              data-aos="fade-left"
              data-aos-duration="1000"
            />
            {/* Add a subtle shadow effect */}
            <div 
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle at center, rgba(43, 67, 43, 0.1) 0%, rgba(43, 67, 43, 0) 70%)',
                transform: 'scale(1.1)',
                zIndex: -1
              }}
            />
          </div>
        </div>
      </div>

      {/* Why Microgreens Section */}
      <section className="py-24 bg-[#f7f7f3]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-montserrat-bold text-[#314b26] mb-16 text-left" data-aos="fade-up">
            Why Microgreens?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
              <div className="mb-6 transform transition-transform group-hover:scale-110 duration-300">
                <span className="text-6xl font-script text-[#746f61]">1.</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                High in Nutrients
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Packed with beneficial vitamins, minerals, and enzymes. Up to 40 times more potent than mature vegetables!
              </p>
            </div>

            <div className="group text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              <div className="mb-6 transform transition-transform group-hover:scale-110 duration-300">
                <span className="text-6xl font-shabby text-green-600">2.</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                Environmentally Conscious
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Sustainable growing practices that minimize water usage and eliminate the need for harmful pesticides.
              </p>
            </div>

            <div className="group text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
              <div className="mb-6 transform transition-transform group-hover:scale-110 duration-300">
                <span className="text-6xl font-shabby text-green-600">3.</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                Bursting With Flavor
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Intense, concentrated flavors that elevate any dish. From spicy to nutty, we've got your taste buds covered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nutrient Information Section */}
      <section className="py-16 bg-[#9caf8a]">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-lg text-[#314b26] text-center leading-relaxed max-w-4xl mx-auto" data-aos="fade-up">
            Despite their small stature, they are a concentrated nutrient powerhouse packed with beneficial vitamins, minerals and enzymes. Microgreens have been found to have more health benefits than any other vegetable and can be up to 40 times more potent in vitamins & nutrients.
          </p>
        </div>
      </section>

      {/* Recipe Preview Section */}
      <section className="relative py-24 bg-[#2B432B] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/src/assets/images/leaves.jpeg" 
            alt="Leafy Background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-montserrat-bold text-white mb-16 text-center" data-aos="fade-up">
            Lookin' for recipes?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Peashoot Pesto",
                image: "https://images.unsplash.com/photo-1611712142269-12b7433e28e9?auto=format&fit=crop&q=80",
              },
              {
                title: "Spicy Microgreen Thins",
                image: "https://images.unsplash.com/photo-1603903631918-a6a92fb6ac49?auto=format&fit=crop&q=80",
              },
              {
                title: "Microgreens Pho",
                image: "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&q=80",
              }
            ].map((recipe, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg bg-white/5 backdrop-blur-sm"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <img 
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <h3 className="text-white text-xl font-semibold">{recipe.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section className="bg-[#2B432B] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-shabby text-white text-center mb-12" data-aos="fade-up">
            Let's get social!
          </h2>
          <InstagramFeed />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;