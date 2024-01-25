import Layout from "@/components/layout";
import { useMyPokemon } from "@/lib/hooks/store";
import { Trash2Icon } from "lucide-react";

export default function MyPokemon() {
  const { myPokemon, deletePokemon } = useMyPokemon();
  return (
    <Layout>
      <div className="bg-color-primary min-h-screen flex flex-col gap-5">
        <div className="grid md:grid-cols-3  grid-cols-2 gap-4 p-4">
          {myPokemon.map((pokemon) => (
            <div className="bg-color-accent rounded-md border border-blue-500">
              <Trash2Icon
                onClick={() => deletePokemon(pokemon.pokemon.id)}
                className="float-end bg-color-yellowed hover:bg-yellow-400 rounded-md p-2"
                size={40}
              />
              <div className="flex flex-col justify-center items-center gap-4 w-full">
                <div>
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.pokemon.id}.svg`}
                    alt={`${pokemon.pokemon.name}`}
                    className="w-40 aspect-square py-4"
                  />
                </div>
                <div className="bg-color-yellowed text-color-primary font-bold w-full h-full text-center py-2">
                  <p className="md:text-lg text-sm">
                    {pokemon.pokemon.name}
                  </p>
                  <p className="md:text-lg text-sm italic">
                    {pokemon.nickname}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
