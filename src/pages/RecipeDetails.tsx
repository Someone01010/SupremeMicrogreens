import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Clock, Users, ChefHat, ArrowLeft } from 'lucide-react';
import Footer from '../components/Footer';
import { recipes } from './Recipes';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = recipes[Number(id)];

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Spacer for fixed navbar */}
      <div className="h-20" />  

      <div className="max-w-4xl mx-auto px-4 py-8 pt-20"> 
        {/* Fixed button with high z-index */}
        <button 
          onClick={() => navigate('/recipes')}
          className="relative z-[99999] inline-flex items-center px-4 py-2 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition-colors group mb-8 select-none"
        >
          <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
          Back to Recipes
        </button>

        <article className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 relative">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h1 className="text-4xl font-script text-white mb-2">{recipe.title}</h1>
            </div>
          </div>
          
          <div className="p-8">
            <div className="flex items-center gap-6 mb-6 text-gray-600">
              <div className="flex items-center gap-2">
                <Clock size={20} />
                <span>{recipe.prepTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={20} />
                <span>Serves {recipe.servings}</span>
              </div>
              <div className="flex items-center gap-2">
                <ChefHat size={20} />
                <span>{recipe.difficulty}</span>
              </div>
            </div>

            <p className="text-gray-600 mb-8 leading-relaxed">
              {recipe.description}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Ingredients</h3>
                <ul className="space-y-2">
                  {recipe.ingredients.map((ingredient, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600">
                      <span className="w-2 h-2 bg-green-600 rounded-full" />
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Instructions</h3>
                <ol className="space-y-4">
                  {recipe.instructions.map((instruction, i) => (
                    <li key={i} className="flex gap-4 text-gray-600">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-semibold">
                        {i + 1}
                      </span>
                      <span>{instruction}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </article>
      </div>

      <Footer />
    </div>
  );
};

export default RecipeDetails;
