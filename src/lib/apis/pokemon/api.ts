/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "../types";
import { PokemonDetail } from "./types";
import axiosWithConfig from "../axios-with-config";

export const getPokemon = async (params?: Request) => {
  try {
    let query = "";

    if (params) {
      const queryParams: string[] = [];

      let key: keyof typeof params;
      for (key in params) {
        queryParams.push(`${key}=${params[key]}`);
      }

      query = queryParams.join("&");
    }

    const url = query
      ? `/pokemon?${query}`
      : "/pokemon";

    const response = await axiosWithConfig.get(url);
    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const getPokemonDetail = async (id: string) => {
  try {
    const response = await axiosWithConfig.get(`/pokemon/${id}`);
    return response.data as PokemonDetail;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
