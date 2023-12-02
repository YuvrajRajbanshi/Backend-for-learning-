// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";

import dotenv from 'dotenv'


dotenv.config({
    path: './env'
})

connectDB()












/*
import express from "express"

const app = express()


    (async () => {
        try {
            await mongoose.connect(`${process.env.MONGODB_URL}`)
            app.on("error", (error) => {
                console.log("ERROR", error)
                throw error
            })
            app.listen(process.env.PORT, () => {
                console.log(`App is listening on port ${process.env.PORT}`)
            })
        } catch (error) {
            console.error("ERROR", error)
        }
    })()

    */