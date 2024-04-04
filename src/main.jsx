import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import { UserProvider } from './components/hooks/userContext';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<UserProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</UserProvider>
	</React.StrictMode>
);
