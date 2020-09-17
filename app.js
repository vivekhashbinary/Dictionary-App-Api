// const express = require('express')
import express from 'express';
const app = express();
import mongoose from "mongoose"
import bodyParser from "body-parser";
require('dotenv/config')

app.use(bodyParser.json())
import DictionaryRoutes from './api/routes/Dictionary.routes';

app.use("/dictionary", DictionaryRoutes)

mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true }, () => {
    console.log("connected to DB!!")
})

module.exports = app;