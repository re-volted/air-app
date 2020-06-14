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
      commit("RESET_DATA");
      if (!state.coords.lat || !state.coords.lon) return;
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
            }
         })
         .catch(err => {
            if (err.response) {
               commit("SET_ERROR_MSG", err.response.data.message);
            } else if (err.request) {
               commit("SET_ERROR_MSG", err.request.data.message);
            }
         });
   },
   getWeatherByCity({ commit }, { city }) {
      commit("RESET_DATA");
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
            }
         })
         .catch(err => {
            if (err.response) {
               commit("SET_ERROR_MSG", err.response.data.message);
            } else if (err.request) {
               commit("SET_ERROR_MSG", err.request.data.message);
            }
         });
   }
};
