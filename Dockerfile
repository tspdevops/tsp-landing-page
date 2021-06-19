FROM 'nginx:1.21.0-alpine';
WORKDIR .
COPY ./build  /usr/share/nginx/html/
EXPOSE 80
