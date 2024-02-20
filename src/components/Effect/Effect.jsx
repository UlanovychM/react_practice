import { useState, useEffect } from 'react';

// const Effect = () => {
// 	const [clicks, setClicks] = useState(0);

// 	// Оголошуємо ефект
// 	useEffect(() => {
// 		document.title = `You clicked ${clicks} times`;
// 	});

// 	return (
// 		<button onClick={() => setClicks(clicks + 1)}>
// 			You clicked {clicks} times
// 		</button>
// 	);
// };

const Effect = () => {
	const [clicks, setClicks] = useState(0);

	useEffect(() => {
		console.log('You can see me only once!');
	}, []);

	return (
		<button onClick={() => setClicks(clicks + 1)}>
			You clicked {clicks} times
		</button>
	);
};

export default Effect;
