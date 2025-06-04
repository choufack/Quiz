import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/quiz');
  };

  return (
    <div className="text-center p-6">
      <h1 className="text-3xl font-bold text-red-600">Bienvenue au Quiz de Mariage</h1>
      <p className="mt-4">Choisissez votre table pour commencer le jeu.</p>
      <button
        className="mt-6 px-4 py-2 bg-green-500 text-white rounded"
        onClick={handleStart}
      >
        Commencer
      </button>
    </div>
  );
}

export default Home;
