const express = require("express");
const router = express.Router();

const { item } = require("../models/index.js");

router.get("/", async (req, res) => {
  const items = await item.find();

  if (items) {
    return res.status(200).json(items);
  } else {
    return res.status(500).json({ error: "Could not find items" });
  }
});

router.post("/", async (req, res) => {
  const result = await item.create(req.body);

  if (result) {
    return res.status(201).json(result);
  } else {
    return res.status(500).json({ error: "Could not create item" });
  }
});

router.patch("/", async (req, res) => {
  const id = req.body._id;
  const updatedData = req.body;
  const options = { new: true };

  const result = await item.findByIdAndUpdate(id, updatedData, options);

  if (result) {
    return res.status(200).json(result);
  } else {
    return res.status(500).json({ error: "Could not update item" });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  const result = await item.findByIdAndDelete(id);

  if (result) {
    return res.status(200).json(result);
  } else {
    return res.status(500).json({ error: "Could not delete item" });
  }
});

module.exports = router;
