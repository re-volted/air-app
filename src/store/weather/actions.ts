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
      if (!state.coords.lat || !state.coords.lon) return;
      axios
         .get(buildUrl({ lat: state.coords.lat, lon: state.coords.lon }))
         .then(res => {
            if (res.status === 200) {
               console.log("res", res);

               commit("setDate");
               commit(
                  "setCity",
                  `${res.data.city.name}, ${res.data.city.country}`
               );
            }
         });
   },
   getWeatherByCity({ commit }, { city }) {
      axios.get(buildUrl({ city })).then(res => {
         if (res.status === 200) {
            console.log("res", res);

            commit("setDate");
            commit(
               "setCity",
               `${res.data.city.name}, ${res.data.city.country}`
            );
         }
      });
   }
};
