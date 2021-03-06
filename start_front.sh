#!/bin/bash

sed -i "s|GR_BACKEND_URL|${GR_BACKEND_URL}|g" /usr/share/nginx/html/main.bundle.js
sed -i "s|GR_GRAFANA_URL|${GR_GRAFANA_URL}|g" /usr/share/nginx/html/main.bundle.js
sed -i "s|GR_ALERTS_URL|${GR_ALERTS_URL}|g" /usr/share/nginx/html/main.bundle.js
sed -i "s|GR_ROUTINGMAP_URL|${GR_ROUTINGMAP_URL}|g" /usr/share/nginx/html/main.bundle.js
sed -i "s|GR_DOMAIN_URL|${GR_DOMAIN_URL}|g" /usr/share/nginx/html/main.bundle.js

nginx -g "daemon off;"
