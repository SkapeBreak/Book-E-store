import React, { useState, useEffect, createContext } from 'react';

export const appContext = createContext();

const AppContext = ({ children }) => {
	const [isDarkTheme, setIsDarkTheme] = useState(false);

	const toggleTheme = () => {
		setIsDarkTheme(!isDarkTheme);
	};

	const appStates = {
		isDarkTheme,
		toggleTheme,
	};

	return (
		<appContext.Provider value={appStates}>{children}</appContext.Provider>
	);
};

export default AppContext;
