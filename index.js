const express = require("express");
const app = express();
const port = 3000;
const blogs = require("./routes/blogs");


app.use("/blogs", blogs);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
