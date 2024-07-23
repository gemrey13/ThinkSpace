import dotenv from 'dotenv';
import express from "express";
import mongoose from "mongoose";
import APIV1 from './routes/api.v1.js';

dotenv.config();

const port = process.env.PORT;
const mongo_uri = process.env.MONGO_URI;

const app = express();
app.use(express.json());

app.use("/api/v1", APIV1);


mongoose.connect(mongo_uri)
    .then(() => {
        console.log('App is connected to database')
        app.listen(port, () => {
            console.log(`App is listening to port : ${port}`);
        })

    })
    .catch((error) => {
        console.error(error)
    })