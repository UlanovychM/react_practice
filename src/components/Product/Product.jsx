import PropTypes from 'prop-types';

// export const Product = props => {
// 	return (
// 		<>
// 			<h2>{props.name}</h2>
// 			<img src={props.imgUrl} alt={props.name} width='640' />
// 			<p>Price: {props.price} credits</p>
// 		</>
// 	);
// };

// export const Product = ({
// 	name,
// 	imgUrl = 'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
// 	price,
// }) => {
// 	return (
// 		<>
// 			<h2>{name}</h2>
// 			<img src={imgUrl} alt={name} width='640' />
// 			<p>Price: {price} credits</p>
// 		</>
// 	);
// };

export const Product = ({
	name,
	imgUrl = 'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
	price,
}) => (
	<div>
		<img src={imgUrl} alt={name} width='480' />
		<h2>{name}</h2>
		<p>Price: {price} credits</p>
	</div>
);

// Опис типів пропсів компонента
Product.propTypes = {
	name: PropTypes.string.isRequired,
	imgUrl: PropTypes.string,
	price: PropTypes.number.isRequired,
};

export default Product;
