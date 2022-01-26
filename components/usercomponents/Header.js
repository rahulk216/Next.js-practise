import React from 'react';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';

const Header = () => {
	const [toggle, setToggle] = React.useState(false);
	// console.log(toggle)
	return (
		<div className={styles.headcont}>
			<div className={styles.logo}>
				<img src='/images/lcode-logo.png' alt='' />
			</div>
			<div className={styles.options}>
				<a href=''>Home</a>
				<a href=''>About</a>
				<a href=''>Products</a>
				<a href=''>Contact</a>
			</div>
			<div className={styles.hamburg} onClick={() => setToggle(!toggle)}>
				{toggle ? (
					<>
						<div className={styles.active}>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</div>
						<div className={styles.cont}>
							<div className={styles.flexc}>
								<Link className={styles.menubtn} href='/'> Home</Link>
								<Link className={styles.menubtn} href=''> About</Link>
								<Link className={styles.menubtn} href=''> Products</Link>
								<Link href='/contact'>Contact</Link>
							</div>
						</div>
					</>
				) : (
					<div>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				)}
			</div>
		</div>
	);
};

export default Header;
