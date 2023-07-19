import { useSelector, useDispatch } from 'react-redux';
import Hero from './Hero/Hero.jsx';
import { setSuperheroes } from '../../redux/actions.js'; // Importa la acción que quieres utilizar
import './Heroes.css'; // Importar estilos CSS

const Heroes = () => {
  const superheroes = useSelector((state) => state.superheroes);
  const dispatch = useDispatch();

  // Función para eliminar un superhéroe por su ID utilizando dispatch
  const removeSuperhero = (id) => {
    // Filtra la lista de superhéroes y remueve el superhéroe con el ID proporcionado
    const updatedSuperheroes = superheroes.filter((superhero) => superhero.id !== id);
    
    // Despacha la acción setSuperheroes con la nueva lista de superhéroes
    dispatch(setSuperheroes(updatedSuperheroes));
  };
  
  return (
    <div>
      <h2>Lista de Superhéroes</h2>
      {Array.isArray(superheroes) && superheroes.length > 0 ? (
        superheroes.map((superhero) => (
          <Hero key={superhero.id} superhero={superhero} onRemove={() => removeSuperhero(superhero.id)} />
        ))
      ) : (
        <p>No hay superhéroes disponibles.</p>
      )}
    </div>
  );
};

export default Heroes;
