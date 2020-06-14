import { MutationTree } from "vuex";
import { WeatherState } from "./types";

export const mutations: MutationTree<WeatherState> = {
   RESET_DATA(state) {
      state.errorMsg = "";
      state.temperature = null;
      state.date = "";
      state.city = "";
      state.description = "";
   },
   SET_ERROR_MSG(state, message: string) {
      state.errorMsg = message;
   },
   SET_COORDS(state, data: { lat: number; lon: number }) {
      state.coords.lat = data.lat;
      state.coords.lon = data.lon;
   },
   SET_TEMP(state, temp: number) {
      state.temperature = temp;
   },
   SET_DATE(state) {
      const date = new Date();
      const day = date.getDate();
      const month =
         date.getMonth() + 1 < 10
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1;
      const year = date.getFullYear();

      state.date = `${day}.${month}.${year}`;
   },
   SET_CITY(state, city: string) {
      state.city = city;
   },
   SET_DESCRIPTION(state, description: string) {
      state.description = description;
   },
   TOGGLE_TEMP_UNITS(state) {
      if (state.tempUnits === "C") {
         state.tempUnits = "F";
      } else {
         state.tempUnits = "C";
      }
   }
};
