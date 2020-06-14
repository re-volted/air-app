import { GetterTree } from "vuex";
import { RootState } from "./types";

export const getters: GetterTree<RootState, RootState> = {
   getAppName(state): string {
      return state.appName;
   }
};
