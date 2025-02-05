FROM node:22.13.1-slim

ARG FLOYD_APP_NAME
ENV FLOYD_APP_NAME=${FLOYD_APP_NAME}

WORKDIR /app

COPY package.json package-lock.json turbo.json ./

COPY apps/${FLOYD_APP_NAME}/package.json apps/${FLOYD_APP_NAME}/

RUN npm install --workspace=apps/${FLOYD_APP_NAME}

COPY . .

ENV NODE_ENV=production

RUN npm run build --workspace=apps/${FLOYD_APP_NAME}

EXPOSE 3000

CMD ["npm", "start", "--workspace=apps/${FLOYD_APP_NAME}"]
