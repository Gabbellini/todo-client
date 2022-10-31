import { Task } from "@/domain/entities/task";

export interface TaskController {
  createTask(task: Task): Promise<void>;
  listAllTasks(): Promise<Task[]>;
  getTaskById(taskId: number): Promise<Task>;
  updateTask(task: Task): Promise<void>;
  deleteTask(taskId: number): Promise<void>;
}
