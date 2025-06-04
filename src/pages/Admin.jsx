import React, { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';

const questions = [
  { correct: 1 }, // Q1
  { correct: 0 }  // Q2
];

function Admin() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "responses"), (snapshot) => {
      const raw = snapshot.docs.map(doc => doc.data());
      const grouped = {};

      raw.forEach(res => {
        const table = res.table;
        if (!grouped[table]) grouped[table] = [];
        grouped[table].push(res);
      });

      const tableScores = Object.entries(grouped).map(([table, reps]) => {
        const latest = reps.sort((a, b) => b.submittedAt?.seconds - a.submittedAt?.seconds)[0];
        const points = latest.answers.reduce((acc, a, i) =>
          a.answer === questions[i].correct ? acc + 1 : acc, 0);
        return { table, points };
      });

      setScores(tableScores.sort((a, b) => b.points - a.points));
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🎯 Classement des Tables</h1>
      {scores.length === 0 ? (
        <p>Aucune réponse enregistrée pour l’instant.</p>
      ) : (
        <ul className="space-y-2">
          {scores.map((s, idx) => (
            <li key={idx} className="p-2 bg-gray-100 rounded shadow">
              🪑 Table {s.table} : <strong>{s.points}</strong> point(s)
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Admin;
