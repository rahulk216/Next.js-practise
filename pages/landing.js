import React from 'react';
import styles from '../styles/Home.module.css';

const Landing = () => {
	return (
		<div>
			<Hero />
		</div>
	);
};

const Hero = () => {
	return (
		<div className={styles.hero}>
			<div className={styles.hero_img}>
			
				<img src='/images/bgimg.jpg' alt='' />
			</div>

			<div className={styles.hero_content}>
				<h1>LCODE TECHNOLOGIES</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
					veniam perferendis esse eum nam nesciunt dolores praesentium
					sequi minima quo!
				</p>
				<button>Contact Us</button>
			</div>
		</div>
	);
};
export default Landing;
