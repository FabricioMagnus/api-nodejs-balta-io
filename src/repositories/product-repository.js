"use strict";
const Product = require("../models/Product");

exports.get = async () => {
    const response = await Product.find(
        {
            active: true,
        },
        "title price slug"
    );
    return response;
};

exports.getBySlug = async (slug) => {
    const response = await Product.findOne(
        {
            active: true,
            slug: req.params.slug,
        },
        "title description price slug tags"
    );
    return response;
};

exports.getById = async (id) => {
    const response = await Product.findById(id);
    return response;
};

exports.getByTag = async (tag) => {
    const response = await Product.find(
        {
            tags: tag,
            active: true,
        },
        "title description price slug tags"
    );
    return response;
};

exports.create = async (body) => {
    var product = new Product(body);
    const response = await product.save();
    return response;
};

exports.update = async (id, body) => {
    const response = await Product.findByIdAndUpdate(id, {
        $set: {
            title: body.title,
            slug: body.slug,
            description: body.description,
            price: body.price,
        },
    });
    return response;
};

exports.delete = async (id) => {
    const response = await Product.findOneAndRemove(id);
    return response;
};
