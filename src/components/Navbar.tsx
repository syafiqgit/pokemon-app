import { Link } from "react-router-dom";
import pokeball from "/public/pokeball-2.png";
import { Button } from "semantic-ui-react";
function Navbar() {
  return (
    <nav className="p-4 bg-color-primary shadow-xl flex justify-between border-b-color-accent sticky items-center">
      <Link to="/">
        <div className="flex items-center gap-2">
          <img src={pokeball} alt="pokemon-app" className="w-14" />
          <p className="font-bold text-2xl text-color-yellowed">Pokemon app</p>
        </div>
      </Link>
      <Link to="/myPokemons">
        <Button className="w-fit rounded-xl" color="yellow" size="big">
          <span className="text-color-primary">My pokemons</span>
        </Button>
      </Link>
    </nav>
  );
}

export default Navbar;
