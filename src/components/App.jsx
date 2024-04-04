import css from './App.css';
// import { useState, useEffect, useRef } from 'react';
// import { UserMenu } from './UserMenu/UserMenu';
// import { fetchArticlesWithTopic } from '../articles-api.js';
// import { useState, useEffect, forwardRef, useRef } from 'react';
// import { useToggle } from './hooks/useToggle.js';

// import ClickCounter from './ClickCounter/ClickCounter';
// import { Product } from './Product/Product';
// import { Mailbox } from './Mailbox/Mailbox';
// import { BookList } from './BooksList/BooksList';
// import { Card } from './Card/Card';
// import { Alert } from './Alert/Alert';

// import { CustomButton } from './CustomButton/CustomButton';

// import UpdateX from './UpdateX/UpdateX';
// import StateComponent from './StateComponent/StateComponent';

// const favouriteBooks = [
// 	{ id: 'id-1', name: 'JS for beginners' },
// 	{ id: 'id-2', name: 'React basics' },
// 	{ id: 'id-3', name: 'React Router overview' },
// ];

// import Effect from './Effect/Effect';
// import Modal from './Modal/Modal';
// import SearchBar from './SearchBar/SearchBar';

// const ClickCounter = ({ value, onUpdate }) => {
// 	return <button onClick={onUpdate}>Current: {value}</button>;
// };

// function App() {
// 	// const handleClick = () => {
// 	// 	alert("I'm a button!");
// 	// };

// 	// const handleClick2 = evt => {
// 	// 	console.log(evt);
// 	// };

// 	// const [clicks, setClicks] = useState(0);

// 	// const handleClick3 = () => {
// 	// 	setClicks(clicks + 1);
// 	// };

// 	const [clicks, setClicks] = useState(0);
// 	const [isOpen, setIsOpen] = useState(false);

// 	const handleClick = () => {
// 		setClicks(clicks + 1);
// 	};
// 	const handleLogin = userData => {
// 		// Виконуємо необхідні операції з даними
// 		console.log(userData);
// 	};

// 	return (
// 		<div>
// 			<ClickCounter value={clicks} onUpdate={handleClick} />
// 			<ClickCounter value={clicks} onUpdate={handleClick} />
// 			<Effect />
// 			<div>
// 				<button onClick={() => setIsOpen(!isOpen)}>
// 					{isOpen ? 'Close' : 'Open'}
// 				</button>
// 				{isOpen && <Modal />}
// 			</div>
// 			{/*
// 			<LoginForm onSubmit={handleLogin} /> */}
// 			<SearchBar />
//
// 			{/* <LangSwitcher /> */}
// 			{/* <UpdateX /> */}
// 			{/* <ClickCounter />
// 			<ClickCounter /> */}
// 			{/* <CustomButton message='Playing music!'>Play some music</CustomButton>
// 			<StateComponent /> */}
// 			{/* <button onClick={handleClick}>First button</button>
// 			<button onClick={evt => console.log(evt)}>Second button</button>
// 			<button onClick={handleClick2}>First button</button>
// 			<button onClick={handleClick3}>Current: {clicks}</button>
// 			<h1>Products</h1> */}
// 			{/* <Product name='Tacos With Lime' price={10.99} />
// 			<Product
// 				name='Fries and Burger'
// 				imgUrl='https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640'
// 				price={14.29}
// 			/>
// 			<h1>Mailbox</h1>
// 			<Mailbox />
// 			<h1>Books of the week</h1>
// 			<BookList books={favouriteBooks} />
// 			{/* <Card text='Message as a text prop' /> */}
// 			{/*<Card>
// 				<h1>Card title</h1>
// 				<p>Text between opening and closing tag</p>
// 			</Card>
// 			<h1>Styles Allert</h1>
// 			<Alert variant='info'>
// 				Would you like to browse our recommended products?
// 			</Alert>
// 			<Alert variant='error'>
// 				There was an error during your last transaction
// 			</Alert>
// 			<Alert variant='success'>
// 				Payment received, thank you for your purchase
// 			</Alert>
// 			<Alert variant='warning'>
// 				Please update your profile contact information
// 			</Alert>
// 			<h1>UserMenu</h1>
// 			<UserMenu /> */}
// 		</div>
// 	);
// }

// import LangSwitcher from './LangSwitcher/LangSwitcher';
// import RadioButton from './RadioButton/RadioButton';
// import ChekboxSwitcher from './ChekboxSwitcher/ChekboxSwitcher';
// import LoginForm from './LoginForm/LoginForm';
// import FeedbackForm from './FeedbackForm/FeedbackForm';
// import ArticleList from './ArticleList/ArticleList';
// import FilterPlanet from './FiletrPlanet/FiletrPlanet.jsx';
// import RefTest from './RefTest/RefTest.jsx';
// import Player from './Player/Player.jsx';

// // const CustomButton = forwardRef((props, ref) => (
// // 	<button ref={ref}>{props.children}</button>
// // ));

// const App = () => {
// 	const [lang, setLang] = useState('uk');
// 	const [coffeeSize, setCoffeeSize] = useState('sm');
// 	const [hasAccepted, setHasAccepted] = useState(false);
// 	const [articles, setArticles] = useState([]);
// 	const [loading, setLoading] = useState(false);
// 	const [error, setError] = useState(false);

// 	// const btnRef = useRef();

// 	// useEffect(() => btnRef.current.focus(), []);

// 	useEffect(() => {
// 		// 1. Оголошуємо асинхронну функцію
// 		async function fetchArticles() {
// 			try {
// 				// 1. Встановлюємо індикатор в true перед запитом
// 				setLoading(true);
// 				setError(false);
// 				const data = await fetchArticlesWithTopic('react');
// 				setArticles(data);
// 			} catch (error) {
// 				// Тут будемо обробляти помилку
// 				setError(true);
// 			} finally {
// 				// 2. Встановлюємо індикатор в false після запиту
// 				setLoading(false);
// 			}
// 		}

// 		// 2. Викликаємо її одразу після оголошення
// 		fetchArticles();
// 	}, []);

// 	return (
// 		<>
// 			<UserMenu />
// 			<Player source='http://media.w3.org/2010/05/sintel/trailer.mp4' />
// 			{/* <CustomButton ref={btnRef}>Button with forwarded ref</CustomButton> */}

// 			<RefTest />
// 			<h1>Latest articles</h1>
// 			{loading && <p>Loading data, please wait...</p>}
// 			{error && (
// 				<p>Whoops, something went wrong! Please try reloading this page!</p>
// 			)}
// 			{articles.length > 0 && <ArticleList items={articles} />}
// 			<p>Selected language: {lang}</p>
// 			<LangSwitcher value={lang} onSelect={setLang} />
// 			<RadioButton value={coffeeSize} onSelect={setCoffeeSize} />
// 			<ChekboxSwitcher value={hasAccepted} onSelect={setHasAccepted} />
// 			<LoginForm />
// 			<FeedbackForm />
// 			<FilterPlanet />
// 		</>
// 	);
// };

import { useParams } from 'react-router-dom';

import { Routes, Route, NavLink, Link } from 'react-router-dom';
import Home from 'path/to/pages/Home';
import About from 'path/to/pages/About';
import clsx from 'clsx';
import { useSearchParams } from 'react-router-dom';

const Products = () => {
	const [searchParams] = useSearchParams();
	const name = searchParams.get('name');
	const color = searchParams.get('color');
	const maxPrice = searchParams.get('maxPrice');

	return (
		<div>
			<p>Name: {name}</p>
			<p>Color: {color}</p>
			<p>Maximum price: {maxPrice}</p>
		</div>
	);
};

const [searchParams] = useSearchParams();
const params = useMemo(
	() => Object.fromEntries([...searchParams]),
	[searchParams]
);
const { name, maxPrice, inStock } = params;

import NotFound from 'path/to/pages/NotFound';

const buildLinkClass = ({ isActive }) => {
	return clsx(css.link, isActive && css.active);
};
const ProductDetails = () => {
	const { productId } = useParams();
	return <div>Now showing product with id - {productId}</div>;
};

const App = () => {
	return (
		<div>
			<nav>
				<Link to='/'>Home</Link>
				<Link to='/about'>About</Link>
			</nav>
			<nav className={css.nav}>
				<NavLink to='/' className={buildLinkClass}>
					Home
				</NavLink>
				<NavLink to='/about' className={buildLinkClass}>
					About
				</NavLink>
				<NavLink to='/products' className={buildLinkClass}>
					Products
				</NavLink>
			</nav>

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />

				<Route path='*' element={<NotFound />} />
			</Routes>
			<div>
				<Products />
			</div>
		</div>
	);
};

export default App;
