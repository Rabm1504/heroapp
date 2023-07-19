// Acción para establecer los héroes filtrados
export const SET_FILTERED_HEROES = 'SET_FILTERED_HEROES';

// Acción para establecer los héroes filtrados
export const setFilteredHeroes = (heroes) => ({
  type: SET_FILTERED_HEROES,
  payload: heroes,
});