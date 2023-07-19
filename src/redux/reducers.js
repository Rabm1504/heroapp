// redux/reducers.js

import { combineReducers } from 'redux';
import { createSlice } from '@reduxjs/toolkit';

// Estado inicial
const initialState = {
  filteredHeroes: [],
};

// Slice para manejar la acción SET_FILTERED_HEROES
const filteredHeroesSlice = createSlice({
  name: 'filteredHeroes',
  initialState,
  reducers: {
    setFilteredHeroes(state, action) {
      state.filteredHeroes = action.payload;
    },
  },
});

// Extraer el reducer y las acciones generadas por el Slice
export const { setFilteredHeroes } = filteredHeroesSlice.actions;

// Combinar todos los reducers en uno solo
const rootReducer = combineReducers({
  filteredHeroes: filteredHeroesSlice.reducer,
});

export default rootReducer;
