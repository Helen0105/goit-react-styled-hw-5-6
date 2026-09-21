export function RecipeInfo({time, servings, calories}) {
  return (
<div className="recipe-info">
    <span>{time}</span>
    <span>{servings}</span>
    <span>{calories}</span>
</div>
  );
}

export default RecipeInfo 