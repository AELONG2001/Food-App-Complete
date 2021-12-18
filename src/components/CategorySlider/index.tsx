import { homeCategoryData } from 'constants/categorySliderInfo';

// material ui
import { Button, Container } from '@mui/material';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

// swiper js
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

// swiper scss
import 'swiper/swiper.scss';

import 'assets/styles/_typography.scss';
import './styles.scss';

// swiper modules
SwiperCore.use([Autoplay, Navigation]);

function CategorySlider() {
	return (
		<section className="home-category">
			<Container>
				<div className="home-category__container">
					<div className="primary-yellow-text">What we have?</div>
					<h2 className="primary-heading-text">Browse food category</h2>
					<div className="home-category__cards">
						<Swiper
							slidesPerView={2}
							loop
							loopFillGroupWithBlank={true}
							autoplay={{
								delay: 1800,
								disableOnInteraction: false,
							}}
							navigation={{
								prevEl: '.prev-btn',
								nextEl: '.next-btn',
							}}
							breakpoints={{
								600: {
									slidesPerView: 4,
								},
								960: {
									slidesPerView: 7,
								},
							}}
						>
							{homeCategoryData.map(({ img, name }, index) => (
								<SwiperSlide key={index}>
									<div className="home-category__card">
										<div className="home-category__card-img-wrapper">
											<img className="home-category__card-img" src={img} alt="Category card" />
										</div>
										<div className="home-category__card-description">{name}</div>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
						<Button className="prev-btn">
							<DoubleArrowIcon style={{ transform: 'rotate(180deg)' }} />
						</Button>
						<Button className="next-btn">
							<DoubleArrowIcon />
						</Button>
					</div>
				</div>
			</Container>
		</section>
	);
}

export default CategorySlider;
