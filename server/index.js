import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';
import mongoose from 'mongoose';

const CONNECTION_URL = process.env.CONNECTION_URL;
const port = process.env.PORT || 3000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.emit('DBconnected');
    })
    .catch((e) => {
        console.log(e.message);
    });


app.on('DBconnected', () => {
    app.listen(port, () => {
        console.log(`http://localhost:${port}`);
    });
})
