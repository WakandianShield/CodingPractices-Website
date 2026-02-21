FROM ghcr.io/engineer-man/piston:latest

USER root

# Instalar nodejs y npm (necesarios para el CLI)
RUN apt-get update && \
    apt-get install -y nodejs npm && \
    rm -rf /var/lib/apt/lists/*

# Crear directorios con permisos
RUN mkdir -p /var/lib/isolate && \
    chmod 777 /var/lib/isolate && \
    mkdir -p /piston/data && \
    chmod 777 /piston/data && \
    mkdir -p /piston/packages && \
    chmod 777 /piston/packages

# Instalar el CLI de piston globalmente
RUN npm install -g @piston-cli

# Copiar script de inicio
COPY start.sh /start.sh
RUN chmod +x /start.sh

EXPOSE 2000

CMD ["/start.sh"]