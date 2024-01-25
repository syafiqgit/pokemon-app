/* eslint-disable react-hooks/exhaustive-deps */
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { getPokemonDetail } from "@/lib/apis/pokemon/api";
import { PokemonDetail } from "@/lib/apis/pokemon/types";
import { useMyPokemon } from "@/lib/hooks/store";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function CatchPokemon() {
  const { caughtPokemon} = useMyPokemon();
  const params = useParams();
  const [pokemon, setPokemon] = useState<PokemonDetail>();
  const [nickname, setNickname] = useState("");
  const [savePokemon, setSavePokemon] = useState(false);

  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await getPokemonDetail(params.id as string);
      setPokemon(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCatchPokemon = () => {
    if (Math.random() > 0.5) {
      setSavePokemon(true);
    } else {
      toast({
        title: "Opss!",
        description: "Opss! You missed catch pokemon.",
        variant: "destructive",
      });
    }
  };

  const handleAddPokemon = () => {
    caughtPokemon(pokemon!, nickname);
    setNickname("");
    toast({
      title: "Great Job!!!",
      description: "Pokemons now already in your My Pokemon",
      variant: "default",
    });
    navigate("/my-pokemon");
  };

  return (
    <Layout>
      <div className="grid h-full w-full grid-flow-col grid-rows-2 battleground">
        <div className="flex flex-col justify-center items-center gap-16 relative top-24">
          {savePokemon ? (
            <div className="w-fit h-fit px-10 py-5 bg-color-primary border border-color-yellowed rounded-3xl absolute z-[5] text-white">
              <p className="text-center mb-5 text-3xl font-extrabold">
                Congratulation!!!
              </p>
              <p className="text-center mb-5 text-xl font-light">
                You caught {pokemon?.name}
                <br />
                <span className="text-2xl font-semibold capitalize"></span>
              </p>
              <div className="h-full flex flex-col items-center gap-4">
                <label className="font-semibold text-xl">Nickname</label>
                <Input
                  type="text"
                  required
                  className="text-black text-lg rounded-md text-center h-6"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                />
                <Button
                  className="bg-color-yellowed border-white text-color-primary hover:bg-yellow-400 font-bold text-lg"
                  onClick={handleAddPokemon}
                  disabled={nickname.length === 0}
                >
                  save
                </Button>
              </div>
            </div>
          ) : (
            <>
              <div className="rounded-2xl bg-color-primary p-4 border border-color-yellowed">
                <p className="text-center text-color-yellowed text-2xl">
                  Wild {pokemon?.name} appear
                </p>
              </div>
              <img
                alt={pokemon?.name}
                src={pokemon?.sprites.other.dream_world.front_default}
                width={200}
                height={200}
              />
            </>
          )}
        </div>
        {!savePokemon && (
          <div className="flex flex-col gap-5 py-4 justify-center items-center bg-color-primary self-end cursor-default">
            <p className="font-semibold text-xl text-color-yellowed">
              What will you do ?
            </p>
            <div className="flex justify-center items-center gap-10">
              <div
                className="bg-color-yellowed hover:bg-yellow-400 px-4 py-2 rounded-md"
                onClick={() => navigate(-1)}
              >
                <p className="text-color-primary font-semibold text-xl">Run</p>
              </div>
              <div
                className="bg-color-yellowed hover:bg-yellow-400 px-4 py-2 rounded-md"
                onClick={handleCatchPokemon}
              >
                <p className="text-color-primary font-semibold text-xl">
                  Catch
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
