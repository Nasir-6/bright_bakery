import React from 'react';
import Recipe from '../components/Recipe'

const RecipeContainer = ({cakes}) => {
    
   

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