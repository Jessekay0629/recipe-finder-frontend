// api.js

const apiUrl = "http://localhost:3000/api/recipes";  // Backend API URL

// Function to fetch recipes based on the ingredient
async function fetchRecipes(ingredient) {
    try {
        const response = await fetch(`${apiUrl}/search?ingredient=${ingredient}`);
        const recipes = await response.json();
        return recipes;
    } catch (error) {
        console.error("Error fetching recipes:", error);
        throw new Error("Failed to fetch recipes");
    }
}

export { fetchRecipes };
