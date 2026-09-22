import RecipeInfo  from "../RecipeInfo/RecipeInfo"
import { DifficultyBadge } from "../DifficultyBadge/DifficultyBadge" 
import {Title} from "./RecipeCard.styled"
import { Container } from "./RecipeCard.styled";
import {Image} from "./RecipeCard.styled"
function RecipeCard({ image, title, time, servings, calories, difficulty }) {
  return (
    <Container className="recipe-card">
      <Image src={image} alt={title} className="recipe-image" />
      <Title>{title}</Title>

      <RecipeInfo time={time} servings={servings} calories={calories} />
      <DifficultyBadge difficulty={difficulty} />
    </Container>
  );
}
   


export default RecipeCard