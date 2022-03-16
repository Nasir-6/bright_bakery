import {useState} from 'react'

const RecipeForm = ({handleCakeSubmit}) => {

    // Set all states to empty at start
    const [cakeName, setCakeName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [rating, setRating] = useState("");

    // create onchange event handlers!!
    const handleCakeNameChange = (event) => {
        setCakeName(event.target.value);
    }

    const handleIngredientsChange = (event) => {
        setIngredients(event.target.value);
    }

    const handleRatingChange = (event) => {
        setRating(event.target.value);
    }

    // Form submit handler
    const handleFormSubmit = (event) => {
        event.preventDefault();
        //validate inputs (if empty just exits don't submit or do anything)
        if(!cakeName || !ingredients || !rating){
            return
        }

        // Now update the cake with new cake from input!!
        handleCakeSubmit({
            cakeName: cakeName,
            ingredients: [ingredients],
            rating: rating
        })



        // Lastly reset all input states
        setCakeName("")
        setIngredients("")
        setRating("")
    }

    return(
        <>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="fname">Cake name:</label>
                <input type="text" id="cakename" name="cakename" value={cakeName} onChange={handleCakeNameChange} />

                <label htmlFor="ingredients">Ingredients:</label>
                <input type="text" id="ingredients" name="ingredients" value={ingredients} onChange={handleIngredientsChange} />

                <label htmlFor="rating">Rating:</label>
                <input type="text" id="rating" name="rating" value={rating} onChange={handleRatingChange}/>

                <input type="submit" value="Post" />
            </form>
        </>
    )
}   

export default RecipeForm;