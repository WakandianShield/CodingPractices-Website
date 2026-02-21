FROM ghcr.io/engineer-man/piston:latest

USER root

# Crear directorios con permisos (esto evita el error "read-only file system")
RUN mkdir -p /var/lib/isolate && \
    chmod 777 /var/lib/isolate && \
    mkdir -p /piston/data && \
    chmod 777 /piston/data && \
    mkdir -p /piston/packages && \
    chmod 777 /piston/packages

# Instalar herramientas necesarias
RUN apk add --no-cache curl bash

# Puerto que usa Piston
EXPOSE 2000

# Script de inicio
COPY start.sh /start.sh
RUN chmod +x /start.sh

CMD ["/start.sh"]