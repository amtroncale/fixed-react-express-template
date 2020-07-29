import React, { useState, useEffect, FC } from "react";

const App: FC = () =>
{
	const [name, setName] = useState("");

	useEffect(() =>
	{
		const controller = new AbortController();

		fetch("/api/hello", {
			signal: controller.signal
		})
			.then(result => result.json())
			.then((name: string) => setName (name));

		return (controller.abort);
	}, []);

	return (
		<main className="container my-5">
			<h1 className="text-primary text-center">Hello {name}!</h1>
		</main>
	);
};

export default App;