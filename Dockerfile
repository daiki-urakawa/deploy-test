#nodeの入ったイメージ持ってくる
FROM node:latest

#作業ディレクトリを移動
WORKDIR /migrate-test/backend

COPY ./package.json .
COPY ./lerna.json .
COPY ./packages/server/ ./packages/server
COPY ./packages/prisma/ ./packages/prisma
# COPY ./packages/utils/ ./packages/utils

RUN npx lerna bootstrap