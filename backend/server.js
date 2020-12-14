const http = require('http');
const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const nodemon = require('nodemon');
//const app = require('./app');
const app = express();
const port = 3420;


const routes = require('./routes/tab');



/**
 * Connect to MongoDB database.
 */

const mongoDbUri ='mongodb+srv://Arthur:motdepassearthur@projetwidgets.johpw.mongodb.net/<dbname>?retryWrites=true&w=majority';


mongoose.connect(`${mongoDbUri}` || `mongodb://localhost:27017`,{ 
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
});

mongoose.connection.on('connected', () => {
    console.log("Bien connecté !")
});


/**
 * Create HTTP server.
 */

//const server = http.createServer(app);
app.use(morgan('tiny'));
app.use('/api', routes);
app.delete('/delete/:id', routes);

app.listen(port, console.log(`Ca tourne sur le port ${port}`));
