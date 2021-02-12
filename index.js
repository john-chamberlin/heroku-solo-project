require("dotenv").config();
const express = require("express");
const server = express();

const PORT = process.env.PORT || 5000;

server.use(express.json());

server.use("/api/*", (_, res) => {
  res.json({ data: "The api is working finally" });
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
