# Overview

* Activate SonarQube with DockerCompose.
* We will publish static analysis and test results of Angular project with SonarScanner.

# System requirements

* Docker
* Docker Compose 
* Java - Oracle JRE 8
* Node.js - 10.x
* Yarn - 1.12.x

# Used library

* TypeScript - 3.2.x
* Angular - 7.2.x
* TSLint - 5.11.x
* karma-sonarqube-unit-reporter - 0.0.18
* sonar-scanner - 3.1.x

# Operation check

## 1. Download Sample

```
git clone git@github.com:yasu-s/sonarqube-docker-sample.git
```

## 2. Installing packages  

```
cd sonarqube-docker-sample
yarn
```

## 3. Launch SonarQube  

```
docker-compose up -d
```

## 4. Execute TSLint

```
yarn lint:output
```

## 5. Execution of unit test

```
yarn test:output
```

## 6. Running SonarQube Scanner

```
yarn sonarqube-scanner
```

## 7. Execution result

`http://localhost:9000/`

![sonarqube](https://user-images.githubusercontent.com/2668146/52160820-58cf3000-26ff-11e9-8903-958e7f502f58.png)

## 8. Exit SonarQube

```
docker-compose down
```
