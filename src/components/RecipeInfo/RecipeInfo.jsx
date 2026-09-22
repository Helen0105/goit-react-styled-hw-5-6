import {Time} from "./RecipeInfo.styled"
import {Serv} from "./RecipeInfo.styled"
import {RecipeInfoContainer} from "./RecipeInfo.styled"
import { GoClock } from "react-icons/go";
import { GiPieSlice } from "react-icons/gi";
import { TfiAlarmClock } from "react-icons/tfi";
import { LuChartNoAxesColumnDecreasing } from "react-icons/lu";
export function RecipeInfo({ time, servings, calories }) {
  return (
    <RecipeInfoContainer className="recipe-info">
      <Time><TfiAlarmClock /> {time}</Time>
      <Serv> <GiPieSlice /> {servings}</Serv>
      <span> <LuChartNoAxesColumnDecreasing /> {calories}</span>
    </RecipeInfoContainer>
  );
}

export default RecipeInfo;