import React, { useContext } from 'react';
import './home.css';
import { Hero } from '../../sections';
import { appContext } from '../../contexts/appContext';

export default function Home() {
	const { isDarkTheme, toggleTheme } = useContext(appContext);
	return (
		<div className={`app ${isDarkTheme ? 'dark' : 'light'}`}>
			<Hero />
		</div>
	);
}
