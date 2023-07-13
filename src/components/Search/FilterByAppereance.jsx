import { useState } from 'react';

const FilterByAppearance = ({ superheroes, setSuperheroes }) => {
  const [appearanceFilter, setAppearanceFilter] = useState('');

  const handleFilterChange = (event) => {
    setAppearanceFilter(event.target.value);

    // Filtrar los superhéroes según la apariencia seleccionada
    const filteredSuperheroes = superheroes.filter(superhero => superhero.appearance === event.target.value);
    setSuperheroes(filteredSuperheroes);
  };

  return (
    <div>
      <label htmlFor="appearanceFilter">Filter by Appearance:</label>
      <select id="appearanceFilter" value={appearanceFilter} onChange={handleFilterChange}>
        <option value="">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
    </div>
  );
};

export default FilterByAppearance;
