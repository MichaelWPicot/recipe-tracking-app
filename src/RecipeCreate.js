import React, { useState } from "react";

function RecipeCreate({createHandler}) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const [recipe, setRecipe] = useState({
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  });
  const recipeChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    createHandler({
      name: recipe.name,
      cuisine: recipe.cuisine,
      photo: recipe.photo,
      ingredients: recipe.ingredients,
      preparation: recipe.preparation,
    });
    setRecipe({
      name: "",
      cuisine: "",
      photo: "",
      ingredients: "",
      preparation: "",
    })
  };
  return (
    <form name="create" onSubmit={submitHandler}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                name="name"
                placeholder="Name"
                onChange={recipeChange}
                value={recipe.name}
              />
            </td>
            <td>
              <input
                name="cuisine"
                placeholder="Cuisine"
                onChange={recipeChange}
                value={recipe.cuisine}
              />
            </td>
            <td>
              <input
                name="photo"
                placeholder="URL"
                type="URL"
                onChange={recipeChange}
                value={recipe.photo}
              />
            </td>
            <td>
              <textarea
                name="ingredients"
                placeholder="Ingredients"
                onChange={recipeChange}
                value={recipe.ingredients}
              />
            </td>
            <td>
              <textarea
                name="preparation"
                placeholder="Preparation"
                onChange={recipeChange}
                value={recipe.preparation}
              />
            </td>
            <td>
              <button type="submit"  value="Submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
