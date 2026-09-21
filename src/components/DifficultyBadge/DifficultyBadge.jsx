export function DifficultyBadge({ difficulty }) {
  return (
    <div className="difficulty-container">
      <p>Difficulty</p>
      <div>
        <span className={difficulty === 'Easy' ? 'active' : ''}>Easy</span>
        <span className={difficulty === 'Medium' ? 'active' : ''}>Medium</span>
        <span className={difficulty === 'Hard' ? 'active' : ''}>Hard</span>
      </div>
    </div>
  );
}