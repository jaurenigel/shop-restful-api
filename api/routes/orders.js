const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling GET request to /orders"
  });
});

router.post("/", (req, res, next) => {
  const order = {
    productId: req.body.productId,
    quantity: req.body.quantity
  };
  res.status(201).json({
    message: "Handling POST request to /orders",
    order: order
  });
});

router.get("/:orderID", (req, res, next) => {
  res.status(200).json({
    message: "order details",
    orderId: req.params.orderId
  });
});

router.delete("/:orderID", (req, res, next) => {
  res.status(200).json({
    message: "order deleted",
    orderId: req.params.orderId
  });
});

module.exports = router;
