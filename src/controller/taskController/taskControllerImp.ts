import { TaskController } from "@/controller/taskController/taskController";
import { taskModel } from "@/model/taskModel/taskModelImp";
import { Task } from "@/domain/entities/task";

export class TaskControllerImp implements TaskController {
  createTask = async (task: Task): Promise<void> =>
    await taskModel.createTask(task);

  listAllTasks = async (): Promise<Task[]> => await taskModel.listAllTasks();

  getTaskById = async (taskId: number): Promise<Task> =>
    await taskModel.getTaskById(taskId);

  updateTask = async (task: Task): Promise<void> =>
    await taskModel.updateTask(task);

  deleteTask = async (taskId: number): Promise<void> =>
    await taskModel.deleteTask(taskId);
}

export const taskController: TaskController = new TaskControllerImp();
