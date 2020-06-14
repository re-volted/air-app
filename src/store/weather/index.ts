import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { WeatherState } from "./types";
import { RootState } from "../types";

export const state: WeatherState = {
   coords: {
      lat: null,
      lon: null
   },
   temperature: null,
   tempUnits: "C",
   date: "",
   city: "",
   description: "",
   forecast: []
};

const namespaced = true;

export const weather: Module<WeatherState, RootState> = {
   namespaced,
   state,
   getters,
   actions,
   mutations
};
