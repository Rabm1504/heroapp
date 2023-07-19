import { useState } from 'react';
import './FilterByAppearance.css';

const FilterByAppearance = ({ characters }) => {
  const [appearance, setAppearance] = useState('');
  const [filteredCharacters, setFilteredCharacters] = useState(characters);

  // Función para filtrar por apariencia
  const filterByAppearance = (selectedAppearance) => {
    setAppearance(selectedAppearance);
    if (selectedAppearance === '') {
      setFilteredCharacters(characters);
    } else {
      const filtered = characters.filter((character) =>
        character.appearance.gender.toLowerCase().includes(selectedAppearance.toLowerCase())
      );
      setFilteredCharacters(filtered);
    }
  };

  // Renderizado condicional si filteredCharacters no es un arreglo válido
  let charactersList;
  if (Array.isArray(filteredCharacters)) {
    charactersList = filteredCharacters.map((character) => (
      <li key={character.id}>{character.name}</li>
    ));
  } else {
    charactersList = <li>No characters found.</li>;
  }

  return (
    <div>
      <h2>Filter by Appearance</h2>
      <select value={appearance} onChange={(e) => filterByAppearance(e.target.value)}>
        <option value="">Select appearance</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        {/* Add more options for other appearances */}
      </select>
      <ul>{charactersList}</ul>
    </div>
  );
};

export default FilterByAppearance;
