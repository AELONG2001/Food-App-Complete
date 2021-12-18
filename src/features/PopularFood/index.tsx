import Footer from 'components/Layout/Footer/Footer';
import Header from 'components/Layout/Header/Header';
import ShopFood from 'features/ShopFood/index';
import React from 'react';
import BannerPopularFood from './pages/BannerPopularFood/BannerPopularFood';

export default function PopularFood() {
	return (
		<div>
			<Header />
			<BannerPopularFood />
			<div style={{ padding: '60px 0' }}>
				<ShopFood />
			</div>
			<Footer />
		</div>
	);
}
