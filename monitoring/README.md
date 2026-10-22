# Monitoring

Stack: Prometheus + nginx-prometheus-exporter + Grafana, started by `docker compose up --build`.

- Prometheus: http://localhost:9090  (config: `monitoring/prometheus.yml`)
- Grafana: http://localhost:3000  (default login admin / admin - local practice only, change via GRAFANA_ADMIN_USER / GRAFANA_ADMIN_PASSWORD)
- Dashboard: `monitoring/dashboard.json` (also auto-provisioned in Grafana from `monitoring/grafana/dashboards/playbook-nginx-overview.json`)
- Source metrics: nginx `stub_status` on web:8081, scraped via the exporter at nginx-exporter:9113
