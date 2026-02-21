import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT ?? 8000;

app.use(express.json());

// Health check – useful for load balancers and CI/CD probes
app.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Simple API – returns app info
app.get('/api/info', (_req: Request, res: Response) => {
  res.json({
    name: 'typescript-project',
    version: '1.0.0',
    message: 'Hello from Node + TypeScript API',
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
