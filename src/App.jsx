import "./App.css"
import { recipesData } from "./components/RecipeCard/recipesData"
import RecipeCard from "./components/RecipeCard/RecipeCard"
import {RecipeList} from "./App.styled"
function App() {


  return (
    <>
      <RecipeList className="recipe-list">
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
      </RecipeList>
    </>
  )
}

export default App
