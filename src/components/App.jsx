import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSuperheroApi } from '../api/index.jsx';
import FilterBySkills from './Search/FilterBySkills.jsx';
import FilterByAppearance from './Search/FilterByAppearance.jsx';
import MainComponent from './Search/MainComponent.jsx';
import SortAlphabetically from './Search/SortAlphabetically.jsx';
import Search from './Search/Search.jsx';

const App = () => {
  const dispatch = useDispatch();
  const { getAllSuperheroes } = useSuperheroApi();

  useEffect(() => {
    // Obtener todos los superhéroes al cargar la aplicación
    getAllSuperheroes(''); // Pasamos un string vacío para obtener todos los nombres
  }, [dispatch, getAllSuperheroes]);

  return (
    <div>
      <h1>Superhero App</h1>
      <div className="app-container">
        <div className="sidebar">
          {/* Componente para buscar por nombre */}
          <Search />
          {/* Componente para filtrar por habilidades */}
          <FilterBySkills />
          {/* Componente para filtrar por apariencia */}
          <FilterByAppearance />
        </div>
        <div className="main-content">
          {/* Componente para mostrar la lista de superhéroes */}
          <MainComponent />
          {/* Componente para buscar por orden alfabético */}
          <SortAlphabetically />
        </div>
      </div>
    </div>
  );
};

export default App;
