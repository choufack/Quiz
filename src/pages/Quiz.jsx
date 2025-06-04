import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { db } from '../utils/Firebase'; // Assurez-vous que le chemin est correct
import { collection, addDoc } from 'firebase/firestore';

const questions = [
  {
    question: "Où Edlyne et Parfait se sont-ils rencontrés ?",
    options: ["À l’église", "Sur Facebook", "À l’université"],
    correct: 1
  },
  {
    question: "Quelle est leur chanson préférée ?",
    options: ["Perfect", "Bella", "Aïcha"],
    correct: 0
  }
];

function Quiz({ table }) {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-red-600">Bienvenue au Quiz de Mariage</h1>
      <h1 className="text-2xl font-bold text-green-600">Merci à la table {table} !</h1>
      <p>Vos réponses ont été enregistrées avec succès 💌</p>
    </div>
  );
}

export default Quiz;
