import React, { useContext } from 'react';
import './hero.css';
import { appContext } from '../../contexts/appContext';

export default function Hero() {
	const { isDarkTheme, toggleTheme } = useContext(appContext);
	return (
		<div>
			<header>
				<h1>Explore the Great Outdoors</h1>
			</header>
			<div className='content' style={{ width: '50%' }}>
				<p>
					Shop our wide selection of hiking footwear and clothing to prepare for
					your next adventure. Whether you're a seasoned hiker or just starting
					out, we have the gear you need to conquer any trail.
				</p>
				{/* <img
					src='https://example.com/hiking-gear.jpg'
					alt='Hiking gear'
					className='hero-image'
				/> */}
				<div className='call-to-action'>
					<button
						className={isDarkTheme ? 'light' : 'dark'}
						onClick={toggleTheme}
					>
						Shop
					</button>
				</div>
			</div>
		</div>
	);
}
