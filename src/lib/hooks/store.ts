/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { PokemonDetail } from "../apis/pokemon/types";

interface myPokemonType {
  pokemon: PokemonDetail;
  nickname: string;
}

interface myPokemonState {
  myPokemon: myPokemonType[];
  caughtPokemon: (pokemon: PokemonDetail, nickname: string) => void;
  deletePokemon: (id: number) => void;
}

const myPokemonStore = (set: any) =>
  <myPokemonState>{
    myPokemon: [],
    caughtPokemon: (pokemon: PokemonDetail, nickname: string) =>
      set((state: myPokemonState) => ({
        ...state,
        myPokemon: [
          ...state.myPokemon,
          {
            pokemon,
            nickname,
          },
        ],
      })),
    deletePokemon: (id: number) => {
      set((state: myPokemonState) => ({
        myPokemon: state.myPokemon.filter(
          (pokemon) => pokemon.pokemon.id !== id
        ),
      }));
    },
  };

export const useMyPokemon = create(
  persist(myPokemonStore, {
    name: "my-pokemons",
  })
);
