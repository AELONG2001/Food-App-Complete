import Footer from 'components/Layout/Footer/Footer';
import Header from 'components/Layout/Header/Header';
import BannerPopularFood from 'features/PopularFood/pages/BannerPopularFood/BannerPopularFood';
import React from 'react';
import { useParams } from 'react-router-dom';
import ShopFoodByIdList from './pages/ShopFoodByIdList';

export default function ShowFoodById() {
	const { id } = useParams<string>();

	return (
		<div>
			<Header />
			<BannerPopularFood />
			<ShopFoodByIdList id={id} />
			<Footer />
		</div>
	);
}
