# Use an official k6 runtime as the base image
FROM grafana/k6
# Set the working directory in the container
WORKDIR /
# Copy the local K6 test script to the container
COPY index.js .
# Define the command to run the K6 test script
CMD ["run", "index.js", "--vus", "10", "--duration", "1m"]