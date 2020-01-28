#comic-character-challenge

This repo is organized as follow

- backend
- frontend

## Prerequisites

You need the following things properly installed on your own machine.

- [Docker](https://github.com/Netflix/eureka)
- [Docker Compose](https://docs.docker.com/compose/install/)

So now you are ready to start up the application.

You can choice to run only backend, this way you have to type as follow:

```console
$ docker-compose up
```

The command will download the [MongoDB](https://www.mongodb.com) image and star, besides that it will compile a docker image for frontend and will start it up on http:localhost:8080.

```console
$ docker-compose up --build
```

- backend will be accessible on http://localhost:5000
- frontend will be accessible on http://localhost:8080/#/comicApp

## Populate DataBase with characters and comics

```console
GET http://localhost:5000/marvel/populate
```
