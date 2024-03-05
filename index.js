fetch("http://localhost:3000/foodAPI")
.then(res => res.json())
.then(data => {
    const table_data = document.getElementById("food-items")
    data.map(data => {
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${data.food_item_name}</td>
            <td>${data.food_group}</td>
            <td>${data.brand_or_manufacturer}</td>
            <td>${data.country_of_origin}</td>
            <td>${data.description}</td>
            <td>${data.serving_size}</td>
            <td>
                <ul style="list-style: none; padding: 0;">
                    ${data.ingredients.map(ingredient => `<li style="padding: 2px 0;">${ingredient}</li>`).join("")}
                </ul>
            </td>
            <td>${data.preparation_methods}</td>
            <td>
                <ul style="padding: 0; list-style: none;">
                    <li>fat:${data.nutritional_information.fat}</li>
                    <li>fiber:${data.nutritional_information.fiber}</li>
                    <li>protein:${data.nutritional_information.protein}</li>
                    <li>calories:${data.nutritional_information.calories}</li>
                    <li>carbohydrates:${data.nutritional_information.carbohydrates}</li>
                </ul>
            </td>
            <td>${data.health_benefits}</td>
            <td>${data.allergens}</td>
            <td>${data.dietary_restrictions}</td>
            <td>${data.certifications}</td>
            <td>
                <button onclick="del('${data.food_item_name}')">Delete</delete>
            </td>
            
        `
        table_data.appendChild(newRow);
    })
})
.catch(err => console.log("Could not fetch"));

async function del(name) {
    try {
        console.log(name);
        const deletedData = await fetch(`http://localhost:3000/foodAPI/del/${name}`, {
        method: "DELETE"
        });
        location.reload();
    } catch (error) {
        console.log("Unable to delete");
    }
}