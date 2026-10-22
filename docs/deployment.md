# Deployment notes - PlayBook (24ESKCS081)

## Live deployment (GitHub Pages)
- URL: https://b240847.github.io/playbook-live/
- How: Pages is admin-locked on this organisation repository (the student account
  has write access but no access to repository options, and the Pages workflow
  token cannot create a Pages site). The site is therefore deployed from the
  author's personal repository https://github.com/B240847/playbook-live
  (GitHub Pages, branch `main`, root folder), which serves the identical static
  files from this repo. `.github/workflows/pages.yml` in this repo will deploy
  to the org Pages URL automatically if an org admin enables Pages here.
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
