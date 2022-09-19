"use strict";
const Customer = require("../models/customer");

exports.get = async () => {
    const response = await Customer.find(
        {
            active: true,
        },
        "email nome pwd"
    );
    return response;
};

exports.create = async (body) => {
    var customer = new Customer(body);
    const response = await customer.save();
    return response;
};