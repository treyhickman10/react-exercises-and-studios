import recipedata from "./recipe.json";

function RecipeName() {
	return recipedata.map((props) => <h2>{props.name}</h2>);
}

export default RecipeName;

//import return the name of the recipe as a level 1 header
