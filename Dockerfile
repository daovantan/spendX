FROM node:18-alpine as builder

WORKDIR /usr/src/app/
USER root
COPY package.json ./
RUN npm install -g vite tsc eslint
RUN apk add git && npm install

COPY ./ ./
ENV REACT_APP_ENV=dev
ENV APP_PORT=3000

CMD ["npm", "run", "dev"]

# FROM node:12-alpine as runner
# RUN npm install serve -g
# RUN mkdir -p /app
# WORKDIR /app
# COPY --from=builder /usr/src/app/dist /app

# CMD ["serve"]
