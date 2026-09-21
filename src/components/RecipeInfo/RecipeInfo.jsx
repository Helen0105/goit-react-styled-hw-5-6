import {Time} from "./RecipeInfo.styled"

export function RecipeInfo({ time, servings, calories }) {
  return (
    <div className="recipe-info">
      <Time>{time}</Time>
      <span>{servings}</span>
      <span>{calories}</span>
    </div>
  );
}

export default RecipeInfo;