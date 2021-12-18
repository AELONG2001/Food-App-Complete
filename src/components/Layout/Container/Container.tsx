import CategorySlider from 'components/CategorySlider';
import HomeWork from 'features/HomeWork';
import ShopFood from 'features/ShopFood';
import React from 'react';
import Slider from './pages/Slider';

export interface ContainerProps {}

export default function Container(props: ContainerProps) {
	return (
		<div>
			<Slider />
			<HomeWork />
			<CategorySlider />
			<ShopFood />
		</div>
	);
}
