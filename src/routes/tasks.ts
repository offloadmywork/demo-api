import { Router } from 'express';
import { db } from '../db';

const router = Router();

// GET /tasks - List all tasks
router.get('/', (req, res) => {
  const tasks = db.getAllTasks();
  res.json(tasks);
});

// POST /tasks - Create a new task
// TODO: Add input validation
router.post('/', (req, res) => {
  const { title, description } = req.body;
  
  const task = db.createTask(title, description);
  res.status(201).json(task);
});

// GET /tasks/:id - Get a specific task
router.get('/:id', (req, res) => {
  const task = db.getTaskById(req.params.id);
  
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  
  res.json(task);
});

// PUT /tasks/:id - Update a task
router.put('/:id', (req, res) => {
  const { title, description, completed } = req.body;
  
  const updates: any = {};
  if (title !== undefined) updates.title = title;
  if (description !== undefined) updates.description = description;
  if (completed !== undefined) updates.completed = completed;
  
  const task = db.updateTask(req.params.id, updates);
  
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  
  res.json(task);
});

// TODO: DELETE /tasks/:id - Delete a task (missing!)

export default router;
