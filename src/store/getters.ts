import { GetterTree } from "vuex";
import { RootState } from "./types";

export const getters: GetterTree<RootState, RootState> = {
   appName(state): string {
      return state.appName;
   }
};
