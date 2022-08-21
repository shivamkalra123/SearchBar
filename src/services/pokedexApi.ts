import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { pokemonDataType } from "../types";

const baseUrl = "https://pokeapi.co/api/v2/pokemon";
const createRequest = (url: string) => ({ url });

export const pokedexApi = createApi({
  reducerPath: "pokedexApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getPokedex: builder.query<any, void | string>({
      query: (limit = "50") => createRequest(`?limit=${limit}`),
    }),
  }),
});

export const {useGetPokedexQuery} = pokedexApi