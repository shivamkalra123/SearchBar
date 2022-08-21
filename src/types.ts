type typesPokemonType = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};
export type PokemonType = {
  id: number;
  name: string;
  base_experience?: number;
  height: number;
  is_default?: boolean;
  order?: number;
  weight: number;
  abilities?: {
    is_hidden: boolean;
    slot: number;
    ability: {
      name: string;
      url: string;
    };
  }[];
  forms?: {
    name: string;
    url: string;
  }[];
  game_indices?: {
    game_index: number;
    version: {
      name: string;
      url: string;
    };
  }[];
  held_items?: {
    item: {
      name: string;
      url: string;
    };
    version_details: {
      rarity: number;
      version: {
        name: string;
        url: string;
      };
    };
  }[];
  location_area_encounters?: string;
  species?: {
    name: string;
    url: string;
  };
  sprites?: {
    back_female: string;
    back_shiny_female: string;
    back_default: string;
    front_female: string;
    front_shiny_female: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
  };
  types: typesPokemonType[];
};
export type pokemonDataType = {
 
    id: number;
    name: string;
    sprite: string;

};

export type TPokemonCard = {
  pokemonId: number;
};
export interface IPokemon {
  name: string;
  id: number;
  abilities: string[];
  height: string;
  weight: string;
  stats: string[]
  types: string[]
  fullImageUrl: string
}
export type TGeneratePokemonCard = {
  pokemon: pokemonDataType;
};