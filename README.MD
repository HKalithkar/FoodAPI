To run

    npm install
    cd src
    nodemon app

format(Schema) Post new data using Postman (URL: "http://localhost:3000/newFood")
    
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

    const nutritionsSchema = new mongoose.Schema({
        fat: Number,
        fiber: Number,
        protein: Number,
        calories: Number,
        carbohydrates: Number
    });

