import { useState } from "react";

const RecipeAuthor = () => {
	let authorLink = "https://www.butterbeready.com/authentic-cajun-gumbo/";
	let authorPhoto =
		"https://www.butterbeready.com/wp-content/uploads/2020/06/9917620F-D68A-42FC-B0F5-A7FADE48CB1A-576x1024.jpg";
	let authorName = "Quin Liburd";

	return (
		<div>
			<img src={authorPhoto} alt="" style={{ objectFit: "contain", borderRadius: "50%" }} />
			<div>
				<h3>{authorName}</h3>
				<a href={authorLink}></a>
			</div>
		</div>
	);
};

const RecipeIngredients = () => {
	const ingredients = [
		"Chicken Thighs",
		"Andouille Sausage",
		"Chicken Broth",
		"Shrimp",
		"Cajun Seasoning",
	];
	return (
		<div>
			<h3>Recipe Ingredients</h3>
			<ul>
				<li>{ingredients[0]}</li>
				<li>{ingredients[1]}</li>
				<li>{ingredients[2]}</li>
				<li>{ingredients[3]}</li>
				<li>{ingredients[4]}</li>
			</ul>
		</div>
	);
};

const RecipeDescription = () => {
	return (
		<div>
			<div>
				<h1>Cajun Gumbo</h1>
				<p>Authentic Cajun Gumbo with Shrimp and Chicken</p>
			</div>
			<div className="recipePhotoBlock">
				<RecipeIngredients />
				<RecipeAuthor />
			</div>
		</div>
	);
};

const RecipePhoto = () => {
	return (
		<img
			src="https://www.butterbeready.com/wp-content/uploads/2023/04/DK6A1583-680x1020.jpg"
			alt="Cajun Gumbo"
			className="imageUpdates"
		/>
	);
};

export default function RecipeDisplay() {
	return (
		<div className="recipePhotoBlock">
			<RecipePhoto />
			<div>
				<RecipeDescription />
			</div>
		</div>
	);
}
