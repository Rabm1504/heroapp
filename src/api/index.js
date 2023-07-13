import axios from 'axios';

const access_token = '2044740539205997';
const URL = `https://www.superheroapi.com/api.php/${access_token}/`;

// La función fetchHeroes recupera datos de superhéroes según los parámetros de búsqueda proporcionados
const fetchHeroes = async (searchTerm = '', gender = '') => {
  try {
    // Realiza una solicitud GET a la URL y extrae los datos de respuesta utilizando desestructuración
    const { data } = await axios.get(URL);

    // Baraja aleatoriamente el arreglo de superhéroes obtenido
    const superheroes = data.sort(() => Math.random() - 0.5);

    // Crea un nuevo arreglo de superhéroes con propiedades específicas utilizando map y desestructuración
    const strippedSuperheroes = superheroes.map((superhero) => {
      const {
        name,
        powerstats,
        appearance: { gender, race },
        biography: { fullName, firstAppearance, publisher },
        work: { occupation },
        images: { lg: image }
      } = superhero;

      // Crea un objeto con propiedades seleccionadas y devuelve el objeto resultante
      const strippedSuperhero = {
        name,
        powerstats,
        gender,
        race,
        fullName,
        firstAppearance,
        publisher,
        occupation,
        image
      };

      return strippedSuperhero;
    });

    // Filtra los superhéroes según el término de búsqueda, ignorando mayúsculas y minúsculas
    const searchedSuperheroes = strippedSuperheroes.filter((superHero) => {
      return superHero.name.toLowerCase().startsWith(searchTerm.toLowerCase());
    });

    // Filtra aún más los superhéroes según el género especificado
    const filteredSuperheroes = searchedSuperheroes.filter((superHero) => {
      return superHero.gender.includes(gender);
    });

    // Devuelve el arreglo de superhéroes filtrados
    return filteredSuperheroes;
  } catch (error) {
    // En caso de error, muestra el error en la consola
    console.log(error);
  }
}

export default fetchHeroes;
