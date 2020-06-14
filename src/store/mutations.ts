import { MutationTree } from "vuex";
import { RootState } from "./types";

export const mutations: MutationTree<RootState> = {
   SET_LOADING(state, value: boolean) {
      state.loading = value;
   },
   SET_ERROR_MSG(state, msg: string) {
      state.errorMsg = msg;
   }
};
