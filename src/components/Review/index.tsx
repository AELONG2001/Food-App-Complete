import { Grid } from '@mui/material';
import Footer from 'components/Layout/Footer/Footer';
import Header from 'components/Layout/Header/Header';
import React from 'react';
import BannerReview from './components/BannerReview';
import ReviewContent from './components/ReviewContent';

export default function Review() {
	return (
		<>
			<Header />
			<BannerReview />
			<Grid container maxWidth="lg" sx={{ margin: '0 auto' }}>
				<Grid item>
					<ReviewContent />
				</Grid>
			</Grid>
			<Footer />
		</>
	);
}
