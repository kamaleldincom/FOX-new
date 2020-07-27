# Run Flask App on Docker

## Prerequisites

Install [Docker Desktop](https://docs.docker.com/get-docker/)
Into VSCode add extension : [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)


## Create Dockerfile
In the project root create file: **Dockerfile**
Here example:
```
FROM python:3

WORKDIR /usr/src/app

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# tell the port number the container should expose
EXPOSE 5000

CMD [ "python", "-m", "flask", "run",  "--host=0.0.0.0"]
```
This file defines how build docker container for run flask app

## Create docker-compose.yaml
In the project root folder create file: **docker-compose.yaml**
Here example:
```yaml
version: "3.8"
services:
  db:
    image: postgres
    volumes:
      - db_data:/var/lib/postgresql/data
    environment:
      POSTGRES_PASSWORD: mypassword
  web:
    build: .
    command: python -m flask run --host=0.0.0.0
    volumes:
      - .:/usr/src/app
    ports:
      - 5000:5000
    depends_on:
      - db

volumes:
  db_data:
```
Here we define two services - **db** and **web**.
Corresponding for each service will be created two docker containers: **db** and **web**.
- **db** container builds on docker image ["postgres"](https://hub.docker.com/_/postgres)
- **web** container defined in Dockerfile

## Docker Composer Build
Run composer build:
```
docker-compose up -d --build
```
This command must be executed in the same directory where placed Dockerfile and docker-composer.yaml files (project root folder).

## Create PostgeSQL database
For first run as initial action we need create database in db container.
Let's go to postgres command line. First at all need attach to working db container.

![Attach to db container!](img/attach_postgres.png "Attach to db container")

Steps:
1. In VsCode select Docker dashboard
2. Select "postgres" container
3. In popup menu select **Attach Shell** item

In opened terminal set user postgres:
```
su postgres
```
Run postgres CLI:
```
psql
```
Create database:
```
create database db;
```
Done! Now in your flask app you can use following connection string to database:
```python
DEVEL_DATABASE_URL = "postgresql+psycopg2://postgres:mypassword@db/db"
```

## Docker composer commands for control

### Docker composer build and run setup in the background
```
docker-compose up -d --build
```
### Docker composer run setup and watch log
```
docker-compose up
```

### Docker compose shutdown setup
```
docker-compose down
```
