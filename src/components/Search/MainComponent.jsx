import { useState, useEffect } from 'react';
import Search from './Search';
import FilterByAppearance from './FilterByAppearance';
import FilterBySkills from './FilterBySkills';
import SortAlphabetically from './SortAlphabetically';
import { fetchHeroes } from '../../api';

/**
 * El componente MainComponent es el componente principal que muestra el buscador y los resultados filtrados.
 */
const MainComponent = () => {
  // Estado para almacenar todos los superhéroes obtenidos de la API
  const [superheroes, setSuperheroes] = useState([]);

  // Estado para almacenar los superhéroes filtrados
  const [filteredSuperheroes, setFilteredSuperheroes] = useState([]);

  // Utiliza el hook useEffect para realizar la solicitud de los superhéroes al montar el componente
  useEffect(() => {
    const fetchSuperheroes = async () => {
      const data = await fetchHeroes();
      setSuperheroes(data);
      setFilteredSuperheroes(data);
    };

    fetchSuperheroes();
  }, []);

  /**
   * Maneja la búsqueda de superhéroes según el término de búsqueda y el género seleccionados.
   * @param {string} searchTerm - Término de búsqueda ingresado por el usuario.
   * @param {string} gender - Género seleccionado por el usuario.
   */
  const handleSearch = async (searchTerm, gender) => {
    // Filtra los superhéroes según el término de búsqueda
    const searchedSuperheroes = superheroes.filter(superhero =>
      superhero.name.toLowerCase().startsWith(searchTerm.toLowerCase())
    );

    // Filtra aún más los superhéroes según el género seleccionado
    const filteredSuperheroes = searchedSuperheroes.filter(superhero =>
      superhero.gender.includes(gender)
    );

    setFilteredSuperheroes(filteredSuperheroes);
  };

  return (
    <div>
      {/* Renderiza el componente de búsqueda y pasa la función handleSearch */}
      <Search handleSearch={handleSearch} />

      {/* Renderiza el componente FilterByAppearance y pasa los superhéroes y el estado de los superhéroes filtrados */}
      <FilterByAppearance superheroes={superheroes} setSuperheroes={setFilteredSuperheroes} />

      {/* Renderiza el componente FilterBySkills y pasa los superhéroes y el estado de los superhéroes filtrados */}
      <FilterBySkills superheroes={superheroes} setSuperheroes={setFilteredSuperheroes} />

      {/* Renderiza el componente SortAlphabetically y pasa los superhéroes y el estado de los superhéroes filtrados */}
      <SortAlphabetically superheroes={filteredSuperheroes} setSuperheroes={setFilteredSuperheroes} />

      <div>
        {/* Renderiza los resultados filtrados */}
        {filteredSuperheroes.map(superhero => (
          <div key={superhero.id}>
            <h2>{superhero.name}</h2>
            <p>{superhero.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainComponent;
