#!/bin/bash

sed -i s/process.env.GR_BACKEND_URL/${GR_BACKEND_URL}/g /usr/share/nginx/html/main.bundle.js
sed -i s/process.env.GR_GRAFANA_URL/${GR_GRAFANA_URL}/g /usr/share/nginx/html/main.bundle.js

nginx -g daemon off;
