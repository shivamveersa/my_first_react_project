function FirstComponent() {
	const a = 20;
	const b = 10;
	const output = a + b;

	const listOfNames = ["shivam", "rahul", "yash"];

	return (
		<>
			<ul>
				{listOfNames.map((name) => {
					return <li>{name}</li>;
				})}
			</ul>
		</>
	);
}

export default FirstComponent;
