import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from '../components/usercomponents/Header';
import Footer from '../components/usercomponents/Footer';
import Layout from '../components/usercomponents/Layout';
import Landing from './Landing';

export default function Home() {
	return (
		<Landing />
	);
}

Home.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>;
};
