import { MutationTree } from "vuex";
import { WeatherState } from "./types";

export const mutations: MutationTree<WeatherState> = {
   setCity(state, city: string) {
      state.city = city;
   },
   setDate(state) {
      const date = new Date();
      const day = date.getDate();
      const month =
         date.getMonth() + 1 < 10
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1;
      const year = date.getFullYear();

      state.date = `${day}.${month}.${year}`;
   },
   setCoords(state, data: { lat: number; lon: number }) {
      state.coords.lat = data.lat;
      state.coords.lon = data.lon;
   }
};
