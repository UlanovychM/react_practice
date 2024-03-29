import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import { UserProvider } from './components/hooks/userContext';
import App from './components/App';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<UserProvider>
			<App />
		</UserProvider>
	</React.StrictMode>
);
