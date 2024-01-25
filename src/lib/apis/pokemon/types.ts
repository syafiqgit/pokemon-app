export interface PokemonDetail {
  id: number;
  abilities: {
    ability: {
      name: string;
    };
  }[];
  base_experience: number;
  form: [];
  game_indices: [];
  height: number;
  moves: {
    move: {
      name: string;
    };
  }[];
  name: string;
  order: number;
  past_abilities: [];
  past_types: [];
  species: {
    name: string;
  };
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
    };
  }[];
  types: {
    slot: number;
    type: {
      name: string;
    };
  }[];
  weight: number;
}

export interface Pokemon {
  id: number;
  name: string;
}
