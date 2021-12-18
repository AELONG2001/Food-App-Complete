import Container from 'components/Layout/Container/Container';
import Footer from 'components/Layout/Footer/Footer';
import Header from 'components/Layout/Header/Header';
import * as React from 'react';

export default function HomePage() {
	return (
		<div className="App">
			<Header />
			<Container />
			<Footer />
		</div>
	);
}
