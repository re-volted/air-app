import { ActionTree } from "vuex";
import { RootState } from "./types";

export const actions: ActionTree<RootState, RootState> = {
   setLoading({ commit }, state: boolean) {
      commit("SET_LOADING", state);
   },
   setErrorMsg({ commit }, message: string) {
      commit("SET_ERROR_MSG", message);
   }
};
