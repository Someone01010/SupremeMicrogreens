import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { Clock, Users, ChefHat, ArrowRight, Plus } from 'lucide-react';
import { useState } from 'react';
import InstagramFeed from '../components/InstagramFeed';
export const recipes = [
  {
    title: "Peashoot Pesto",
    image: "https://images.unsplash.com/photo-1611712142269-12b7433e28e9?auto=format&fit=crop&q=80",
    description: "A fresh and vibrant pesto made with tender pea shoots. This recipe transforms ordinary pasta into a nutritious delight, perfect for those seeking a healthy twist on a classic favorite.",
    prepTime: "15 mins",
    servings: "4",
    difficulty: "Easy",
    ingredients: [
      "2 cups fresh pea shoots",
      "1/2 cup pine nuts",
      "2 cloves garlic",
      "1/2 cup olive oil",
      "1/4 cup grated parmesan",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Toast pine nuts until golden brown",
      "Blend pea shoots, garlic, and pine nuts",
      "Slowly add olive oil while blending",
      "Mix in parmesan cheese",
      "Season with salt and pepper"
    ]
  },
  {
    title: "Spicy Microgreen Thins",
    image: "https://images.unsplash.com/photo-1603903631918-a6a92fb6ac49?auto=format&fit=crop&q=80",
    description: "Crispy, delicate crackers topped with a spicy blend of microgreens. These elegant appetizers are perfect for entertaining and showcase the vibrant flavors of our signature spicy mix.",
    prepTime: "25 mins",
    servings: "6",
    difficulty: "Medium",
    ingredients: [
      "1 cup assorted spicy microgreens",
      "12 thin crackers or crostini",
      "4 oz cream cheese",
      "1 tbsp honey",
      "Red pepper flakes",
      "Sea salt"
    ],
    instructions: [
      "Soften cream cheese and mix with honey",
      "Spread mixture on crackers",
      "Top with microgreens",
      "Sprinkle with red pepper flakes and sea salt",
      "Serve immediately"
    ]
  },
  {
    title: "Microgreens Pho",
    image: "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&q=80",
    description: "A modern take on the traditional Vietnamese soup, elevated with fresh microgreens. This warming bowl combines aromatic broth with tender noodles and a generous topping of nutrient-rich microgreens.",
    prepTime: "45 mins",
    servings: "4",
    difficulty: "Advanced",
    ingredients: [
      "4 cups microgreens mix",
      "8 cups beef or vegetable broth",
      "Rice noodles",
      "Bean sprouts",
      "Fresh herbs",
      "Lime wedges"
    ],
    instructions: [
      "Prepare broth with spices",
      "Cook rice noodles according to package",
      "Assemble bowls with noodles and broth",
      "Top generously with microgreens",
      "Serve with lime wedges and additional herbs"
    ]
  },
  {
    title: "Microgreen Summer Rolls",
    image: "https://images.unsplash.com/photo-1504472478235-9bc48ba4d60f?auto=format&fit=crop&q=80",
    description: "Fresh and light Vietnamese-inspired summer rolls packed with colorful microgreens. A perfect appetizer or light lunch option that's both healthy and visually stunning.",
    prepTime: "30 mins",
    servings: "4",
    difficulty: "Medium",
    ingredients: [
      "2 cups mixed microgreens",
      "8 rice paper wrappers",
      "1 avocado, sliced",
      "1 carrot, julienned",
      "Fresh mint leaves",
      "Peanut dipping sauce"
    ],
    instructions: [
      "Prepare all vegetables and herbs",
      "Soak rice paper in warm water",
      "Layer ingredients on wrapper",
      "Roll tightly, tucking in sides",
      "Serve with peanut sauce"
    ]
  },
  {
    title: "Microgreen Breakfast Toast",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80",
    description: "Start your day with this nutrient-packed breakfast toast. Creamy avocado, perfectly poached eggs, and a generous handful of fresh microgreens make this a morning favorite.",
    prepTime: "15 mins",
    servings: "2",
    difficulty: "Easy",
    ingredients: [
      "4 slices sourdough bread",
      "2 ripe avocados",
      "4 fresh eggs",
      "1 cup microgreens mix",
      "Red pepper flakes",
      "Sea salt and black pepper"
    ],
    instructions: [
      "Toast bread until golden",
      "Mash avocado and season",
      "Poach eggs until perfect",
      "Spread avocado on toast",
      "Top with egg and microgreens"
    ]
  },
  {
    title: "Microgreen Quinoa Bowl",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80",
    description: "A protein-rich quinoa bowl topped with seasonal roasted vegetables and a variety of microgreens. This nutritious bowl is perfect for meal prep and can be customized to your taste.",
    prepTime: "25 mins",
    servings: "4",
    difficulty: "Easy",
    ingredients: [
      "2 cups quinoa",
      "4 cups mixed microgreens",
      "Roasted vegetables",
      "Tahini dressing",
      "Toasted seeds",
      "Lemon juice"
    ],
    instructions: [
      "Cook quinoa according to package",
      "Roast your choice of vegetables",
      "Prepare tahini dressing",
      "Assemble bowls with quinoa base",
      "Top with microgreens and seeds"
    ]
  },
  {
    title: "Microgreen Sushi Roll",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80",
    description: "A fresh take on traditional sushi, incorporating vibrant microgreens for added nutrition and a pop of color. Perfect for a light lunch or impressive dinner party appetizer.",
    prepTime: "40 mins",
    servings: "4",
    difficulty: "Advanced",
    ingredients: [
      "2 cups sushi rice",
      "4 nori sheets",
      "1 cup mixed microgreens",
      "1 avocado",
      "1 cucumber",
      "Soy sauce for serving"
    ],
    instructions: [
      "Cook sushi rice according to package",
      "Prepare vegetables and microgreens",
      "Assemble rolls with rice and fillings",
      "Roll tightly using bamboo mat",
      "Slice and serve with soy sauce"
    ]
  },
  {
    title: "Microgreen Pizza",
    image: "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?auto=format&fit=crop&q=80",
    description: "A gourmet pizza topped with fresh microgreens after baking, combining the comfort of traditional pizza with the nutritional benefits of microgreens.",
    prepTime: "35 mins",
    servings: "4",
    difficulty: "Medium",
    ingredients: [
      "1 pizza dough",
      "2 cups mixed microgreens",
      "Fresh mozzarella",
      "Cherry tomatoes",
      "Olive oil",
      "Balsamic glaze"
    ],
    instructions: [
      "Preheat oven and pizza stone",
      "Roll out dough and add toppings",
      "Bake until crust is golden",
      "Top with fresh microgreens",
      "Drizzle with balsamic glaze"
    ]
  },
  {
    title: "Microgreen Smoothie Bowl",
    image: "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80",
    description: "A nutrient-packed smoothie bowl featuring a blend of fruits and microgreens, topped with fresh garnishes for a healthy and Instagram-worthy breakfast.",
    prepTime: "10 mins",
    servings: "2",
    difficulty: "Easy",
    ingredients: [
      "1 cup microgreens",
      "1 frozen banana",
      "1 cup mixed berries",
      "1 cup plant-based milk",
      "Granola for topping",
      "Fresh fruit for garnish"
    ],
    instructions: [
      "Blend all ingredients until smooth",
      "Pour into serving bowls",
      "Top with fresh microgreens",
      "Add granola and fresh fruit",
      "Serve immediately"
    ]
  }
];

const RECIPES_PER_PAGE = 3;

const Recipes = () => {
  const [visibleRecipes, setVisibleRecipes] = useState(RECIPES_PER_PAGE);

  const showMoreRecipes = () => {
    setVisibleRecipes(prev => Math.min(prev + RECIPES_PER_PAGE, recipes.length));
  };

  const hasMoreRecipes = visibleRecipes < recipes.length;

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative pt-20">
        <div className="bg-[#2B432B] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515278734953-5bbe533e3b5e?auto=format&fit=crop&q=80')] opacity-20 bg-cover bg-center" />
          <div className="max-w-7xl mx-auto px-4 py-24 relative">
            <h1 
              className="text-6xl font-shabby text-white text-center mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              The Recipe Book
            </h1>
            <p className="text-white/80 text-center max-w-2xl mx-auto text-lg">
              Discover delicious ways to incorporate nutrient-rich microgreens into your daily meals
            </p>
          </div>
        </div>
      </div>

      {/* Recipe Preview Cards */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.slice(0, visibleRecipes).map((recipe, index) => (
            <Link 
              to={`/recipes/${index}`}
              key={index}
              className="group bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 group-hover:text-green-600 transition-colors">
                  {recipe.title}
                </h2>

                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{recipe.prepTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ChefHat size={16} />
                    <span>{recipe.difficulty}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {recipe.description}
                </p>

                <div className="flex items-center text-green-600 font-medium">
                  View Recipe
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {hasMoreRecipes && (
          <div className="flex justify-center mt-12">
            <button
              onClick={showMoreRecipes}
              className="group flex items-center gap-2 bg-white border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-600 hover:text-white transition-all duration-300"
              data-aos="fade-up"
            >
              <Plus size={20} className="group-hover:rotate-90 transition-transform duration-300" />
              Load More Recipes
            </button>
          </div>
        )}
      </div>


      {/* Social Section */}
      <div className="bg-[#2B432B] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 
            className="text-5xl font-shabby text-white text-center mb-12"
            data-aos="fade-up"
          >
            Let's get social!
          </h2>
          <InstagramFeed />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Recipes;