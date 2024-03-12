import { HiUser } from 'react-icons/hi';
import { useUser } from '../hooks/userContext';

// export const UserMenu = () => {
// 	const { username } = useUser();

// 	return (
// 		<div>
// 			{/* <p>
// 				<HiUser className='my-icon' size='24' /> {name}
// 			</p> */}
// 			<p>Welcome, {username}!</p>
// 			<button>Log out</button>
// 		</div>
// 	);
// };

export const UserMenu = () => {
	const { isLoggedIn, username, logOut, logIn } = useUser();

	return (
		<div>
			{isLoggedIn ? (
				<>
					<p>{username}</p>
					<button onClick={logOut}>Log out</button>
				</>
			) : (
				<button onClick={logIn}>Log in</button>
			)}
		</div>
	);
};
