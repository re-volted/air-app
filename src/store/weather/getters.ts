import { GetterTree } from "vuex";
import { WeatherState } from "./types";
import { RootState } from "../types";

export const getters: GetterTree<WeatherState, RootState> = {
   hasCoords(state): boolean {
      return !!state.coords.lat && !!state.coords.lon;
   },
   isDataFetched(state): boolean {
      return (
         !!state.temperature &&
         !!state.description &&
         !!state.city &&
         !!state.date
      );
   }
};
