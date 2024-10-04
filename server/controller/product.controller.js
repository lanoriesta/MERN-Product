import mongoose from "mongoose";
import Product from "../models/product.model.js";

//ALL PRODUCTS
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (err) {
    console.log("Error in fetching products: ", err.mesasge);
    res.status(500).json({ succes: false, message: "Server Error" });
  }
};

//POST PRODUCTS
const createProduct = async (req, res) => {
  const product = req.body;

  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all the fields" });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({ succes: true, data: newProduct });
  } catch (err) {
    console.log("Error in Creating Product", err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

//UPDATE PRODUCT
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Invalid Product ID" });
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    res.status(200).json({ succes: true, data: updatedProduct });
  } catch (err) {
    res.status(500).json({ success: true, message: "Server Error" });
  }
};

//DELETE PRODUCT
const deleteProducts = async (req, res) => {
  const { id } = req.params;

  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ succes: true, message: "Product Deleted" });
  } catch (err) {
    res.status(404).json({ succes: false, message: "Product not found" });
  }
};

export { getProducts, createProduct, updateProduct, deleteProducts };
