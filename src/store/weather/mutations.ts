import { MutationTree } from "vuex";
import { WeatherState, SingleApiRecord } from "./types";

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
   SET_FORECAST_DATA(state, data) {
      const rawData = data;
      const filteredData = rawData.filter((set: SingleApiRecord) => {
         const timestamp = set.dt;
         const date = new Date(timestamp * 1000);
         return date.getDate() === Number(state.date.split(".")[0]);
      });
      const mappedData = filteredData.map((set: SingleApiRecord) => {
         const date = new Date(set.dt * 1000);
         return {
            hour: `${date.getHours()}:${
               date.getMinutes() < 10
                  ? "0" + date.getMinutes()
                  : date.getMinutes()
            }`,
            temperature: Math.round(set.main.temp),
            description: set.weather[0].description
         };
      });
      state.forecast = mappedData;
   },
   TOGGLE_TEMP_UNITS(state) {
      if (state.tempUnits === "C") {
         state.tempUnits = "F";
      } else {
         state.tempUnits = "C";
      }
   }
};
