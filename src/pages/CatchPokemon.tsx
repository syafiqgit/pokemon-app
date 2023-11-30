/* eslint-disable react-hooks/exhaustive-deps */
import { Pokemon, PokemonClient } from "pokenode-ts";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import LayoutPage from "../components/LayoutPage";
import { Button } from "semantic-ui-react";
import { useMyPokemon } from "../utils/useMyPokemon";

function CatchPokemon() {
  const params = useParams();
  const navigate = useNavigate();
  const { caughtPokemon } = useMyPokemon();
  const [pokemons, setPokemons] = useState<Pokemon>();
  const [caught, setCaught] = useState(false);
  const [failed, setfailed] = useState(false);
  const [imagePokemon, setImagePokemon] = useState(true);
  const [catching, setCatching] = useState(false);
  const [alert, setAlert] = useState(false);

  const api = new PokemonClient();

  const handleCatchPokemon = () => {
    caughtPokemon(pokemons!);
    navigate("/myPokemons");
  };

  const fetchPokemons = async (id: number) => {
    try {
      const response = await api.getPokemonById(id);
      setPokemons(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPokemons(params.id as unknown as number);
  }, []);

  const handleCatch = () => {
    setAlert(true);
    setfailed(false);
    setCatching(true);
    setTimeout(() => {
      if (Math.random() > 0.5) {
        setAlert(false);
        setCatching(false);
        setImagePokemon(false);
        setCaught(true);
        setfailed(false);
      } else {
        setCatching(false);
        setImagePokemon(true);
        setCaught(false);
        setfailed(true);
      }
    }, 1000);
  };

  return (
    <LayoutPage>
      <div className="location relative h-screen">
        <div className="rounded-xl bg-color-accent w-fit p-4 mx-auto mt-5">
          <p className="font-bold text-3xl text-color-yellowed">
            {caught ? "CONGRATULATIONS" : `Wild ${pokemons?.name} has appear`}
          </p>
        </div>
        {alert && (
          <div className="bg-color-accent p-5 mx-auto w-fit rounded-xl mt-5 flex flex-col">
            <p className="text-xl font-bold text-color-yellowed text-center">
              {catching && "Cathing..."}
              {failed && "Failed caught a pokemon"}
            </p>
          </div>
        )}
        {caught && (
          <div className="bg-color-accent p-5 mx-auto w-fit rounded-xl flex flex-col justify-center items-center mt-32">
            <p className="text-2xl font-bold text-color-yellowed w-52 text-center">
              Congratulations you caught a {pokemons?.name}
            </p>
            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                {/* <label
                  htmlFor=""
                  className="text-2xl font-bold text-color-yellowed"
                >
                  Nickname :
                </label>
                <input
                  type="text"
                  placeholder="Your pokemon nikcname"
                  className="p-2 rounded-xl"
                  onChange={(e) => setNickname(e.target.value)}
                /> */}
              </div>
              <div className="mx-auto">
                <Button color="yellow" onClick={handleCatchPokemon}>
                  <span className="text-color-primary text-xl">Save</span>
                </Button>
              </div>
            </form>
          </div>
        )}
        <div
          className={`flex justify-center items-center relative ${
            alert ? "top-20" : "top-40"
          }`}
        >
          {imagePokemon && (
            <img
              src={pokemons?.sprites.other?.dream_world.front_default as string}
              alt=""
              width={200}
            />
          )}
        </div>
        <div className="rounded xl bg-color-primary w-full p-5 flex flex-col gap-4 absolute bottom-0">
          <div className="bg-color-accent flex justify-center items-center p-4 rounded-xl">
            <p className="font-bold text-3xl text-color-yellowed">
              {caught
                ? `wild ${pokemons?.name} has been caught`
                : "What will you do"}
            </p>
          </div>
          {caught || (
            <div className="rounded-xl justify-center items-center flex gap-5">
              <Link to={`/pokemon/${pokemons?.id}`}>
                <Button size="big" color="yellow" disabled={catching}>
                  <span className="text-color-primary text-2xl">Run</span>
                </Button>
              </Link>
              <Button
                size="big"
                color="yellow"
                onClick={handleCatch}
                disabled={catching}
              >
                <span className="text-color-primary text-2xl">
                  {failed ? "Try again" : "Catch"}
                </span>
              </Button>
            </div>
          )}
        </div>
      </div>
    </LayoutPage>
  );
}

export default CatchPokemon;
