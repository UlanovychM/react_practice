import './App.css';
import { Product } from './Product/Product';
import { Mailbox } from './Mailbox/Mailbox';
import { BookList } from './BooksList/BooksList';

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
		</div>
	);
}

export default App;
