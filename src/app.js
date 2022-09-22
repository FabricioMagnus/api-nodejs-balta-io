"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./config");

const app = express();
const router = express.Router();

//conecta ao banco
mongoose.connect(config.connectionString);

//carrega as rotas
const indexRoutes = require("./routes/index-route");
const productRoutes = require("./routes/product-route");
const customerRoutes = require('./routes/customer-route');
const orderRoutes = require("./routes/order-route");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", indexRoutes);
app.use("/products", productRoutes);
app.use("/customers", customerRoutes);
app.use("/orders", orderRoutes);

module.exports = app;
