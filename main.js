// main.js
import { fetchRecipes } from "./api.js";  // Import fetchRecipes from api.js

// Display recipes in the UI
function displayRecipes(recipes) {
    const recipesSection = document.getElementById("recipes");
    recipesSection.innerHTML = "";  // Clear previous results

    if (recipes.length === 0) {
        recipesSection.innerHTML = "<p>No recipes found for the given ingredient.</p>";
        return;
    }

    recipes.forEach((recipe) => {
        const recipeElement = document.createElement("div");
        recipeElement.classList.add("recipe");
        recipeElement.innerHTML = `
            <h3>${recipe.name}</h3>
            <p><strong>Ingredients:</strong> ${recipe.ingredients.join(", ")}</p>
            <p><strong>Instructions:</strong> ${recipe.instructions}</p>
        `;
        recipesSection.appendChild(recipeElement);
    });
}

// Handle form submission
document.getElementById("search-form").addEventListener("submit", async (e) => {
    e.preventDefault();  // Prevent the form from submitting normally
    const ingredient = document.getElementById("ingredient-input").value.trim();
    if (ingredient) {
        try {
            const recipes = await fetchRecipes(ingredient);
            displayRecipes(recipes);
        } catch (error) {
            console.error(error);
            alert("Failed to fetch recipes. Please try again later.");
        }
    }
});
