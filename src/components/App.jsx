import './App.css';
import { Product } from './Product/Product';
import { Mailbox } from './Mailbox/Mailbox';
import { BookList } from './BooksList/BooksList';
import { Card } from './Card/Card';
import { Alert } from './Alert/Alert';
import { UserMenu } from './UserMenu/UserMenu';

const favouriteBooks = [
	{ id: 'id-1', name: 'JS for beginners' },
	{ id: 'id-2', name: 'React basics' },
	{ id: 'id-3', name: 'React Router overview' },
];

function App() {
	return (
		<div>
			<h1>Products</h1>

			<Product name='Tacos With Lime' price={10.99} />
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
			<Card>
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
			<UserMenu />
		</div>
	);
}

export default App;
