import { taskController } from "@/controller/taskController/taskControllerImp";
import { Task } from "@/domain/entities/task";
import { ActionContext } from "vuex";
import { RootState } from "@/store/index";

class TaskState {
  listOfAllTasks: Task[] = [];
}

const state = new TaskState();

const actions = {
  listAllTasks: async ({ commit }: ActionContext<RootState, TaskState>) => {
    const listOfAllTasks = await taskController.listAllTasks();
    commit("LIST_ALL_TASKS", listOfAllTasks);
  },
};

const mutations = {
  LIST_ALL_TASKS: (state: TaskState, listOfAllTasks: Task[]) => {
    state.listOfAllTasks = listOfAllTasks;
  },
};

const getters = {
  listOfAllTasks: (state: TaskState): Task[] => state.listOfAllTasks || [],
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
