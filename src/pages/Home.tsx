import { Button } from "semantic-ui-react";
import Hero from "../components/Hero";
import LayoutPage from "../components/LayoutPage";
import { Link } from "react-router-dom";

function Home() {
  return (
    <LayoutPage>
      <div>
        <Hero />
        <div className="flex flex-col gap-5 justify-center items-center mt-40">
          <Link to="/pokemons">
            <Button className="w-fit rounded-xl" color="yellow" size="massive">
              <span className="text-color-primary">List pokemons</span>
            </Button>
          </Link>
          <Link to="/myPokemons">
            <Button className="w-fit rounded-xl" color="yellow" size="massive">
              <span className="text-color-primary">My pokemons</span>
            </Button>
          </Link>
        </div>
      </div>
    </LayoutPage>
  );
}

export default Home;
