FROM node:20-alpine AS builder
WORKDIR /app

# 1. Clean slate
RUN rm -rf ./*

# 2. Fresh dependencies
COPY package*.json ./
RUN npm install --frozen-lockfile || npm install

# 3. Fresh source
COPY . .

# 4. THE ULTIMATE CACHE BREAKER
# We inject a unique ID into the React build environment.
# This forces the compiler to generate brand new JS hashes.
ARG CI_COMMIT_SHORT_SHA
ENV REACT_APP_VERSION=$CI_COMMIT_SHORT_SHA
ENV INLINE_RUNTIME_CHUNK=false
ENV GENERATE_SOURCEMAP=false

RUN npm run build

# Final Stage
FROM node:20-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]

