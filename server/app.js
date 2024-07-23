import express from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";

const app = express();


mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('App is connected to database')
        app.listen(PORT, () => {
            console.log(`App is listening to port : ${PORT}`);
        })

    })
    .catch((error) => {
        console.error(error)
    })