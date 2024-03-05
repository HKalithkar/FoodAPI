const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/FoodAPI")
  .then(() => console.log("Connected to Food API database"))
  .catch(() => console.log("Connection to database failed"));
