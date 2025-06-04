import React from 'react';

function ScoreBoard({ scores }) {
  return (
    <div>
      <h2 className="text-xl font-bold">Classement</h2>
      <ul>
        {scores.map((score, idx) => (
          <li key={idx}>{score.table} : {score.points} points</li>
        ))}
      </ul>
    </div>
  );
}

export default ScoreBoard;
