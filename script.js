const API = "https://dummyjson.com/products";

async function fetchData() {
    try {
        const response = await fetch(API);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data?.products);

        // Sort products into categories
        const beautyProducts = data.products.slice(0, 10); // First 10 products for Beauty
        const furnitureProducts = data.products.slice(10, 15); // Next 5 products for Furniture
        const eatablesPetsProducts = data.products.slice(15); // Remaining products

        // Append Beauty products
        beautyProducts.forEach(product => {
            const div = document.createElement("div");
            div.className = "product-card bg-gray-600 p-4 rounded shadow"; // Use existing CSS class for styling
            div.innerText = product.title; // Get the product title
            document.getElementById("beauty").append(div); // Append to Beauty section
        });

        // Append Furniture products
        furnitureProducts.forEach(product => {
            const div = document.createElement("div");
            div.className = "product-card bg-gray-600 p-4 rounded shadow"; // Use existing CSS class for styling
            div.innerText = product.title; // Get the product title
            document.getElementById("furniture").append(div); // Append to Furniture section
        });

        // Append Eatables and Pets products
        eatablesPetsProducts.forEach(product => {
            const div = document.createElement("div");
            div.className = "product-card bg-gray-600 p-4 rounded shadow"; // Use existing CSS class for styling
            div.innerText = product.title; // Get the product title
            document.getElementById("eatables-pets").append(div); // Append to Eatables and Pets section
        });

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();
