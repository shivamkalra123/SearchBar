import { configureStore } from "@reduxjs/toolkit";
import { pokedexApi } from "./../services/pokedexApi";
import { pokemonApi } from "./../services/pokemonApi";

export const store = configureStore({
  reducer: {
    [pokedexApi.reducerPath]: pokedexApi.reducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      pokedexApi.middleware,
      pokemonApi.middleware
    );
  },
});
export type RootState = ReturnType<typeof store.getState>
