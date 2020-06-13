import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { WeatherState } from "./types";
import { RootState } from "../types";

export const state: WeatherState = {
   errorMsg: "",
   coords: {
      lat: null,
      lon: null
   },
   temperature: null,
   date: "",
   city: "",
   description: ""
};

const namespaced = true;

export const weather: Module<WeatherState, RootState> = {
   namespaced,
   state,
   getters,
   actions,
   mutations
};
