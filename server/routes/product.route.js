import express from "express";
import {
  createProduct,
  deleteProducts,
  getProducts,
  updateProduct,
} from "../controller/product.controller.js";

const router = express.Router();

//ALL PRODUCTS
router.get("/", getProducts);
//POST PRODUCT
router.post("/", createProduct);
//UPDATE PRODUCT
router.put("/:id", updateProduct);
//DELETE PRODUCT
router.delete("/:id", deleteProducts);

export default router;
