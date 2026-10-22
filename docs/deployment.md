# Deployment notes - PlayBook (24ESKCS081)

## Live deployment (GitHub Pages)
- URL: https://skit-devops-2026.github.io/devops-24ESKCS081/
- How: `.github/workflows/pages.yml` runs on every push to `main`, copies the static
  site into `_site/`, writes a `health` file containing the commit SHA, and deploys
  with GitHub Pages.
- One-time setup: Repo Settings -> Pages -> Build and deployment -> Source:
  "GitHub Actions". (Org admin may need to do this if the option is locked.)
- Screenshot of the running site: `docs/deployment-screenshot.png`

## Container deployment (Docker)
```bash
docker compose up --build
# Site:    http://localhost:8080
# Health:  http://localhost:8080/health   -> {"status":"ok","commit":"<sha>"}
# Prometheus: http://localhost:9090
# Grafana:    http://localhost:3000
```
Image published by CI to GHCR:
`ghcr.io/skit-devops-2026/devops-24eskcs081:latest` (and a per-commit tag).

## Kubernetes
```bash
kubectl apply -f k8s/
kubectl get pods,svc
# NodePort service exposes the site on port 30080, or:
kubectl port-forward service/playbook-web 8080:80
```
