const express = require('express');
const app = express();
const jsonString = '{ "id": "1", "firstName": "Jhad", "lastName": "Galino", "middleInitial": "M" }';

const text = JSON.parse(jsonString);

app.get("/", (req, res) => {

  res.send("My First Name is: " + text.firstName);

});

const port = process.env.PORT;
app.listen(port, () => console.log(`I am now Listening to Port ${port}!`));
