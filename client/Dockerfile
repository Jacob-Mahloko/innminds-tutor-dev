# Use Node.js 14 as base image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port that the Next.js application runs on
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
