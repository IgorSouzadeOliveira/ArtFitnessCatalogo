const productModel = require('../models/productModel');

exports.findAll = async () => {
  return await productModel.getAll();
};

exports.create = async (product) => {
  return await productModel.insert(product);
};