import recipedata from "./recipe.json";

function RecipeImage() {
	return recipedata.map((props) => (
		<div>
			<img src={props.recipeImage} className="recipeImage"></img>
		</div>
	));
}

export default RecipeImage;

//import json file for the data
//apply css for className recipeImage
