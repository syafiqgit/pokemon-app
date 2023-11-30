import { Link } from "react-router-dom";
import LayoutPage from "../components/LayoutPage";
import { useMyPokemon } from "../utils/useMyPokemon";
// import { Button } from "semantic-ui-react";
function MyListPokemon() {
  const { myPokemon } = useMyPokemon();
  return (
    <LayoutPage>
      <div className="grid grid-cols-3 cursor-pointer py-5 bg-color bg-color-primary">
        {myPokemon.map((pokemon) => (
          <div className="mb-4 mx-auto shadow-xl bg-color-accent rounded-xl">
            <Link to={`/pokemon/${pokemon.id}`}>
              <img
                src={pokemon.sprites.other?.home.front_default as string}
                alt=""
                className="w-40"
              />
              <p className="text-center font-bold bg-color-yellowed text-color-primary p-2 text-3xl">
                {pokemon.name}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </LayoutPage>
  );
}

export default MyListPokemon;
