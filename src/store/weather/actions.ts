import { ActionTree } from "vuex";
import axios from "axios";
import { WeatherState } from "./types";
import { RootState } from "../types";
import { buildUrl } from "@/utils/network";

export const actions: ActionTree<WeatherState, RootState> = {
   saveGeoCoords({ commit }, { lat, lon }) {
      commit("SET_COORDS", { lat, lon });
   },
   getWeatherByCoords({ state, commit }) {
      commit("SET_LOADING", true, { root: true });
      commit("SET_ERROR_MSG", "", { root: true });

      if (!state.coords.lat || !state.coords.lon) {
         throw Error("Coordinates unavailable. Unable to fetch data.");
      }
      axios
         .get(buildUrl({ lat: state.coords.lat, lon: state.coords.lon }))
         .then(res => {
            if (res.status === 200) {
               commit("SET_TEMP", res.data.list[0].main.temp);
               commit(
                  "SET_DESCRIPTION",
                  res.data.list[0].weather[0].description
               );
               commit("SET_DATE");
               commit(
                  "SET_CITY",
                  `${res.data.city.name}, ${res.data.city.country}`
               );

               commit("SET_LOADING", false, { root: true });
               commit("SET_FORECAST_DATA", res.data.list);
            }
         })
         .catch(err => {
            commit("SET_LOADING", false, { root: true });
            if (err.response) {
               commit("SET_ERROR_MSG", err.response.data.message, {
                  root: true
               });
            } else if (err.request) {
               commit("SET_ERROR_MSG", err.request.data.message, {
                  root: true
               });
            }
         });
   },
   getWeatherByCity({ commit }, { city }) {
      commit("SET_LOADING", true, { root: true });
      commit("SET_ERROR_MSG", "", { root: true });
      axios
         .get(buildUrl({ city }))
         .then(res => {
            if (res.status === 200) {
               commit("SET_TEMP", res.data.list[0].main.temp);
               commit(
                  "SET_DESCRIPTION",
                  res.data.list[0].weather[0].description
               );
               commit("SET_DATE");
               commit(
                  "SET_CITY",
                  `${res.data.city.name}, ${res.data.city.country}`
               );

               commit("SET_LOADING", false, { root: true });
               commit("SET_FORECAST_DATA", res.data.list);
            }
         })
         .catch(err => {
            commit("SET_LOADING", false, { root: true });
            if (err.response) {
               commit("SET_ERROR_MSG", err.response.data.message, {
                  root: true
               });
            } else if (err.request) {
               commit("SET_ERROR_MSG", err.request.data.message, {
                  root: true
               });
            }
         });
   }
};
