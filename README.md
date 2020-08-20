# Name

api-server

# link to swaggerhub 
https://app.swaggerhub.com/apis/KaterynaShydlovska/notes/0.1


# v 1.0.0

API Basics
Use JSON Server (non-express) to mock the routes for testing purposes

# v 1.2.0

Basic API
Create CRUD/ReST endpoints for categories and products
Separate route modules for each data model type
Store user created data in memory (no persistence)
Integrates with an online CI framework



# Description

We’re opening a online store! In order to support our web application, we need to create an API that will serve specific data (namely, categories and products) to our application. We will write an API to interface with our databases to provide category and product information to our front end app.

As it is highly likely that we will need more data types and sources in the future, it’s imperative that we build this API as a standardized means of working with any data model, using any persistence system, though a common interface. The API Server must operate as follows:

Support all REST/HTTP methods
GET: Retrieve record(s) from a data source
All
One (by id)
Some (by filtering)
POST: Create a new record in a data source
PUT: Update a single full record in a data source
PATCH: Update part of a single record in a data source
DELETE: Delete a record in a data source

# v 1.3.0

Modyfied index.js and server.js
conected to Mongo DB
Added tests to new files 









