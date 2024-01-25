import { Pokemon } from "@/lib/apis/pokemon/types";
import { Link } from "react-router-dom";

interface Props {
  data: Pokemon;
}

export default function PokemonCard(props: Props) {
  const { data } = props;
  return (
    <Link to={`/pokemon/${data.id}`}>
      <div className="bg-color-accent border border-blue-500 rounded-md flex flex-col justify-center items-center gap-4 scale-100 hover:scale-105 transition-all">
        <div>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
            alt={`${data.name}`}
            className="md:w-40 w-36 aspect-square py-4"
          />
        </div>
        <div className="bg-color-yellowed text-color-primary font-bold w-full text-center text-2xl py-2 rounded-md">
          <p className="">{data.name}</p>
        </div>
      </div>
    </Link>
  );
}
