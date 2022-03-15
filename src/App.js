import './App.css';
import Title from './components/Title';
import Search from './components/Search';
import NavBar from './components/NavBar';
import RecipeForm from './components/RecipeForm';
import RecipeContainer from './containers/RecipeContainer';

function App() {
  return (
    <>
      <Title />
      <Search />
      <NavBar />
      <RecipeForm />
      <RecipeContainer />
    </>
  );
}

export default App;
