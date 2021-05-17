const express = require("express");
const logger = require("morgan");
const path = require("path");
const app = express();
// console.log("path---------");
// console.log(path);
// console.log("dir__name");
// console.log(__dirname);
// console.log("path.join");
// console.log(path.join(__dirname, "views"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
//middleware
app.use(logger("dev"));
app.use(express.json());
app.get("/", function (request, response) {
  //response.send("Hello class");
  response.json({
    name: "hamster",
    friends: ["tommy", "geo", "john"],
    food: {
      food1: "candies",
      food2: "burgers",
    },
    boolean1: true,
    boolean2: false,
    number: 123,
  });
});
app.get("/:product/:id", function (request, response) {
  console.log(request.params);
  response.json({
    price: 100,
    type: request.params.product,
    id: request.params.id,
  });
});
app.post("/create-product", function (req, res) {
  console.log(req.body);
  res.json({
    data: req.body,
  });
});
app.listen(3000, function () {
  console.log(`Server is running on PORT: ${3000}`);
});