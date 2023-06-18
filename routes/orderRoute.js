const express = require("express");
const router = express.Router();

const { order } = require("../models/index.js");

router.get("/", async (req, res) => {
  const orders = await order.find();

  if (orders) {
    return res.status(200).json(orders);
  } else {
    return res.status(500).json({ error: "Could not find orders" });
  }
});

router.post("/", async (req, res) => {
  const result = await order.create(req.body);

  if (result) {
    return res.status(201).json(result);
  } else {
    return res.status(500).json({ error: "Could not create order" });
  }
});

router.patch("/", async (req, res) => {
  const id = req.body._id;
  const updatedData = req.body;
  const options = { new: true };

  const result = await order.findByIdAndUpdate(id, updatedData, options);

  if (result) {
    return res.status(200).json(result);
  } else {
    return res.status(500).json({ error: "Could not update order" });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  const result = await order.findByIdAndDelete(id);

  if (result) {
    return res.status(200).json(result);
  } else {
    return res.status(500).json({ error: "Could not delete order" });
  }
});

module.exports = router;
