export default function BookList() {
	let pageTitle = "Book List";
	let book1 = "https://m.media-amazon.com/images/I/318bjQrmmUL._SY445_SX342_.jpg";
	let book2 = "https://m.media-amazon.com/images/I/41M7iFttsoL._SY445_SX342_.jpg";
	let book3 = "https://m.media-amazon.com/images/I/31XDWM65guL._SY445_SX342_.jpg";

	return (
		<div>
			<h3>{pageTitle}</h3>
			<img src={book1} alt="Code" />
			<img src={book2} alt="Source Code" />
			<img src={book3} alt="Meditations" />
		</div>
	);
}
