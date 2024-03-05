//Express and Cors
const express = require("express");
const app = express();
const cors = require("cors")
//conn.js
require("./db/conn");
//port
const port = 3000;
//foodNutrition
const foodNutrition = require("./models/foodNutrition");
//Middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("<h1>Welcome to Food and Nutrition API");
});

app.get("/foodAPI", async (req, res) => {
    try {
        const data = await foodNutrition.find();
        res.status(200).send(data);
    } catch (error) {
        res.status(404).send("<h1>Error 404</h1>");
    }
});

app.post("/newFood", async (req, res) => {
    try {
        // const newData = new foodNutrition(req.body);
        const newData = await foodNutrition.create(req.body);
        res.status(200).send(newData);
    }
    catch(error) {
        res.status(404).send("<h1>Error 404</h1>");
    }
});

app.delete("/foodAPI/del/:foodItem", async (req, res) => {
    try {
        const food_item_name = req.params.foodItem;
        const data = await foodNutrition.findOneAndDelete({food_item_name});
        res.status(200).send(data);
    } catch (error) {
        res.status(404).send("<h1>Error 404</h1>");
    }
});

app.listen(port, () => {
    console.log(`Server is now listening in ${port}`);
});