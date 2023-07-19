import { useEffect, useState } from 'react';
import FilterBySkills from '../Search/FilterBySkills';
import FilterByAppearance from '../Search/FilterByAppearance';
import SortAlphabetically from '../Search/SortAlphabetically';
import { useSuperheroApi } from '../../api/index.jsx';

const MainComponent = () => {
  const { getAllSuperheroes } = useSuperheroApi();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await getAllSuperheroes(''); // Realiza la solicitud inicial para cargar todos los héroes
      setLoading(false); // Marca los datos como cargados
    };
    fetchData();
  }, [getAllSuperheroes]);

  return (
    <div>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <FilterBySkills />
          <FilterByAppearance />
          <SortAlphabetically />
        </>
      )}
    </div>
  );
};

export default MainComponent;
