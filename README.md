# Sentinel Frontend

Vue 3 frontend for the Sentinel content moderation platform.

## Stack

- Vue 3, TypeScript, Vite
- Tailwind CSS 4
- Vue Router

## Environment variables

Create a local `.env` file if needed. Do not commit it.

| Variable | Default | Description |
|----------|---------|-------------|
| `VITE_API_BASE` | empty | API base URL. Leave empty in production so nginx proxies `/api` on the same origin. For local dev against a remote API, set the full URL. |

Production build example:

```bash
VITE_API_BASE="" npm run build
```

## Local development

```bash
npm ci
npm run dev
```

The dev server proxies `/api` to `http://127.0.0.1:8080`.

- App: http://localhost:5173
- Upload page: http://localhost:5173/upload

## Build

```bash
npm run build
```

Output is written to `dist/`.

## Production

Production static files are served by nginx from `/opt/sentinel/frontend/dist` on the VPS.

The backend API is proxied at `/api/` to the Go service on port 8080.

## CI/CD

- `ci.yml`: type-check and build on push and pull request
- `deploy.yml`: build and deploy `dist/` to the VPS on push to `main`

Required GitHub repository secrets:

- `DEPLOY_SSH_KEY`
- `VPS_HOST`
- `VPS_PORT`
- `VPS_USER`

## Pages

- `/` landing page
- `/upload` image upload with model selection (ConvNeXt or XLM-RoBERTa)
