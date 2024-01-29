const express = require("express");
const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});
// define the home page route
router.get("/", (req, res) => {
  res.send("All the blogs");
});
// define the about route
router.get("/:id", (req, res) => {
  res.send(`Blog id no. ${req.params.id}`);
});

module.exports = router;
