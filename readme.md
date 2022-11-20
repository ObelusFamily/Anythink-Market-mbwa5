# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the
db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md)
and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug
branch and add `@vanessa-cooper` as reviewer.

## First setup

Clone this repo:

```shell
git clone https://github.com/ObelusFamily/Anythink-Market-mbwa5
```

[Install Docker](https://docs.docker.com/get-docker/)

Verify Docker is installed

```shell
docker -v
docker-compose -v
```

Start the local dev env

```shell
cd Anythink-Market-mbwa5
docker-compose up
```

Check the backend is accessible by opening: http://localhost:3000/api/ping

Check the front end is accessible by opening http://localhost:3001/register and creating a new user
