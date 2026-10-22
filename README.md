# Sports ground And Turf Booking system

## Author

| Roll No. | Name | GitHub username |
|----------|------|-----------------|
| 24ESKCS081 | Bhanu Singh Naruka | B240847 |

## About

Sports Ground and Turf Booking System is a web-based application designed to make booking sports grounds and turf facilities simple and convenient. Users can explore available sports grounds, check booking details, select their preferred date and time, and reserve a turf according to their requirements.

## Tech stack

- Frontend: HTML, CSS, JavaScript
- Web server / container: Nginx and Docker
- Local orchestration: Docker Compose
- Monitoring: Prometheus, Nginx Prometheus Exporter, Grafana
- Deployment manifests: Kubernetes Deployment and NodePort Service
- Backend: None (frontend only)

## Running locally

```bash
make install
make test
make build
make run
```

Run the container and monitoring stack:

```bash
docker compose up --build
```

- Website: http://localhost:8080
- Health endpoint: http://localhost:8080/health
- Prometheus: http://localhost:9090
- Grafana: http://localhost:3000

## Live URL

https://b240847.github.io/playbook-live/

## Health endpoint

`GET /health` returns JSON with `status: ok` and the running commit SHA in the Nginx container. GitHub Pages receives a static health file containing the commit used for that deployment.

## Container registry

The CI workflow publishes `ghcr.io/skit-devops-2026/devops-24eskcs081:latest` and a commit-specific image tag after a successful push to `main`.

## Kubernetes

Apply the resources with `kubectl apply -f k8s/`. The Deployment runs two web replicas and the Service exposes port 30080 on supported clusters. On a local cluster, use `kubectl port-forward service/playbook-web 8080:80`. See [deployment notes](docs/deployment.md).

## Monitoring

Prometheus config lives in `monitoring/prometheus.yml` and the Grafana dashboard in `monitoring/dashboard.json`. See [monitoring/README.md](monitoring/README.md).
