# single-page-serverless-todo-apps
Single Page App with serverless node.js-ms-azure

Task Assign : {Pramod}

Author : {Smruti Ranjan Behera}

Overview :
create a CRUD rest API, using

Node.js -   JavaScript runtime built on Chrome's V8 JavaScript engine.

Express - simply Express, is a back end web application framework for building RESTful APIs with Node.js,

Sequelize - Sequelize is a Node.js-based Object Relational Mapper that makes it easy to work with PostgreSQL databases, and more. An Object Relational Mapper performs
functions like handling database records by representing the data as objects.

postgresql - PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance

Docker - Using Docker, you can quickly deploy and scale applications into any environment and know your code will run

Docker Compose - Docker Compose is a tool that was developed to help define and share multi-container applications. With Compose, we can create a YAML file to define the services and with a single command


Definition
created 5 endpoints for basic CRUD operations:

{Create}
{Read all}
{Read one}
{Update}
{Delete}

1-create an Node.js application using , 
2- Express as a framework Sequelize as an ORM Dockerize the Node.js application have a Postgres istance, we will test it with Tableplus
3- create a docker compose file to run both the services
4- Testing the APIs with Postman

Step-by-step guide for command to run the application & test the application
Git-clone : Repo 
open the terminal in using VScode-terminal then run the below commands
npm i express pg sequelize - Gobal
npm install express pg sequelize - target-location

*Database connection
Create a file called "database.js" inside the "util" folder
*User model
Create a file called "user.js" inside the "models" folder.
*Controllers
This is the file that contains all the functions to execute in order to interact with the database and have the 4 basic functionalities:
Create a file called "users.js" inside the "controllers" folder
*Routes
Create a file called "users.js" inside the "routes" folder.
Populate the routes/users.js file
*Index file
To run our application we need to create on more file at the root level. this is the file that will be executed by the docker container.
in the root folder, create a file called index.js
Populate the "index.js file":

*Docker Part
-------------------------
.dockerignore (it starts with a dot)
Dockerfile (capital D)
docker-compose.yml

Build the Docker image and run the docker containers
Run Postgres in a container
commands:
-----------
docker compose up -d node_db
docker compose build
docker compose logs
docker compose up node_app

Test the app using Postman.

Make a GET request to localhost:3000

Make a GET request to localhost:3000/users
have an employe array as a response

![image](https://github.com/smrutibehera01/single-page-serverless-todo-apps/assets/112945708/dd82138b-a2e3-429e-be64-3515bef15227)
