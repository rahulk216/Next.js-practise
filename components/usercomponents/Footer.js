import React from 'react';
import styles from '../../styles/Home.module.css';

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.footer_grid}>
					<div className={styles.footer_grid_item}>
						<Contact />
					</div>
					<div className={styles.footer_grid_item}>
						<Company />
					</div>
					<div className={styles.footer_grid_item}>
						<Products />
					</div>
				</div>
			</div>
		</div>
	);
};

function Contact() {
	return (
		<div>
			<h3 className={styles.footer_title}>LCode Technologies Pvt. Ltd.</h3>
			<ul className={styles.footer_content}>
				<li className={styles.location_data}>
					<h4>Location:</h4>
					<div>
						<p>Development centers</p>
						<p>Support Zones</p>
					</div>
				</li>
				<li className={`${styles.location_data} ${styles.footer_content}`}>
					<h4>Phone:</h4>
					<div>
						<p>(+91)9876787656</p>
						<p>(+91)9876787656</p>
					</div>
				</li>
				<li className={`${styles.location_data} ${styles.footer_content}`}>
					<h4>Email:</h4>
					<div>
						<p>rahulkakkadan216@gmail.com</p>
					</div>
				</li>
				<li className={`${styles.location_data} ${styles.footer_content}`}>
					<h4>Follow us:</h4>
					<div>
						<p>Hello</p>
					</div>
				</li>
			</ul>
		</div>
	);
}

function Company() {
	return (
		<div>
			<h3 className={styles.footer_title}>Company</h3>
			<ul>
				<li className={`${styles.location_data} ${styles.footer_content}`}>
					<h4>About LCode:</h4>
					<div>
						<p>Products & solutions</p>
					</div>
				</li>
				<li className={`${styles.location_data} ${styles.footer_content}`}>
					<h4>Leadership:</h4>
					<div>
						<p>Services</p>
					</div>
				</li>
				<li className={`${styles.location_data} ${styles.footer_content}`}>
					<h4>Career:</h4>
					<div>
						<p>Contact us</p>
					</div>
				</li>
			</ul>
		</div>
	);
}

function Products() {
	return (
		<div>
			<h3 className={styles.footer_title}>Products</h3>
			<div className={styles.product_content}>
				<div className={styles.product_content_list}>
					<p>product</p>
					<p>product</p>
					<p>product</p>
					<p>product</p>
					<p>product</p>
				</div>
				<div className={styles.product_content_list}>
					<p>product</p>
					<p>product</p>
					<p>product</p>
					<p>product</p>
					<p>product</p>
				</div>
			</div>
		</div>
	);
}
export default Footer;
