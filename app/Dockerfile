FROM node:18-alpine AS dev

WORKDIR /app/

COPY package*.json ./
RUN npm ci --include=dev

COPY ./ ./

EXPOSE 3000

CMD ["npm", "run", "dev"]


# 本番環境用のビルドステージ
FROM node:18-alpine AS build

WORKDIR /app/

COPY package*.json ./
RUN npm ci --only=production

COPY ./ ./

RUN npm run build


FROM node:18-alpine AS prod

WORKDIR /app/

COPY --from=build /app/.next .next/
COPY --from=build /app/public public/
COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules node_modules/
COPY --from=build /app/next.config.ts ./

EXPOSE 3000

CMD ["npm", "start"]
