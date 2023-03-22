import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Home } from './pages';
import AppContext from './contexts/appContext';
import './App.css';

function App() {
	const [isDarkTheme, setIsDarkTheme] = useState(false);

	const toggleTheme = () => {
		setIsDarkTheme(!isDarkTheme);
	};

	const shopButtonClickHandler = () => {
		// handle navigating to shop page
	};

	return (
		<>
			<AppContext>
				<Router>
					<Routes>
						<Route path='/' element={<Home />} />
					</Routes>
				</Router>
			</AppContext>
			<ToastContainer />
		</>
	);
}

export default App;
