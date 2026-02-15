import express from 'express';
import tasksRouter from './routes/tasks';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/tasks', tasksRouter);

// Health check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok',
    uptime: process.uptime()
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Demo API - Maintained by OpenClaw 🤖' 
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Simple request logging middleware
const requestLogger = (req: any, res: any, next: any) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
};
