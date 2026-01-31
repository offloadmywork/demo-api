// Simple in-memory database
export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: Date;
}

let tasks: Task[] = [];

export const db = {
  getAllTasks(): Task[] {
    return tasks;
  },

  getTaskById(id: string): Task | undefined {
    return tasks.find(task => task.id === id);
  },

  createTask(title: string, description?: string): Task {
    const task: Task = {
      id: Date.now().toString(),
      title,
      description,
      completed: false,
      createdAt: new Date()
    };
    tasks.push(task);
    return task;
  },

  updateTask(id: string, updates: Partial<Omit<Task, 'id' | 'createdAt'>>): Task | undefined {
    const task = tasks.find(t => t.id === id);
    if (!task) return undefined;
    
    Object.assign(task, updates);
    return task;
  },

  deleteTask(id: string): boolean {
    const index = tasks.findIndex(t => t.id === id);
    if (index === -1) return false;
    
    tasks.splice(index, 1);
    return true;
  }
};
