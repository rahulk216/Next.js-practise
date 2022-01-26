import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from '../../styles/Home.module.css';

const Layout = (props) => {
	return (
		<div>
			<Header />
			<main className={styles.main}>{props.children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
