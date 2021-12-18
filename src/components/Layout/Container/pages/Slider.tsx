// import Swiper core and required modules
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Button, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { sliderInfo } from 'constants/sliderInfo';
import React from 'react';
import { Link } from 'react-router-dom';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper-bundle.min.css';
import '../index.scss';

const useStyles = makeStyles({
	buttonOrder: {
		backgroundColor: '#ff514e !important',
		animation: 'slideWordButton 1.2s ease-in-out',
		width: '152px !important',
		borderRadius: '20px !important',
	},
});

export default function Slider() {
	const classes = useStyles();

	return (
		<Swiper
			// install Swiper modules
			modules={[Navigation, Pagination, Scrollbar, A11y]}
			spaceBetween={0}
			slidesPerView={1}
			navigation
			pagination={{ clickable: true }}
			allowTouchMove={false}
		>
			{sliderInfo.map((info, idx) => (
				<SwiperSlide key={idx}>
					<div
						className="slider__background"
						style={{ backgroundImage: `url('${info.img}')` }}
					></div>
					<Grid container sx={{ maxWidth: 1200, margin: '0 auto !important' }}>
						<div className="slider__content">
							<div className="slider__content-title">{info.title}</div>
							<div className="slider__content-desc">{info.desc}</div>
							<span className="slider__content-desc-sub">{info.subDesc}</span>
							<Link to="/popular-food">
								<Button variant="contained" className={classes.buttonOrder} size="large">
									<AddShoppingCartIcon />
									<Typography pl={0.6} variant="h5">
										Order Now
									</Typography>
								</Button>
							</Link>
						</div>
					</Grid>
				</SwiperSlide>
			))}
		</Swiper>
	);
}
