import { Pokemon} from "pokenode-ts";
import { Link } from "react-router-dom";

interface Props {
  data: Pokemon;
}

function CardPokemons(props: Props) {
  const { data} = props;
  return (
    <div className="mb-4 mx-auto shadow-xl bg-color-accent rounded-xl">
      <Link to={`/pokemon/${data.id}`}>
        <img src={data.sprites.other?.home.front_default as string} alt="" className="w-40"/>
        <p className="text-center font-bold bg-color-yellowed text-color-primary p-2 text-3xl">
          {data.name}
        </p>
      </Link>
    </div>
  );
}
export default CardPokemons;
