import './App.css';
import RecipeList from './components/RecipeList';

function App() {
  return (
    <div>
      <RecipeList recipes={sampleRecipes} />
    </div>
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions:
      '1. Put salt on Chicken\n2. Cook the Chicken\n3. Eat the Chicken',  
  },
  {
    id: 2,
    name: 'Plain Pork',
    servings: 5,
    cookTime: '0:45',
    instructions:
      '1. Put paprika on Pork\n2. Cook the Pork\n3. Eat the Pork',  
  },
];

export default App;
