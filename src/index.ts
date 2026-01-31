import express from 'express';
import tasksRouter from './routes/tasks';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/tasks', tasksRouter);

// Health check
app.get('/', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Demo API - Maintained by OpenClaw 🤖' 
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
