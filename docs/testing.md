# Testing - PlayBook

## Automated checks
The CI pipeline (`.github/workflows/ci.yml`) runs on every push and pull request:
1. `make install` - confirms no external dependencies are needed for this static site.
2. `make test` - runs `tests/test_site.sh`, which verifies that every page
   (index, Grounds, Booking, login, signup, offers) and the shared
   `style.css` / `script.js` files are present and non-empty.
3. `make build` - validates the M5-M7 deliverables (Dockerfile, docker-compose,
   Prometheus config, Grafana dashboard, Kubernetes manifests).

## Running the tests locally
```bash
make test
make build
```

## Manual checks before a release
- Open `index.html` and confirm the venue cards and images load.
- Submit the booking form and confirm the confirmation flow works.
- Check the site at a mobile viewport width (responsive layout).
