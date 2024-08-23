import recipedata from "./recipe.json";

function IngredientList() {
	const ingredientList = recipedata.map((obj) => obj.ingredients);
	console.log(ingredientList);
	console.log(ingredientList[0]);

	return (
		<div>
			<h3>Ingredients</h3>
			<ul>
				{ingredientList.map((props) => (
					<li> {props[0]} </li>
				))}
			</ul>
		</div>
	);
}

export default IngredientList;

//import json file for the data
//use a nested map to get inside the inner array
