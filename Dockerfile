FROM node:20-slim

# Install necessary system libraries for Prisma and SSL
RUN apt-get update -y && apt-get install -y openssl

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy source
COPY . .

# Environment variables for build
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
ENV DATABASE_URL="file:./prisma/dev.db"

# Build
RUN npx prisma generate
RUN npm run build

# Production Setup
EXPOSE 3000
ENV PORT=3000

# Start command handles DB setup at runtime
CMD ["npm", "start"]
