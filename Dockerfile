FROM nginx:1.13.6-alpine
COPY dist /usr/share/nginx/html/
COPY start_front.sh /tmp
EXPOSE 80

# Override these two with the correct urls at runtime :)
ENV GR_BACKEND_URL 'http://192.168.99.100:8080'
ENV GR_GRAFANA_URL 'http://192.168.99.100:3000'

CMD ["sh", "/tmp/start_front.sh"]
