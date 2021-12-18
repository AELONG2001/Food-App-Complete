import React from 'react';
import BannerPopularFoodIMG from 'assets/images/banner_order-food.jpg';
import './styles.scss';

export default function BannerPopularFood() {
	return (
		<div
			className="banner_popular-food"
			style={{ backgroundImage: `url('${BannerPopularFoodIMG}')` }}
		></div>
	);
}
