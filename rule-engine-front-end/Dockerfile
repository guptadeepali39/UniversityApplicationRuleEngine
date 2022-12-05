FROM node:16-alpine AS development
ENV NODE_ENV development
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD [ "npm","run", "start" ]