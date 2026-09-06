#!/usr/bin/env bash
set -euo pipefail

TARGET="/opt/sentinel/frontend/dist"
mkdir -p "$TARGET"
rsync -av --delete ./dist/ "$TARGET/"
if command -v nginx >/dev/null 2>&1; then
  nginx -t
  systemctl reload nginx
fi
