import { useId, useState } from 'react';
// const LoginForm = () => {
// 	const handleSubmit = evt => {
// 		evt.preventDefault();

// 		const form = evt.target;
// 		const { login, password } = form.elements;

// 		// Посилання на DOM-елементи
// 		console.log(login, password);

// 		// Значення полів
// 		console.log(login.value, password.value);

// 		// Скидаємо значення полів після відправки
// 		form.reset();
// 	};

// 	return (
// 		<form onSubmit={handleSubmit}>
// 			<input type='text' name='login' />
// 			<input type='password' name='password' />
// 			<button type='submit'>Login</button>
// 		</form>
// 	);
// };

// const LoginForm = ({ onSubmit }) => {
// 	const loginId = useId();
// 	const passwordId = useId();
// 	const handleSubmit = evt => {
// 		evt.preventDefault();

// 		const form = evt.target;
// 		const { login, password } = form.elements;

// 		// Викликаємо пропс onSubmit
// 		onSubmit({
// 			login: login.value,
// 			password: password.value,
// 		});

// 		form.reset();
// 	};

// 	return (
// 		<form onSubmit={handleSubmit}>
// 			<label htmlFor={loginId}>Login</label>
// 			<input type='text' name='login' id={loginId} />

// 			<label htmlFor={passwordId}>Password</label>
// 			<input type='password' name='password' id={passwordId} />
// 			<button type='submit'>Login</button>
// 		</form>
// 	);
// };

// const LoginForm = () => {
// 	const loginId = useId();
// 	const passwordId = useId();

// 	return (
// 		<form>
// 			<label htmlFor={loginId}>Login</label>
// 			<input type='text' name='login' id={loginId} />

// 			<label htmlFor={passwordId}>Password</label>
// 			<input type='password' name='password' id={passwordId} />

// 			<button type='submit'>Login</button>
// 		</form>
// 	);
// };

const LoginForm = () => {
	const [values, setValues] = useState({
		login: '',
		password: '',
	});

	const handleChange = evt => {
		setValues({
			...values,
			[evt.target.name]: evt.target.value,
		});
	};

	const handleSubmit = evt => {
		evt.preventDefault();

		// Значення полів
		console.log(values);

		// Очищаємо форму
		setValues({
			login: '',
			password: '',
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				name='login'
				value={values.login}
				onChange={handleChange}
			/>
			<input
				type='password'
				name='password'
				value={values.password}
				onChange={handleChange}
			/>
			<button type='submit'>Login</button>
		</form>
	);
};

export default LoginForm;
