import { ActionTree } from "vuex";
import axios from "axios";
import { WeatherState } from "./types";
import { RootState } from "../types";
import { buildUrl } from "@/utils/network";

export const actions: ActionTree<WeatherState, RootState> = {
   saveGeoCoords({ commit }, { lat, lon }) {
      commit("setCoords", { lat, lon });
   },
   getWeatherByCoords({ state, commit }) {
      commit("resetData");
      if (!state.coords.lat || !state.coords.lon) return;
      axios
         .get(buildUrl({ lat: state.coords.lat, lon: state.coords.lon }))
         .then(res => {
            if (res.status === 200) {
               commit("setTemp", res.data.list[0].main.temp);
               commit(
                  "setDescription",
                  res.data.list[0].weather[0].description
               );
               commit("setDate");
               commit(
                  "setCity",
                  `${res.data.city.name}, ${res.data.city.country}`
               );
            }
         })
         .catch(err => {
            if (err.response) {
               commit("setErrorMsg", err.response.data.message);
            } else if (err.request) {
               commit("setErrorMsg", err.request.data.message);
            }
         });
   },
   getWeatherByCity({ commit }, { city }) {
      commit("resetData");
      axios
         .get(buildUrl({ city }))
         .then(res => {
            if (res.status === 200) {
               commit("setTemp", res.data.list[0].main.temp);
               commit(
                  "setDescription",
                  res.data.list[0].weather[0].description
               );
               commit("setDate");
               commit(
                  "setCity",
                  `${res.data.city.name}, ${res.data.city.country}`
               );
            }
         })
         .catch(err => {
            if (err.response) {
               commit("setErrorMsg", err.response.data.message);
            } else if (err.request) {
               commit("setErrorMsg", err.request.data.message);
            }
         });
   }
};
