const productService = require('../services/productsService');

exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await productService.findAll();
    res.json(products);
  } catch (err) {
    next(err);
  }
};

exports.createProduct = async (req, res, next) => {
  try {
    const { name, description, price } = req.body;
    const newProduct = await productService.create({ name, description, price });
    res.status(201).json(newProduct);
  } catch (err) {
    next(err);
  }
};