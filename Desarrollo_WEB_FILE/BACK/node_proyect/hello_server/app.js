// Importing the Express module.
import express from 'express';

// Creating an instance of the express application.
const app = express();

/* Making a GET request on the root route and sending 'Hello World!' 
as the response to the request. */
//arrow functions: una función que
app.get('/api/hello', (req, res) => {
  res.send('Hello World!');
  // crea una respuesta
})

// Listening for incoming requests on port 3000.
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
})
