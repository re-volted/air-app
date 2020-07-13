import { MutationTree } from "vuex";
import { WeatherState, TempUnit } from "./types";

export const mutations: MutationTree<WeatherState> = {
   RESET_DATA(state) {
      state.temperature = null;
      state.date = "";
      state.city = "";
      state.description = "";
   },
   SET_COORDS(state, data: { lat: number; lon: number }) {
      state.coords.lat = data.lat;
      state.coords.lon = data.lon;
   },
   SET_TEMP(state, temp: number) {
      state.temperature = temp;
   },
   SET_DATE(state, date: string) {
      state.date = date;
   },
   SET_CITY(state, city: string) {
      state.city = city;
   },
   SET_DESCRIPTION(state, description: string) {
      state.description = description;
   },
   SET_FORECAST_DATA(state, data) {
      state.forecast = data;
   },
   SET_TEMP_UNITS(state, tempUnits: TempUnit) {
      state.tempUnits = tempUnits;
   }
};
