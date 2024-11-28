# Air India Project 

This repository contains the Air India Project, a web application designed to simulate the functionalities of the Air India website. Built with Angular, Bootstrap, and JavaScript, it allows users to register, log in, search for flights, and book tickets seamlessly.

How to Set Up and Run the Project
### Start the Backend
To initialize the backend, run the allData.json file on JSON Server. Use the following command:

### To install json-server globally
`npm install -g json-server`

Open the root folder(assests) of allData.json file and open cmd on this path then enter the below command.
### Initialising the JSON File on port 3000 for backend
`json-server --watch allData.json --port 3000`

Verify in your browser that `https://localhost:3000` port is running with three end points:-
-flightdata (contains all flight data in json format)
-users (contains all users data in json format)
-tickets (contains all tickets data in json format)


### Start the FrontEnd

### To install project dependencies of the project
`npm install`

### To run the project
`npm start`

By default, it will run on `https://localhost:4200`