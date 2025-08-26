// routes/authorRouter.js
const { Router } = require("express");

const authorRouter = Router();

authorRouter.get("/", (req, res) => res.send("All books"));
authorRouter.get("/:bookId", (req, res) => {
  const { bookId } = req.params;
  res.send(`Book ID: ${bookId}`);
});

module.exports = authorRouter;
