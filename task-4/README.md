# Task 4: Simple API REST with Node.js

## Prerequisites
- You should have been installed Node.
- You should have been installed curl.
- You should have been installed and running Wazuh manager and Wazuh API.

## Executing
### Quick start
Firts install dependencies with:
```bash
$ npm install
```
The you can start the server on http://localhost:3000 with:
```bash
$ npm start
```

## API resources
Once you have the server running you can try to do the next request.

#### Get "Hello World"
You must run:
```bash
$ curl "http://localhost:3000/"
```

#### Get Wazuh Agents
If do you have installed and running Wazuh manager and Wazuh Api in the same host (https://localhost:55000).
You can obtain the list of agents
```bash
$ curl "http://localhost:3000/agents"
```
