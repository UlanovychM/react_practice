import clsx from 'clsx';
import './Alert.module.css';

// Button.jsx
export const Button = ({ variant, children }) => {
	// Базові стилі кнопки з кількома варіантами відображення
	return <button className={clsx('button', variant)}>{children}</button>;
};

// LoginButton.jsx
export const LoginButton = () => {
	// Унікальна логіка кнопки логіна
	return <Button variant='primary'>Login</Button>;
};

// FollowButton.jsx
export const FollowButton = () => {
	// Унікальна логіка кнопки підписки
	return <Button variant='secondary'>Follow</Button>;
};
