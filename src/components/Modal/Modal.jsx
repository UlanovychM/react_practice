import { useEffect } from 'react';
import { useToggle } from '../hooks/useToggle';

const Modal = () => {
	const { isOpen, open, close } = useToggle();
	useEffect(() => {
		// Зберігаємо ідентифікатор інтервалу в змінну
		const intervalId = setInterval(() => {
			console.log(`Interval - ${Date.now()}`);
		}, 2000);

		return () => {
			// Очищаємо інтервал за його ідентифікатором
			clearInterval(intervalId);
		};
	}, []);

	return (
		<div>
			Modal <button onClick={open}>Open modal</button>
			<Modal isOpen={isOpen} onClose={close} />
		</div>
	);
};

export default Modal;
