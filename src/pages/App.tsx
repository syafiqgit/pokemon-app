/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout";
import PokemonCard from "@/components/pokemon-card";
import { getPokemon } from "@/lib/apis/pokemon/api";
import { Pokemon } from "@/lib/apis/pokemon/types";
import axios from "axios";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SkeletonCard from "@/components/skeleton-card";

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>();
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    fetchData();
  }, [searchParams]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const query = Object.fromEntries([...searchParams]);
      const response = await getPokemon({ ...query });

      const promises = response.results.map(async (data) => {
        const res = await axios.get(data.url);
        const dataPokemon = res.data;
        return dataPokemon;
      });

      const result: Pokemon[] = await Promise.all(promises);
      setPokemons(result);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePrevPage = () => {
    const query = searchParams.get("offset");
    const initOffset = query ? parseInt(query, 10) : 0;
    if (initOffset >= 20) {
      const newOffset = initOffset - 20;
      searchParams.set("offset", String(newOffset));
    }
    setSearchParams(searchParams);
  };

  const handleNextPage = () => {
    const query = searchParams.get("offset");
    const initOffset = query ? parseInt(query, 10) : 0;
    if (initOffset <= 1300) {
      const newOffset = initOffset + 20;
      searchParams.set("offset", String(newOffset));
    }
    setSearchParams(searchParams);
  };

  return (
    <Layout>
      <div className="bg-color-primary flex flex-col gap-5">
        <div className="grid md:grid-cols-3 grid-cols-2 gap-4 p-4">
          {loading ? (
            <SkeletonCard />
          ) : (
            <>
              {pokemons?.map((pokemon, index) => (
                <div>
                  <PokemonCard data={pokemon} key={index} />
                </div>
              ))}
            </>
          )}
        </div>
        <div className="flex justify-center items-center gap-10 pb-5">
          <Button
            className="bg-color-yellowed hover:bg-yellow-400"
            onClick={handlePrevPage}
          >
            <ChevronLeftIcon color="black" />
          </Button>
          <Button
            className="bg-color-yellowed hover:bg-yellow-400"
            onClick={handleNextPage}
          >
            <ChevronRightIcon color="black" />
          </Button>
        </div>
      </div>
    </Layout>
  );
}

export default App;
