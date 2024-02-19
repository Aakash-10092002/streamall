import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommended: null,
  trending:null,
  netflix:null,
  prime:null,
  anime:null,
  movie:null,
  serie:null,
  original:null

};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommended = action.payload.recommended;
      state.trending = action.payload.trending;
      state.netflix = action.payload.netflix;
      state.prime = action.payload.prime;
      state.anime = action.payload.anime;
      state.serie=action.payload.serie;
      state.original=action.payload.original;
      state.movie=action.payload.movie;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectRecommended = (state) => state.movie.recommended;
export const selectTrending = (state) => state.movie.trending;
export const selectNetflix = (state) => state.movie.netflix;
export const selectPrime = (state) => state.movie.prime;
export const selectAnime = (state) => state.movie.anime;
export const selectSerie = (state) => state.movie.serie;
export const selectMovie = (state) => state.movie.movie;
export const selectOriginal = (state) => state.movie.original;


export default movieSlice.reducer;