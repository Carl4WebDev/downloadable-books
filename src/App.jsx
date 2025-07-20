import React from "react";
import "./App.css";

const recipes = [
  {
    name: "Spaghetti Carbonara",
    description: "A creamy pasta dish with eggs, cheese, bacon, and pepper.",
    ingredients: ["Spaghetti", "Eggs", "Parmesan", "Bacon", "Black Pepper"],
  },
  {
    name: "Chicken Adobo",
    description:
      "A Filipino dish with soy sauce, vinegar, garlic, and chicken.",
    ingredients: ["Chicken", "Soy Sauce", "Vinegar", "Garlic", "Bay Leaves"],
  },
  {
    name: "Pancakes",
    description: "Fluffy breakfast pancakes perfect with syrup.",
    ingredients: ["Flour", "Milk", "Eggs", "Sugar", "Baking Powder"],
  },
];
//hello
function App() {
  return (
    <div className="container">
      <h1 className="heading">🍽️ My Favorite Recipes</h1>
      <div className="recipe-list">
        {recipes.map((recipe, index) => (
          <div className="recipe-card" key={index}>
            <h2>{recipe.name}</h2>
            <p>{recipe.description}</p>
            <h4>Ingredients:</h4>
            <ul>
              {recipe.ingredients.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
