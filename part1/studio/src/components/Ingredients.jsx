import React from "react";
import styles from "./Ingredients.module.css";

export default function RecipeIngredients() {
	let ingredients = [
		"Chicken Thighs",
		"Andouille Sausage",
		"Chicken Broth",
		"Shrimp",
		"Cajun Seasoning",
	];

	return (
		<div>
			<h3>Recipe Ingredients</h3>
			<ul className={styles.ingredientList}>
				<li>{ingredients[0]}</li>
				<li>{ingredients[1]}</li>
				<li>{ingredients[2]}</li>
				<li>{ingredients[3]}</li>
				<li>{ingredients[4]}</li>
			</ul>
		</div>
	);
}
