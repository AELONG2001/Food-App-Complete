import React from 'react';
import BannerReviewIMG from 'assets/images/banner_review.jpg';
import './styles.scss';

export default function BannerReview() {
	return (
		<div className="banner__review" style={{ backgroundImage: `url('${BannerReviewIMG}')` }}></div>
	);
}
