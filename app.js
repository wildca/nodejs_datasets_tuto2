const express = require('express')

const port = 3000 || process.env.PORT ;

const app = express();

app.get('/', (req, response) => {
    response.status(200).send( "Hello world");
});

app.listen(port, ()=> {
    console.log("Application running on port: ", port);
});