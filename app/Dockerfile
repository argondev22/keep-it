FROM node:18-alpine AS dev

WORKDIR /app

COPY package*.json ./
RUN npm ci --include=dev

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]


# build stage for production
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build


FROM gcr.io/distroless/static-debian12 AS prod

COPY --from=build /app/.next /app/.next

EXPOSE 3000

CMD ["npm", "start"]
