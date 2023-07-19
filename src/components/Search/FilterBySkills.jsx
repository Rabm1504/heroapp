import { useState } from 'react';
import './FilterBySkills.css';

const FilterBySkills = ({ characters }) => {
  const [skill, setSkill] = useState('');
  const [filteredCharacters, setFilteredCharacters] = useState(characters);

  // Función para filtrar por habilidades
  const filterBySkill = (selectedSkill) => {
    setSkill(selectedSkill);
    if (selectedSkill === '') {
      setFilteredCharacters(characters);
    } else {
      const filtered = characters.filter((character) =>
        character.powerstats.skills.toLowerCase().includes(selectedSkill.toLowerCase())
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
      <h2>Filter by Skills</h2>
      <select value={skill} onChange={(e) => filterBySkill(e.target.value)}>
        <option value="">Select skill</option>
        <option value="intelligence">Intelligence</option>
        <option value="strength">Strength</option>
        <option value="speed">Speed</option>
        {/* Add more options for other skills */}
      </select>
      <ul>{charactersList}</ul>
    </div>
  );
};

export default FilterBySkills;
