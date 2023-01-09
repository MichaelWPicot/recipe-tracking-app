import React from "react";


function Recipe({index, recipeObj, deleteHandler}) {
  
    // TODO: Display the list of recipes using the structure of table that is provided.
    // TODO: Create at least one additional component that is used by this component.
    // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
    return (
        <tr key={index}>
            <td className="content_td"><p>{(recipeObj.name)}</p></td>
            <td className="content_td"><p>{(recipeObj.cuisine)}</p></td>
            <td> <img className="photo" src={recipeObj.photo} alt="Delicious Meal" /></td>
            <td className="content_td"><p>{(recipeObj.ingredients)}</p></td>
            <td className="content_td"><p>{(recipeObj.preparation)}</p></td>
            <td><button id={index} name="delete" onClick={deleteHandler}>Delete</button></td>
        </tr>
    );
  }
  
  export default Recipe;
  