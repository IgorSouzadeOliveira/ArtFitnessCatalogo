// backend/routes/products.js
const express = require('express');
const router = express.Router();
const { sql } = require('../db');

router.get('/', async (req, res) => {
  try {
    const result = await sql.query`SELECT Id, Name, Description, Price FROM Products`;
    res.json(result.recordset);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const insert = await sql.query`INSERT INTO Products (Name, Description, Price) OUTPUT INSERTED.* VALUES (${name}, ${description}, ${price})`;
    res.status(201).json(insert.recordset[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao inserir produto' });
  }
});

module.exports = router;