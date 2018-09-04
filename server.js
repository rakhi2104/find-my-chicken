const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const chickens = require('./routes/api/chickens');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

// Database Config
const db = process.env.MLAB_URI;
const port = process.env.PORT || 5000;

// mongoose.connect(db, {
//         useNewUrlParser: true
//     })
//     .then(() => {
//         console.log("MongoDB connected 💾 😄");
//     })
//     .catch((err) => {
//         console.log("Pssst!");
//         console.log(err);
//     });

app.use('/api/chicken', chickens);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});