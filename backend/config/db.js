const mongoose = require('mongoose'); // This line imports the Mongoose library, which is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a straightforward, schema-based solution to model application data and includes built-in type casting, validation, query building, and business logic hooks.
//async   means the function contains code that needs to wait
const connectDB = async () => { // This line defines an asynchronous function named connectDB. This function will be responsible for establishing a connection to the MongoDB database using Mongoose.
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;

