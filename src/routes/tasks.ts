import { Router } from 'express';
import { db } from '../db';

const router = Router();

// GET /tasks - List all tasks
router.get('/', (req, res) => {
  const tasks = db.getAllTasks();
  res.json(tasks);
});

// POST /tasks - Create a new task
router.post('/', (req, res) => {
  const { title, description } = req.body;
  
  // Basic input validation
  if (!title || typeof title !== 'string' || title.trim() === '') {
    return res.status(400).json({ error: 'Title is required and must be a non-empty string' });
  }
  
  const task = db.createTask(title.trim(), description);
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

// DELETE /tasks/:id - Delete a task
router.delete('/:id', (req, res) => {
  const deleted = db.deleteTask(req.params.id);
  
  if (!deleted) {
    return res.status(404).json({ error: 'Task not found' });
  }
  
  res.status(204).send();
});

export default router;
