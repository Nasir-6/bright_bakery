import React from 'react';
import Recipe from '../components/Recipe'

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
            <Recipe cake={cake}
                    key={cake.cakeName}/>
        )
    })
           

    return(
        <>
            {cakeList}
        </>
    )

}

export default RecipeContainer;