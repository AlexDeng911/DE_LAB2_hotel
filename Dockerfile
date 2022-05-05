FROM node:16

COPY . .

# When this Dockerfile is built (with "docker build .") the base "app-node" image will:
# - Copy files from this directory into /app on the image
# - Run npm install from /app

# When resulting image is run (with "docker run"):
# - Set $COMPANY_ENVIRONMENT to one of these values test, int, prod (defaults to "dev", set it with "-e COMPANY_ENVIRONMENT=<env>")
# - Start the app with "npm start"