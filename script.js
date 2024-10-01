const API = "https://dummyjson.com/products";

async function fetchData() {
    try {
        const response = await fetch(API);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data?.products);

        for (let i = 0; i < data?.products?.length; i++) {
            const div = document.createElement("div");
            div.className = "product-card"; // Use existing CSS class for styling
            div.innerText = data.products[i].title; // Get the product title
            document.getElementById("main-cont").append(div); // Append to main container
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();
