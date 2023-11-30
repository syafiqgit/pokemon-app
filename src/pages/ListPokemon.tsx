/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import LayoutPage from "../components/LayoutPage";
import { Pokemon, PokemonClient } from "pokenode-ts";
import CardPokemons from "../components/CardPokemons";
import { Button } from "semantic-ui-react";

function ListPokemon() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [initialData, setInitialData] = useState(1);
  const [nextData, setNextData] = useState(9);
  const [page, setPage] = useState(1);

  const api = new PokemonClient();

  const getpokemons = async () => {
    const pokemons:any = [];
    for (let i = initialData; i <= nextData; i++) {
      pokemons.push(await fetchPokemons(i));
    }
    setPokemons(pokemons);
    setLoading(false);
  };

  const fetchPokemons = async (id: number) => {
    setLoading(true);
    try {
      const response = await api.getPokemonById(id);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const handleNextData = () => {
    setInitialData(initialData + 9);
    setNextData(nextData + 9);
    setPage(page + 1);
  };

  const handlePrevData = () => {
    setInitialData(initialData - 9);
    setNextData(nextData - 9);
    setPage(page - 1);
  };

  useEffect(() => {
    getpokemons();
  }, [initialData, nextData]);

  return (
    <LayoutPage>
      <div className="bg-color-primary p-4">
        {loading ? (
          <div className="spinner mx-auto"></div>
        ) : (
          <div className="grid grid-cols-3 cursor-pointer py-5 bg-color bg-color-primary">
            {pokemons.map((pokemon) => (
              <CardPokemons data={pokemon} />
            ))}
          </div>
        )}
        <div className="flex justify-center gap-5 my-4">
          <Button color="yellow" onClick={handlePrevData} size="big" disabled={initialData === 1 || loading}>
            <span className="text-color-primary font-bold">Prev</span>
          </Button>
          <div>
            <p className="font-bold text-4xl text-color-yellowed">{page}</p>
          </div>
          <Button color="yellow" onClick={handleNextData} size="big" disabled={loading}>
            <span className="text-color-primary font-bold">Next</span>
          </Button>
        </div>
      </div>
    </LayoutPage>
  );
}

export default ListPokemon;
