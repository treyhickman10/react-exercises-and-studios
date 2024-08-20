import React from "react";
import styles from "./Description.module.css";

export const RecipeAuthor = () => {
	let authorLink, authorPhoto, authorName;
	authorLink = "https://www.butterbeready.com/authentic-cajun-gumbo/";
	authorPhoto =
		"https://www.butterbeready.com/wp-content/uploads/2020/06/9917620F-D68A-42FC-B0F5-A7FADE48CB1A-576x1024.jpg";
	authorName = "Quin Liburd";

	return (
		<div className={StyleSheet.recipeAuthorBlock}>
			<img src={authorPhoto} alt="Picture of Quin Liburd" className={styles.imageUpdates} />
			<div>
				<h3>{authorName}</h3>
				<a href={authorLink}>Blog Name</a>
			</div>
		</div>
	);
};

class RecipeDescription extends React.Component {
	render() {
		return (
			<div>
				<div>
					<h1>Authentic Cajun Gumbo</h1>
					<p>
						Look no further than this Authentic Cajun Gumbo recipe to satisfy your stomach, but also
						your soul. This 1-pot gumbo sings with an abundance of flavor, y’all. It starts with a
						deeply-rich roux base, sautéed aromatics, and tons of meaty goodness with chicken,
						andouille sausage, crab, and shrimp. This heartwarming staple is the epitome of comfort
						food! A perfect, cozy weeknight or special occasion meal!
					</p>
				</div>
				<RecipeAuthor />
			</div>
		);
	}
}

export default RecipeDescription;
