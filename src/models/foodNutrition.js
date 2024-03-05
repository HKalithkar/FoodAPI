const mongoose = require("mongoose");

const nutritionsSchema = new mongoose.Schema({
    fat: Number,
    fiber: Number,
    protein: Number,
    calories: Number,
    carbohydrates: Number
});

const foodSchema = new mongoose.Schema({
    allergens: [String],
    food_group: String,
    description: String,
    ingredients: [String],
    serving_size: String,
    certifications: [String],
    food_item_name: String,
    health_benefits: [String],
    country_of_origin: String,
    preparation_methods: [String],
    dietary_restrictions: [String],
    brand_or_manufacturer: String,
    nutritional_information: nutritionsSchema
});

const foodNutritions = new mongoose.model("Food and Nutritions", foodSchema);
module.exports = foodNutritions;

// async function del(foodItem) {
//     const res = await fetch(`http://localhost:3000/foodAPI/del/${foodItem}`, {
//         method: "DELETE"
//     });

// }

{/* <button onclick="del(${data.food_item_name})">Delete</button> */}