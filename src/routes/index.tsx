import App from "@/pages/App";
import CatchPokemon from "@/pages/catch-pokemon";
import DetailPokemon from "@/pages/detail-pokemon";
import MyPokemon from "@/pages/my-pokemons";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function Routes() {
  const router = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "/pokemon/:id", element: <DetailPokemon /> },
    { path: "/catch/pokemon/:id", element: <CatchPokemon /> },
    { path: "/my-pokemon", element: <MyPokemon /> },
  ]);
  return <RouterProvider router={router} />;
}
