import {Time} from "./RecipeInfo.styled"
import {Serv} from "./RecipeInfo.styled"
export function RecipeInfo({ time, servings, calories }) {
  return (
    <div className="recipe-info">
      <Time>{time}</Time>
      <Serv>{servings}</Serv>
      <span>{calories}</span>
    </div>
  );
}

export default RecipeInfo;