# typescript-project

A minimal Node.js + TypeScript API for learning CI/CD pipeline setup.

## APIs

| Method | Path        | Description                    |
|--------|-------------|--------------------------------|
| GET    | `/health`   | Health check (for probes/LB)   |
| GET    | `/api/info` | Returns app name and message   |

## Setup

```bash
npm install
```

## Run locally

**Development (with ts-node):**
```bash
npm run dev
```

**Production (build then run):**
```bash
npm run build
npm start
```

Server runs on `http://localhost:3000` by default. Set `PORT` to override (e.g. for deployment).

## For CI/CD

- **Build:** `npm run build` → outputs to `dist/`
- **Start:** `npm start` (runs `node dist/index.js`)
- Use `/health` in your deployment health checks or load balancer.
