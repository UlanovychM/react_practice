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

// const Effect = () => {
// 	const [clicks, setClicks] = useState(0);

// 	useEffect(() => {
// 		console.log('You can see me only once!');
// 	}, []);

// 	return (
// 		<button onClick={() => setClicks(clicks + 1)}>
// 			You clicked {clicks} times
// 		</button>
// 	);
// };

// export default Effect;

// const Effect = () => {
// 	const [clicks, setClicks] = useState(0);

// 	useEffect(() => {
// 		window.localStorage.setItem('saved-clicks', clicks);
// 	}, [clicks]);

// 	return (
// 		<div>
// 			<button onClick={() => setClicks(clicks + 1)}>
// 				You clicked {clicks} times
// 			</button>
// 			<button onClick={() => setClicks(0)}>Reset</button>
// 		</div>
// 	);
// };

// export default Effect;

// const [obj, setObj] = useState(() => {
// 	// Зчитуємо значення за ключем
// 	const savedObject = window.localStorage.getItem('key');

// 	// Якщо там щось є, парсимо і повертаємо
// 	// це значення як початкове значення стану
// 	if (savedObject !== null) {
// 		return JSON.parse(savedObject);
// 	}

// 	// У протилежному випадку повертаємо
// 	// яке-небудь значення за замовчуванням
// 	return {};
// });

// const Effect = () => {
// 	const [clicks, setClicks] = useState(() => {
// 		// Зчитуємо значення за ключем
// 		const savedClicks = window.localStorage.getItem('saved-clicks');

// 		// Якщо там щось є, повертаємо це
// 		// значення як початкове значення стану
// 		if (savedClicks !== null) {
// 			return savedClicks;
// 		}

// 		// У протилежному випадку повертаємо
// 		// яке-небудь значення за замовчуванням
// 		return 0;
// 	});

// 	useEffect(() => {
// 		window.localStorage.setItem('saved-clicks', clicks);
// 	}, [clicks]);

// 	return (
// 		<div>
// 			<button onClick={() => setClicks(clicks + 1)}>
// 				You clicked {clicks} times
// 			</button>
// 			<button onClick={() => setClicks(0)}>Reset</button>
// 		</div>
// 	);
// };

// export default Effect;

const Effect = () => {
	const [clicks, setClicks] = useState(() => {
		const savedClicks = window.localStorage.getItem('saved-clicks');
		if (savedClicks !== null) {
			return savedClicks;
		}
		return 0;
	});

	useEffect(() => {
		window.localStorage.setItem('saved-clicks', clicks);
	}, [clicks]);

	return (
		<div>
			<button onClick={() => setClicks(clicks + 1)}>
				You clicked {clicks} times
			</button>
			<button onClick={() => setClicks(0)}>Reset</button>
		</div>
	);
};

export default Effect;
