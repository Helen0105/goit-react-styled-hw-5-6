import "./App.css"
import { recipesData } from "./components/RecipeCard/recipesData"
import RecipeCard from "./components/RecipeCard/RecipeCard"
function App() {


  return (
    <>
      <div className="recipe-list">
        {recipesData.map((recipe) => (
          <RecipeCard
          key={recipe.id}
          image={recipe.image}
          title={recipe.title}
          time={recipe.time}
          servings={recipe.servings}
          calories={recipe.calories}
          difficulty={recipe.difficulty}

          />
        ))}
      </div>
    </>
  )
}

export default App
