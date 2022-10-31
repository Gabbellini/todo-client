import { createStore } from "vuex";
import taskState from "@/store/taskState";

export class RootState {}

const store = createStore({
  modules: {
    taskState,
  },
});

export default store;
