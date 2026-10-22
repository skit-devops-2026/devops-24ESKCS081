#!/usr/bin/env bash
set -euo pipefail
for f in index.html Grounds.html Booking.html login.html signup.html offers.html style.css script.js; do
  test -f "$f" || { echo "FAIL: missing $f"; exit 1; }
  echo "ok: $f present"
done
grep -qi "<html" index.html || { echo "FAIL: index.html is not HTML"; exit 1; }
test -s style.css || { echo "FAIL: style.css empty"; exit 1; }
test -s script.js || { echo "FAIL: script.js empty"; exit 1; }
echo "All site checks passed."
