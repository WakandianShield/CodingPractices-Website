FROM ghcr.io/engineer-man/piston:latest

USER root

# Crear directorios con permisos (ESTO ES CRÍTICO)
RUN mkdir -p /var/lib/isolate && \
    chmod 777 /var/lib/isolate && \
    mkdir -p /piston/data && \
    chmod 777 /piston/data && \
    mkdir -p /piston/packages && \
    chmod 777 /piston/packages

# Puerto que expone Piston
EXPOSE 2000

# Copiar script de inicio
COPY start.sh /start.sh
RUN chmod +x /start.sh

# Iniciar
CMD ["/start.sh"]