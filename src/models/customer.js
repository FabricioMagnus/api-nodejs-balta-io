"use strict";

const mongoose = require("mongoose");
//const Schema = moongose.Schema;
//const schema = new mongoose.Schema({
const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    pwd: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Customer", customerSchema);
