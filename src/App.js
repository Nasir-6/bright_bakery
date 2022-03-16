import './App.css';
import {useState} from 'react'
import Title from './components/Title';
import Search from './components/Search';
import NavBar from './components/NavBar';
import RecipeForm from './components/RecipeForm';
import RecipeContainer from './containers/RecipeContainer';

function App() {

  const [cakes, setCakes] = useState(
    [
    {
      cakeName: "Lemon Drizzle",
      ingredients: [
        "eggs",
        "butter",
        "lemon  zest",
        "sugar",
        "self-raising flour",
      ],
      rating: 5,
    },
    {
      cakeName: "Tea Loaf",
      ingredients: [
        "eggs",
        "oil",
        "dried fruit",
        "sugar",
        "self-raising flour",
        "strong tea",
      ],
      rating: 3,
    },
    {
      cakeName: "Brownie",
      ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
      rating: 4,
    },
    {
      cakeName: "Carrot Cake",
      ingredients: [
        "carrots",
        "walnuts",
        "oil",
        "cream cheese",
        "flour",
        "sugar",
      ],
      rating: 5,
    },
  ]
  );

  // create an update cake state hook to be passed down as a prop to form!! 
  const addCake = (submittedCake) => {
    const updatedCakes = [...cakes, submittedCake];
    setCakes(updatedCakes);
  }

  return (
    <>
      <Title />
      <Search />
      <NavBar />
      <RecipeForm handleCakeSubmit={(cake) => addCake(cake)}/>
      <RecipeContainer cakes={cakes} />
    </>
  );
}

export default App;
