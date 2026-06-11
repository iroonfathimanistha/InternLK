/*
const express=require('express') //web framework for creating api & create web server easy
const app = express() //It is function to create express application & We store that server object in a variable named app.





app.use(express.json())  // app.use() tells to use certain function for every incoming request. express.json() is a built-in middleware that parses incoming JSON data in the request body.

app.get('/api/test',(req,res) =>{ //  This line defines a route handler for GET requests to the '/api/test' endpoint. When a GET request is made to this endpoint, the provided callback function will be executed.
   res.json({ message: 'Backend is working!' }); // Inside the callback function, res.json() is used to send a JSON response back to the client. The response contains an object with a single property message that has the value 'Backend is working!'.
});

const PORT = process.env.PORT || 5000;   // This line sets the port number for the server to listen on. It first checks if there is a PORT environment variable defined (which is common in production environments), and if not, it defaults to 5000.
app.listen(PORT, () => {  // This line starts the server and makes it listen for incoming requests on the specified port. The callback function is executed once the server is successfully running.
  console.log(`Server is running on port ${PORT}`);
});
*/

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Internship Platform API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));