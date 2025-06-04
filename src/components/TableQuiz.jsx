import React from 'react';

function TableQuiz({ tableNumber }) {
  return (
    <div className="p-4 border rounded">
      <h3 className="text-lg font-bold">Table {tableNumber}</h3>
      <p>Questions en cours...</p>
    </div>
  );
}

export default TableQuiz;
