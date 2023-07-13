import { useState } from 'react';

const FilterBySkills = ({ superheroes, setSuperheroes }) => {
  const [skillsFilter, setSkillsFilter] = useState('');

  const handleFilterChange = (event) => {
    setSkillsFilter(event.target.value);

    // Filtrar los superhéroes según las habilidades seleccionadas
    const filteredSuperheroes = superheroes.filter(superhero => superhero.skills.includes(event.target.value));
    setSuperheroes(filteredSuperheroes);
  };

  return (
    <div>
      <label htmlFor="skillsFilter">Filter by Skills:</label>
      <select id="skillsFilter" value={skillsFilter} onChange={handleFilterChange}>
        <option value="">All</option>
        <option value="Strength">Strength</option>
        <option value="Speed">Speed</option>
        <option value="Flight">Flight</option>
        <option value="Invisibility">Invisibility</option>
      </select>
    </div>
  );
};

export default FilterBySkills;
