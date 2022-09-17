"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const router = express.Router();

//conecta ao banco
mongoose.connect('mongodb+srv://FabricioMagnus:DE68rock@cluster0.bsutdbs.mongodb.net/test');

//carrega as rotas
const indexRoutes = require("./routes/index-route");
const productRoutes = require("./routes/product-route");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", indexRoutes);
app.use("/products", productRoutes);

module.exports = app;
