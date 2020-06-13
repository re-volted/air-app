import { MutationTree } from "vuex";
import { WeatherState } from "./types";

export const mutations: MutationTree<WeatherState> = {
   resetData(state) {
      state.errorMsg = "";
      state.temperature = null;
      state.date = "";
      state.city = "";
      state.description = "";
   },
   setErrorMsg(state, message: string) {
      state.errorMsg = message;
   },
   setCoords(state, data: { lat: number; lon: number }) {
      state.coords.lat = data.lat;
      state.coords.lon = data.lon;
   },
   setTemp(state, temp: number) {
      state.temperature = temp;
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
   setCity(state, city: string) {
      state.city = city;
   },
   setDescription(state, description: string) {
      state.description = description;
   }
};
