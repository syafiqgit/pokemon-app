/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useParams } from "react-router-dom";
import LayoutPage from "../components/LayoutPage";
import { useEffect, useState } from "react";
import {
  LocationArea,
  LocationClient,
  Pokemon,
  PokemonClient,
} from "pokenode-ts";
import { Button, Progress } from "semantic-ui-react";

function DetailPokemon() {
  const params = useParams();
  const [pokemons, setPokemons] = useState<Pokemon>();
  const [location, setLocations] = useState<LocationArea>();
  const [loading, setLoading] = useState(true);

  const api = new PokemonClient();

  const getLocationPokemon = new LocationClient();

  const fetchPokemons = async (id: number) => {
    try {
      const response = await api.getPokemonById(id);
      setPokemons(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const locationPokemon = async (id: number) => {
    try {
      const response = await getLocationPokemon.getLocationAreaById(id);
      setLocations(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPokemons(params.id as unknown as number);
    locationPokemon(params.id as unknown as number);
  }, []);

  return (
    <LayoutPage>
      <div className="bg-color-primary p-4">
        <div className="mb-4">
          <Link to="/">
            <Button color="yellow" size="big">
              <span className="text-color-primary font-bold">Back</span>
            </Button>
          </Link>
        </div>
        {loading ? (
          <div className="spinner mx-auto"></div>
        ) : (
          <div className="flex flex-col gap-4">
            <div className="flex justify-center gap-4">
              <img
                src={pokemons?.sprites.other?.home.front_default as string}
                width={220}
                className="bg-color-accent rounded-xl"
              />
              <div className="p-4 rounded-xl bg-color-accent text-color-yellowed">
                <p className="font-bold text-2xl">Name : {pokemons?.name}</p>
                <p className="font-bold text-2xl">
                  Weight : {pokemons?.weight}
                </p>
                <p className="font-bold text-2xl">
                  Height : {pokemons?.height}
                </p>
                <p className="font-bold text-2xl">
                  Base exp : {pokemons?.base_experience}
                </p>
                <p className="font-bold text-2xl">
                  Type :{" "}
                  {pokemons?.types.map((stat) => (
                    <span>{stat.type.name} </span>
                  ))}
                </p>
              </div>
            </div>
            <div className="rounded-xl p-4 bg-color-accent">
              {pokemons?.stats.map((stat) => (
                <>
                  <p className="font-bold text-2xl capitalize text-color-yellowed">
                    {stat.stat.name} : {stat.base_stat}
                    <Progress
                      percent={stat.base_stat}
                      size="medium"
                      color="blue"
                    />
                  </p>
                </>
              ))}
            </div>
            <div className="rounded-xl p-4 bg-color-accent">
              <div className="text-color-yellowed">
                <p className="font-bold text-2xl">
                  Ability :{" "}
                  {pokemons?.abilities.map((ability) => (
                    <span>{ability.ability.name} </span>
                  ))}
                </p>
                <p className="font-bold text-2xl">
                  Moves :{" "}
                  {pokemons?.moves.slice(0, 5).map((move) => (
                    <span>{move.move.name} </span>
                  ))}
                </p>
                <p className="font-bold text-2xl">
                  Location : {location?.name}
                </p>
              </div>
              <div className="flex justify-center items-center my-4">
                <Link to={`/pokemon/catch/${pokemons?.id}`}>
                  <Button size="massive" color="yellow">
                    <span className="text-color-primary">Catch</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </LayoutPage>
  );
}

export default DetailPokemon;
