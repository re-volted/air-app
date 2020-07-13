import { ActionTree } from "vuex";
import axios from "axios";
import { WeatherState, SingleApiRecord, TempUnit } from "./types";
import { RootState } from "../types";
import { buildUrl } from "@/utils/network";

export const actions: ActionTree<WeatherState, RootState> = {
   setCoords({ commit }, { lat, lon }) {
      commit("SET_COORDS", { lat, lon });
   },
   toggleTempUnits({ state, commit }) {
      if (state.tempUnits === TempUnit.CELSIUS) {
         commit("SET_TEMP_UNITS", TempUnit.FAHRENHEIT);
      } else {
         commit("SET_TEMP_UNITS", TempUnit.CELSIUS);
      }
   },
   setTemp({ commit }, temperature: number) {
      commit("SET_TEMP", temperature);
   },
   setDate({ commit }) {
      const date = new Date();
      const day = date.getDate();
      const month =
         date.getMonth() + 1 < 10
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1;
      const year = date.getFullYear();

      const formattedDate = `${day}.${month}.${year}`;
      commit("SET_DATE", formattedDate);
   },
   setCity({ commit }, city: string) {
      commit("SET_CITY", city);
   },
   setDescription({ commit }, description: string) {
      commit("SET_DESCRIPTION", description);
   },
   setForecastData({ state, commit }, data) {
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
      commit("SET_FORECAST_DATA", mappedData);
   },
   getWeatherByCoords({ state, dispatch }) {
      dispatch("setLoading", true, { root: true });
      dispatch("setErrorMsg", "", { root: true });

      if (!state.coords.lat || !state.coords.lon) {
         throw Error("Coordinates unavailable. Unable to fetch data.");
      }
      axios
         .get(buildUrl({ lat: state.coords.lat, lon: state.coords.lon }))
         .then(res => {
            if (res.status === 200) {
               dispatch("setTemp", res.data.list[0].main.temp);
               dispatch(
                  "setDescription",
                  res.data.list[0].weather[0].description
               );
               dispatch("setDate");
               dispatch(
                  "setCity",
                  `${res.data.city.name}, ${res.data.city.country}`
               );

               dispatch("setLoading", false, { root: true });
               dispatch("setForecastData", res.data.list);
            }
         })
         .catch(err => {
            dispatch("setLoading", false, { root: true });
            if (err.response) {
               dispatch("setErrorMsg", err.response.data.message, {
                  root: true
               });
            } else if (err.request) {
               dispatch("setErrorMsg", err.request.data.message, {
                  root: true
               });
            }
         });
   },
   getWeatherByCity({ dispatch }, { city }) {
      dispatch("setLoading", true, { root: true });
      dispatch("setErrorMsg", "", { root: true });
      axios
         .get(buildUrl({ city }))
         .then(res => {
            if (res.status === 200) {
               dispatch("setTemp", res.data.list[0].main.temp);
               dispatch(
                  "setDescription",
                  res.data.list[0].weather[0].description
               );
               dispatch("setDate");
               dispatch(
                  "setCity",
                  `${res.data.city.name}, ${res.data.city.country}`
               );

               dispatch("setLoading", false, { root: true });
               dispatch("setForecastData", res.data.list);
            }
         })
         .catch(err => {
            dispatch("setLoading", false, { root: true });
            if (err.response) {
               dispatch("setErrorMsg", err.response.data.message, {
                  root: true
               });
            } else if (err.request) {
               dispatch("setErrorMsg", err.request.data.message, {
                  root: true
               });
            }
         });
   }
};
