# E-Champ App

A server-side app for browser online games
built on [E-Champ platform](https://github.com/mkhorin/e-champ).

#### Available games

- [Draughts](https://github.com/mkhorin/e-champ-draughts) - a logical game
- [Durak](https://github.com/mkhorin/e-champ-durak) - a card game

## Docker installation

Clone application to /app
```sh
cd /app
docker-compose up -d mongo
docker-compose up --build installer
docker-compose up -d server
```

## Typical installation

#### Install environment
- [Node.js](https://nodejs.org) (version 14)
- [MongoDB](https://www.mongodb.com/download-center/community) (version 4)

#### Linux
Clone application to /app
```sh
cd /app
npm install
NODE_ENV=development node console/install
NODE_ENV=development node console/start
```

#### Windows
Clone application to c:/app
```sh
cd c:/app
npm install
set NODE_ENV=development
node console/install
node console/start
```

## Usage

Web interface: [http://localhost:3000](http://localhost:3000)

Sign in as administrator:
```sh
Email: a@a.a
Password: 123456
```