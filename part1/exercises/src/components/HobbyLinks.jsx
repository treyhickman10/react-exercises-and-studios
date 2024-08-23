export default function HobbyLinks() {
	let hobbyLinks = ["https://www.pcgamer.com/", "https://www.mlb.com/"];

	return (
		<div>
			<a href={hobbyLinks[0]}>pcgamer</a>
			<br />
			<a href={hobbyLinks[1]}>MLB</a>
		</div>
	);
}
