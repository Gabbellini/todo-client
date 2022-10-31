import { TaskModel } from "@/model/taskModel/taskModel";
import { Task } from "@/domain/entities/task";
import http from "@/model/http";

class TaskModelImp implements TaskModel {
  createTask = async (task: Task): Promise<void> =>
    await http.post("/tasks", task);

  listAllTasks = async (): Promise<Task[]> => {
    const response = await http.get("/tasks");
    return response.data;
  };

  getTaskById = async (taskId: number): Promise<Task> => {
    const response = await http.get("/tasks/" + taskId);
    return response.data;
  };

  updateTask = async (task: Task): Promise<void> => http.put("/tasks", task);

  deleteTask = async (taskId: number): Promise<void> =>
    http.delete("/tasks/" + taskId);
}

export const taskModel: TaskModel = new TaskModelImp();
