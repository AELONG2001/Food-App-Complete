import React from 'react';
import { useAppSelector } from 'app/hooks';
import { selectFoodList } from 'features/ShopFood/shopFoodSlice';
import { Grid } from '@mui/material';
import DetailImage from './components/DetailImage/DetailImage';
import DetailInfo from './components/DetailInfo/DetailInfo';
import DetailTab from './components/DetailTab';
import DetailRelated from './components/DetailRelated/DetailRelated';

export interface ShopFoodByIdListProps {
	id?: string;
}

export default function ShopFoodByIdList({ id }: ShopFoodByIdListProps) {
	const listFood = useAppSelector(selectFoodList);

	return (
		<div style={{ padding: '50px 0', overflow: 'hidden' }}>
			<Grid container maxWidth="lg" style={{ margin: '0 auto' }}>
				<Grid item xs={12} md={6}>
					<DetailImage id={id} listFood={listFood} />
				</Grid>
				<Grid item xs={12} md={6}>
					<DetailInfo id={id} listFood={listFood} />
				</Grid>
				<DetailTab />
				<DetailRelated id={id} />
			</Grid>
		</div>
	);
}
