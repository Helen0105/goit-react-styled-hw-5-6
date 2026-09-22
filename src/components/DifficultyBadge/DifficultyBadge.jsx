import {Badge} from "./DifficultyBadge.styled";
import {Container} from "./DifficultyBadge.styled";
import { DivC } from "./DifficultyBadge.styled";

export function DifficultyBadge({ difficulty }) {
  return (
<Container className="difficulty-container">
      <p>Difficulty</p>
      <DivC>
       <Badge className={difficulty === 0}>Easy</Badge>
        <Badge className={difficulty === 1}>Medium</Badge>
        <Badge className={difficulty === 3}>Hard</Badge>
      </DivC>
    </Container>
  );
}