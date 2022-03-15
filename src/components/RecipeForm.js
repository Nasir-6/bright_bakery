
const RecipeForm = () => {
    return(
        <>
            <form>
                <label for="fname">Cake name:</label>
                <input type="text" id="cakename" name="cakename" />
                <label for="ingredients">Ingredients:</label>
                <input type="text" id="ingredients" name="ingredients" />
            </form>
        </>
    )
}   

export default RecipeForm;