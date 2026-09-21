import RecipeInfo  from "../RecipeInfo/RecipeInfo"
import { DifficultyBadge } from "../DifficultyBadge/DifficultyBadge" 

function RecipeCard({ image, title, time, servings, calories, difficulty }) {
  return (
    <div className="recipe-card">
      <img src={image} alt={title} className="recipe-image" />
      <h2>{title}</h2>

      <RecipeInfo time={time} servings={servings} calories={calories} />
      <DifficultyBadge difficulty={difficulty} />
    </div>
  );
}
   


export default RecipeCard