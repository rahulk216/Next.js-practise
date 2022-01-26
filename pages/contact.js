import React from 'react';
import Layout from '../components/usercomponents/Layout';

export default function Contact() {
	return (
		/** Your content */
		<div>
			<h1>Contact SCreen</h1>
		</div>
	);
}

Contact.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>;
};
