const express = require("express");
const app = express();

const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");
const path = require("node:path");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   res.render("index", { message: "EJS rocks!" });
// });

const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];

const footerInfo = "Footer information placeholder";
const users = ["Rose", "Cake", "Biff"];
app.get("/about", (req, res) => {
  res.render("about", { about: "This is what it's about" });
});
app.get("/", (req, res) => {
  res.render("index", { links: links, users: users, footerInfo: footerInfo });
});

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
// app.use("/", indexRouter);

app.use((err, req, res, next) => {
  console.error(err);
  // We can now specify the `err.statusCode` that exists in our custom error class and if it does not exist it's probably an internal server error
  res.status(err.statusCode || 500).send(err.message);
});

// // Every thrown error in the application or the previous middleware function calling `next` with an error as an argument will eventually go to this middleware function
// app.use((err, req, res, next) => {
//   console.error(err);
//   res.status(500).send(err);
// });

// app.get("/", (req, res) => res.send("Hello, world! I am a big poo"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  // This is important!
  // Without this, any startup errors will silently fail
  // instead of giving you a helpful error message.
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});
