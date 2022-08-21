import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = 'https://pokeapi.co/api/v2/pokemon'

const createRequest = (url: string) =>({
    url
})

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getPokemon: builder.query<any, string>({
            query: (pokemonId)=> createRequest(`/${pokemonId}`)
        })
    })
})

export const {useGetPokemonQuery} = pokemonApi