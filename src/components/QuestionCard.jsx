import React from 'react';

function QuestionCard({ question, options, onSelect }) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">{question}</h2>
      {options.map((opt, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className="block mb-2 px-4 py-2 bg-blue-300 rounded"
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export default QuestionCard;
