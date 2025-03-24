# Step 1: Use the official Node.js image from Docker Hub
FROM node:18-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy application files to the container
COPY . .

# Step 4: Install dependencies
RUN npm install

# Step 5: Expose the port your app will run on
EXPOSE 3000

# Step 6: Define the command to run your app
CMD ["npm", "start"]
