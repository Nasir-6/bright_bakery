import React from 'react'

const Recipe = ({ cake }) => {
  return (
    <div>
      <h3>{cake.cakeName}</h3>
      <p>Ingredients:</p>
      <ul>
        {cake.ingredients.map((ingredient) => {
          
          return(
                <li>{ingredient}</li>
          );

          })
        }
      </ul>
      <h6>Rating: {cake.rating}</h6>
    </div>
  );
};

export default Recipe;