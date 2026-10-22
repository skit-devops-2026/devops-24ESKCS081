# Project Structure - PlayBook

| Path | Purpose |
|---|---|
| `index.html`, `Grounds.html`, `Booking.html`, `booking-form.html`, `login.html`, `signup.html`, `offers.html` | Site pages (Sports Ground and Turf Booking System) |
| `style.css`, `script.js` | Shared styling and client-side behaviour |
| `Dockerfile`, `docker-compose.yml` | Container image and local orchestration (web + Prometheus + Grafana) |
| `nginx/` | Nginx server template, including the `/health` endpoint |
| `monitoring/` | Prometheus config, Grafana dashboard and provisioning |
| `k8s/`, `kubernetes/` | Kubernetes Deployment and Service manifests |
| `.github/workflows/` | CI pipeline (test + build + push image to GHCR) and the Pages deployment workflow |
| `Jenkinsfile` | Jenkins pipeline mirroring the CI stages |
| `tests/` | Shell-based site checks run by `make test` |
| `docs/` | Deployment notes and the deployment screenshot |
| `Makefile` | Standard entry points: install, test, build, run, docker-build, docker-up |
