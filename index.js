require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const http = require("http");

const itemRoute = require("./routes/itemRoute.js");
const orderRoute = require("./routes/orderRoute.js");

const app = express();
app.use(express.json());
app.use("/item", itemRoute);
app.use("/order", orderRoute);

const server = http.createServer(app);

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

// server listening
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
