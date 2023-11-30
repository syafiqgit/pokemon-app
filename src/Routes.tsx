import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ListPokemon from "./pages/ListPokemon";
import MyListPokemon from "./pages/MyListPokemon";
import DetailPokemon from "./pages/DetailPokemon";
import CatchPokemon from "./pages/CatchPokemon";

function Routes() {
  const queryClient = new QueryClient();
  const Router = createBrowserRouter([
    { path: "/", element: <ListPokemon /> },
    { path: "/myPokemons", element: <MyListPokemon /> },
    { path: "/pokemon/:id", element: <DetailPokemon /> },
    { path: "/pokemon/catch/:id", element: <CatchPokemon /> },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={Router} />;
    </QueryClientProvider>
  );
}

export default Routes;
