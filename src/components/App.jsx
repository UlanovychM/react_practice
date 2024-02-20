import './App.css';
// import ClickCounter from './ClickCounter/ClickCounter';
// import { Product } from './Product/Product';
// import { Mailbox } from './Mailbox/Mailbox';
// import { BookList } from './BooksList/BooksList';
// import { Card } from './Card/Card';
// import { Alert } from './Alert/Alert';
// import { UserMenu } from './UserMenu/UserMenu';
// import { CustomButton } from './CustomButton/CustomButton';
import { useState } from 'react';
// import UpdateX from './UpdateX/UpdateX';
// import StateComponent from './StateComponent/StateComponent';

// const favouriteBooks = [
// 	{ id: 'id-1', name: 'JS for beginners' },
// 	{ id: 'id-2', name: 'React basics' },
// 	{ id: 'id-3', name: 'React Router overview' },
// ];

import Effect from './Effect/Effect';
import Modal from './Modal/Modal';

const ClickCounter = ({ value, onUpdate }) => {
	return <button onClick={onUpdate}>Current: {value}</button>;
};

function App() {
	// const handleClick = () => {
	// 	alert("I'm a button!");
	// };

	// const handleClick2 = evt => {
	// 	console.log(evt);
	// };

	// const [clicks, setClicks] = useState(0);

	// const handleClick3 = () => {
	// 	setClicks(clicks + 1);
	// };

	const [clicks, setClicks] = useState(0);
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setClicks(clicks + 1);
	};

	return (
		<div>
			<ClickCounter value={clicks} onUpdate={handleClick} />
			<ClickCounter value={clicks} onUpdate={handleClick} />
			<Effect />

			<div>
				<button onClick={() => setIsOpen(!isOpen)}>
					{isOpen ? 'Close' : 'Open'}
				</button>
				{isOpen && <Modal />}
			</div>
			{/* <UpdateX /> */}
			{/* <ClickCounter />
			<ClickCounter /> */}
			{/* <CustomButton message='Playing music!'>Play some music</CustomButton>
			<StateComponent /> */}
			{/* <button onClick={handleClick}>First button</button>
			<button onClick={evt => console.log(evt)}>Second button</button>
			<button onClick={handleClick2}>First button</button>
			<button onClick={handleClick3}>Current: {clicks}</button>
			<h1>Products</h1> */}

			{/* <Product name='Tacos With Lime' price={10.99} />
			<Product
				name='Fries and Burger'
				imgUrl='https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640'
				price={14.29}
			/>
			<h1>Mailbox</h1>
			<Mailbox />
			<h1>Books of the week</h1>
			<BookList books={favouriteBooks} />
			{/* <Card text='Message as a text prop' /> */}
			{/*<Card>
				<h1>Card title</h1>
				<p>Text between opening and closing tag</p>
			</Card>
			<h1>Styles Allert</h1>
			<Alert variant='info'>
				Would you like to browse our recommended products?
			</Alert>
			<Alert variant='error'>
				There was an error during your last transaction
			</Alert>
			<Alert variant='success'>
				Payment received, thank you for your purchase
			</Alert>
			<Alert variant='warning'>
				Please update your profile contact information
			</Alert>
			<h1>UserMenu</h1>
			<UserMenu /> */}
		</div>
	);
}

export default App;
