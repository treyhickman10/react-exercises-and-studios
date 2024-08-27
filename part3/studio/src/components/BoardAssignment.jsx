import { useState } from "react";

export default function BoardAssignment() {
	const [boardName, setBoardName] = useState("no boards yet!");
	const boards = [
		{
			label: "Cajun",
			value: 1,
		},
		{
			label: "Spicy",
			value: 2,
		},
		{
			label: "Dinners",
			value: 3,
		},
	];

	const handleChange = (event) => {
		setBoardName(event.target.value);
	};

	return (
		<div style={{ paddingTop: "50px" }}>
			<label>Save to Board: </label>
			<select value={boardName} onChange={handleChange}>
				{boards.map((data) => (
					<option value={data.value}>{data.label}</option>
				))}
			</select>

			<p>Saved to {boardName}!</p>
		</div>
	);
}
