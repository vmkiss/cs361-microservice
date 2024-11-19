
# Event Microservice




## Microservice Set Up
1) Clone the program locally.

2) Install dependencies using npm install.

3) Create a .env file.
    
    Define a variable PORT and set it to the local port of your choosing.

    Define a variable MONGODB_CONNECT_STRING and set it to a MongoDB connection string. I can provide the connection string I used upon request, or you can create your own cluster and connection string in MongoDB.

## How to Programmatically REQUEST Data
The microservice can be called using a POST, GET, or DELETE request to the server on which it is listening through through three different endpoints beginning with: /events.

Below is a breakdown of the three different request types and their parameters and endpoints. For all requests, the variable MS_URL represents the url which the microservice on which the microservice is listening. Example calls for each request type are included using axios.


1) POST request

Purpose: To create a new event

Endpoint: MS_URL/events

Request parameters: userID (string), start date/time (date), end date/time (date), attendees (list of strings), and title (string). The request 
parameters will be included as a JSON object in the body of the post request.

Example call:

2) GET request

Purpose: To retrieve all events with the given user ID and date range

Endpoint: MS_URL/events/userID/dates

Request parameters: userID, start date, end date

Example call:

3) DELETE request

Purpose: To delete the event with the given ID

Endpoint: MS_URL/events/eventID

Request parameter: event ID

Example call:


## How to Programmatically RECEIVE Data

Data from the microservice will be received in the form of JSON. Once the appropriate action has been performed on the database, the data (or error) will be sent back to the client program via the response object.

1) POST request

The microserivce will return the data from the event that was stored in the database, including the event ID generated by the database on creation. Otherwise, it will return an error status and message if the request failed.

Data format example:

2) GET request

The microservice will return an array of all the database entries that match the given user ID and whose parameters are between the given start and end date query parameters. Otherwise, it will return an error status and message if the request failed.

Data format example:

3) DELETE request

The microservice will return the data from the entry that was found and delete from the database. Otherwise, it will return an error status and message if the request failed.

Data format example:



## UML Diagram