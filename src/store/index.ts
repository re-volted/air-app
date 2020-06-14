import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./types";
import { getters } from "./getters";
import { weather } from "./weather/index";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
   state: {
      appName: "AirApp",
      loading: false
   },
   getters,
   modules: {
      weather
   }
};

export default new Vuex.Store<RootState>(store);
