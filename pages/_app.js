import '../styles/globals.css';
import Layout from '../components/usercomponents/Layout';

export default function MyApp({ Component, pageProps }) {
	// Use the layout defined at the page level, if available
	const getLayout = Component.getLayout || ((page) => page);

	return getLayout(<Component {...pageProps} />);
}
