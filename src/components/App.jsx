import { useState, useEffect } from 'react';
import Search from './Search/Search.jsx';
import FilterByAppearance from './Search/FilterByAppereance';
import FilterBySkills from './Search/FilterBySkills';
import SortAlphabetically from './Search/SortAlphabetically';
import Superheroes from './Heroes/Heroes';
import fetchHeroes from '../api/index.js';

/**
 * El componente App es el componente principal de la aplicación.
 * Contiene el estado y la lógica principal de la búsqueda y filtrado de superhéroes.
 */
const App = () => {
  const [superheroes, setSuperheroes] = useState([]);
  const [filteredSuperheroes, setFilteredSuperheroes] = useState([]);

  useEffect(() => {
    const fetchSuperheroesData = async () => {
      const data = await fetchHeroes();
      setSuperheroes(data);
      setFilteredSuperheroes(data);
    };

    fetchSuperheroesData();
  }, []);

  const handleSearch = async (searchTerm, gender) => {
    const searchedSuperheroes = superheroes.filter(superhero =>
      superhero.name.toLowerCase().startsWith(searchTerm.toLowerCase())
    );

    const filteredSuperheroes = searchedSuperheroes.filter(superhero =>
      superhero.gender.toLowerCase().includes(gender.toLowerCase())
    );

    setFilteredSuperheroes(filteredSuperheroes);
  };

  return (
    <div>
      <Search handleSearch={handleSearch} />
      <FilterByAppearance superheroes={superheroes} setSuperheroes={setFilteredSuperheroes} />
      <FilterBySkills superheroes={superheroes} setSuperheroes={setFilteredSuperheroes} />
      <SortAlphabetically superheroes={filteredSuperheroes} setSuperheroes={setFilteredSuperheroes} />
      <Superheroes superheroes={filteredSuperheroes} />
    </div>
  );
};

export default App;
