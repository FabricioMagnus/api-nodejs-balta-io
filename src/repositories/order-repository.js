"use strict";
const Order = require("../models/order");

exports.get = async (body) => {
    var response = await Order.find({}, 'number status customer items')
    .populate('customer', 'name').populate('items.product', 'title')
    return response;
};


exports.create = async (body) => {
    var order = new Order(body);
    const response = await order.save();
    return response;
};