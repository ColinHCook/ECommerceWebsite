// backend/models/productModel.js
const db = require("../config/db");

exports.getAllProducts = async () => {
  const res = await db.query("SELECT * FROM products");
  return res.rows;
};

exports.getProductById = async (id) => {
  const res = await db.query("SELECT * FROM products WHERE id = $1", [id]);
  return res.rows[0];
};

exports.createProduct = async (product) => {
  const { name, description, price, stock, imageUrl } = product;
  const res = await db.query(
    "INSERT INTO products (name, description, price, stock, image_url) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [name, description, price, stock, imageUrl]
  );
  return res.rows[0];
};

exports.updateProduct = async (id, product) => {
  const { name, description, price, stock, imageUrl } = product;
  const res = await db.query(
    "UPDATE products SET name = $1, description = $2, price = $3, stock = $4, image_url = $5, updated_at = NOW() WHERE id = $6 RETURNING *",
    [name, description, price, stock, imageUrl, id]
  );
  return res.rows[0];
};

exports.deleteProduct = async (id) => {
  const res = await db.query("DELETE FROM products WHERE id = $1 RETURNING *", [
    id,
  ]);
  return res.rows[0];
};