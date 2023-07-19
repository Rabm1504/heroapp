import { useState } from 'react';

const SortAlphabetically = ({ characters }) => {
  const [sortedCharacters, setSortedCharacters] = useState(characters);

  // Función para ordenar alfabéticamente
  const sortAlphabetically = () => {
    const sorted = [...characters].sort((a, b) => a.name.localeCompare(b.name));
    setSortedCharacters(sorted);
  };

  // Verificar si hay datos disponibles antes de mapear
  if (!sortedCharacters || sortedCharacters.length === 0) {
    return <div>No hay datos disponibles para ordenar.</div>;
  }

  return (
    <div>
      <h2>Sort Alphabetically</h2>
      <button onClick={sortAlphabetically}>Sort A-Z</button>
      <ul>
        {sortedCharacters.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SortAlphabetically;
