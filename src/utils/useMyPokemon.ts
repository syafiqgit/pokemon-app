/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pokemon } from "pokenode-ts";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface MyPokemonState {
  myPokemon: Pokemon[];
  caughtPokemon: (pokemon: Pokemon) => void;
  deletePokemon: (pokemon: Pokemon) => void;
  removeMyPokemon: () => void;
}

const myPokemon = (set: any) =>
  <MyPokemonState>{
    myPokemon: [],
    caughtPokemon: (pokemon) => {
      set((state: MyPokemonState) => ({
        myPokemon: [...state.myPokemon, pokemon],
      }));
    },
    deletePokemon: (pokemon) =>
      set((state: MyPokemonState) => {
        const newMyPokemon = state.myPokemon.filter(
          (item) => item.name !== pokemon.name
        );
        return { myPokemon: newMyPokemon };
      }),
    removeMyPokemon: () => set(() => ({ myPokemon: [] })),
  };

export const useMyPokemon = create(
  persist(myPokemon, {
    name: "my Pokemons",
  })
);
