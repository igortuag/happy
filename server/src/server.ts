import express from "express";

import "./database/conection";

const app = express();

app.get("/user", (req, res) => {
  return res.json({ message: "Hello World" });
});

app.listen(3333);
