import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setFilteredHeroes } from '../redux/actions';

const baseUrl = 'http://localhost:5000/api'; // Cambia la URL a la del servidor proxy

export const useSuperheroApi = () => {
  const dispatch = useDispatch();

  // Función para buscar por nombre
  const getAllSuperheroes = async (name) => {
    try {
      const response = await axios.get(`${baseUrl}/search/${name}`);
      dispatch(setFilteredHeroes(response.data.results));
    } catch (error) {
      console.error('Error al obtener los superhéroes:', error);
    }
  };

  return { getAllSuperheroes };
};
