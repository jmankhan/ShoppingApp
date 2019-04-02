# BUILDER
FROM node:11.13-alpine as builder

WORKDIR /build
RUN mkdir ./client && mkdir ./dist

# REACT COPY
COPY client/public ./client/public
COPY client/package-lock.json ./client/
COPY client/package.json ./client/
COPY client/src ./client/src

# REACT INSTALL
RUN cd ./client && npm install && npm run build
RUN cp -r ./client/build/ ./dist/react

# COPY EXPRESS
COPY ["index.js", "package.json", "package-lock.json", "./dist/"]

# PROD
FROM node:11.13-alpine

EXPOSE 3000

WORKDIR /app
COPY --from=builder /build/dist /app
RUN npm install
CMD ["npm", "start"]