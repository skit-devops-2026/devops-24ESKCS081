# Targets are used by repository CI; keep their names stable.
IMAGE_NAME ?= ghcr.io/skit-devops-2026/devops-24eskcs081
GIT_COMMIT ?= $(shell git rev-parse --short HEAD 2>/dev/null || echo local)

.PHONY: install test build run docker-build docker-up

install:
	@echo "No external dependencies required for this static HTML/CSS/JS project"

test:
	bash tests/test_site.sh

build:
	@echo "Validating static website and M5-M7 files..."
	test -f index.html
	test -f style.css
	test -f script.js
	test -f Dockerfile
	test -f docker-compose.yml
	test -f monitoring/prometheus.yml
	test -f monitoring/dashboard.json
	test -f k8s/deployment.yaml
	test -f k8s/service.yaml
	@echo "Build validation passed"

run:
	python3 -m http.server 8080

docker-build:
	docker build --build-arg GIT_COMMIT=$(GIT_COMMIT) -t $(IMAGE_NAME):local .

docker-up:
	docker compose up --build
