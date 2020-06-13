import { GetterTree } from "vuex";
import { WeatherState } from "./types";
import { RootState } from "../types";

export const getters: GetterTree<WeatherState, RootState> = {
   getCurrentTemp(): number {
      return 29;
   }
};
