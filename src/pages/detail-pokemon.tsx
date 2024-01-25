/* eslint-disable react-hooks/exhaustive-deps */
import Layout from "@/components/layout";
import { getPokemonDetail } from "@/lib/apis/pokemon/api";
import { PokemonDetail } from "@/lib/apis/pokemon/types";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Line } from "rc-progress";
import SkeletonDetail from "@/components/skeleton-detail";

export default function DetailPokemon() {
  const params = useParams();
  const [pokemon, setPokemon] = useState<PokemonDetail>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      setLoading(false);
      const result = await getPokemonDetail(params.id as string);
      setPokemon(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="bg-color-primary p-4">
        {loading ? (
          <SkeletonDetail />
        ) : (
          <>
            <div className="flex justify-center items-center bg-color-accent border border-color-yellowed mb-4 rounded-full">
              <img
                src={pokemon?.sprites.other.dream_world.front_default}
                alt={pokemon?.name}
                className="p-4"
                width={200}
                height={200}
              />
            </div>
            <div>
              <div className="mx-auto bg-color-yellowed w-fit px-2 py-3 rounded-md">
                <p className="md:text-3xl text-2xl font-bold text-color-primary">
                  {pokemon?.name}
                </p>
              </div>
              <div className="flex justify-center items-center gap-20 my-4">
                {pokemon?.types.map((type) => (
                  <div className="bg-color-accent px-10 py-2 border border-color-yellowed rounded-md">
                    <p className="font-semibold text-xl text-color-yellowed">
                      {type.type.name}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center items-center gap-36 my-4">
                <div>
                  <p className="text-white text-center text-2xl font-bold">
                    {pokemon?.weight} KG
                  </p>
                  <p className="text-color-yellowed text-center text-xl">
                    Weight
                  </p>
                </div>
                <div>
                  <p className="text-white text-center text-2xl font-bold">
                    {pokemon?.height} KG
                  </p>
                  <p className="text-color-yellowed text-center text-xl">
                    Height
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 rounded-md">
              {pokemon?.stats.map((stat) => (
                <div className=" text-color-yellowed text-xl flex flex-col gap-2 bg-color-accent border border-color-yellowed rounded-md p-4 font-semibold">
                  <p>
                    {stat.stat.name} : <span>{stat.base_stat}</span>
                  </p>
                  <Line
                    percent={stat.base_stat}
                    strokeWidth={3}
                    trailWidth={3}
                  />
                </div>
              ))}
            </div>
            <Link to={`/catch/pokemon/${pokemon?.id}`}>
              <div className="mx-auto py-2 px-4 text-2xl bg-color-yellowed hover:bg-yellow-400 cursor-pointer text-color-primary font-bold w-fit rounded-lg mt-4">
                <p>Catch</p>
              </div>
            </Link>
          </>
        )}
      </div>
    </Layout>
  );
}
