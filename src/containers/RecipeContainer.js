import React from 'react';

const RecipeContainer = () => {
    
    const cakes = [
        {
            cakeName: "Lemon Drizzle",
            ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
            rating: 5
        },
        {
            cakeName: "Tea Loaf",
            ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
            rating: 3
        },
        {
            cakeName: "Brownie",
            ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
            rating: 4
        },
        {
            cakeName: "Carrot Cake",
            ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
            rating: 5
        }
    ]

    const cakeList = cakes.map((cake) => {
        return (
            <div>
                <h3>{cake.cakeName}</h3>
                <ul>
                    Ingredients: {cake.ingredients.map(ingredient => <li>{ingredient}</li>)}
                </ul>
                <h6>Rating: {cake.rating}</h6>
                
            </div>
        )
    })
           

    return(
        <>
            {cakeList}
        </>
    )

}

export default RecipeContainer;