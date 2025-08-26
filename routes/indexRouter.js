// routes/authorRouter.js
const { Router } = require("express");

const authorRouter = Router();

authorRouter.get("/", (req, res) => res.send("All index"));
authorRouter.get("/:indexId ", (req, res) => {
  const { indexId } = req.params;
  res.send(`Index ID: ${IndexId}`);
});

module.exports = authorRouter;
