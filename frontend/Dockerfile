FROM node:12.14.1-slim
ENV PORT=8080

# Copia
COPY . /frontend
WORKDIR /frontend

ENV TZ=America/Sao_Paulo

# Prepara node aplication
RUN npm cache clean --force && rm -rf ~/.npm && npm config set strict-ssl false && rm -rf node_modules/ && rm -f package-lock.json && npm install

EXPOSE $PORT
CMD npm start