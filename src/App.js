import './App.css';
import {useState} from 'react'
import Title from './components/Title';
import Search from './components/Search';
import NavBar from './components/NavBar';
import RecipeForm from './components/RecipeForm';
import RecipeContainer from './containers/RecipeContainer';

function App() {

  const cakes = [
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
  ];

  return (
    <>
      <Title />
      <Search />
      <NavBar />
      <RecipeForm />
      <RecipeContainer cakes={cakes} />
    </>
  );
}

export default App;
