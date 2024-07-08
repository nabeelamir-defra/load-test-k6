# K6 Load Test

Used this as a guide https://github.com/thesagarchavan/k6-docker-demo-simple

## Prequisites

- Docker
- Node 18 (although not necessary!!)

## Build and run

Build Docker image

```
docker buildx build -t k6_image_name --file ./Dockerfile .
```

Run Container

```
docker run --rm --name k6_container_name k6_image_name
```
