# TRICKY GAME

## Docker:

Use docker-compose up -d to build a development enviroment for the services that the game need to work.
Likewise the docker-compose file can be modified to comunicate though different ports, but you have to be careful to update
the enviroment variables of each proyect and the link field that communicate the API and the mongo Db on docker enviroments.

Note: If you want to test some change that you made after the docker images were builded, the image should be removed with docker image rm <name image> and rebuilded.

## Frontend:

### VUE 2.6 (Router, Vuex , SCSS, Eslint recommended, Prettier)
### WEBPACK 4.29, CLI 3.2, Dev-Server 3.1

Enviroment variables: Config > env > variables files in .JS. The variables was setup in .js files to handle the webpack setup easier.

You can test the front with docker (bases on the official DOC through a NGINX server) or without it. In the sencond case, you can access to the frontend folder and run:

1. NPM i
2. Update the required enviroment variables in the env files (development enviroment)
3. NPM run serve

## Back and DB:

### Node 12.18.0, Express with Mongoose.

Enviroment variables: .env file

You can test the back with docker (through the node-12:stretch image), this will setup automatically the communication with the mongo container through the port 27017. You can also test without docker, but in this case you should setup your own mongo server first and update the connection string in the .env file, take in account that the API exposed port also can be modified.

In case of test it without docker, you can follow these steps:

1. NPM I
2. Update the required enviroment variables in the env files (development enviroment).
3. Take in account that the server will not start if the mongo connection fails.
4. NPM run serve or NPM run start | Run serve take advantage of nodemon.

Note: a postman collection is available in the folder root of this proyect.
