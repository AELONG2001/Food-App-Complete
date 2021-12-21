import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useAppSelector } from 'app/hooks';
import { detailTableData } from 'constants/DataTableProduct';
import React, { useState } from 'react';
import { selectListComment } from './DetailTabSlice';
import DetailTabComment from './pages/DetailTabComment/DetailComment';
import './styles.scss';

const useStyles = makeStyles({
	buttonTab: {
		fontSize: '1.4rem !important',
		color: 'rgba(0, 0, 0, 0.84) !important',
		backgroundColor: 'unset !important',
		boxShadow: 'unset !important',
	},

	active: {
		fontSize: '1.4rem !important',
		color: '#fff !important',
		backgroundColor: '#ff514e !important',
		'&:hover': {},
	},
});

export default function DetailTab() {
	const classes = useStyles();

	const [isShow, setIsShow] = useState(true);

	const userAvatar = localStorage.getItem('userImg');
	const imgFb = localStorage.getItem('imgFb');

	const comments = useAppSelector(selectListComment);

	const handleChangeTabOne = () => {
		setIsShow(true);
	};

	const handleChangeTabTwo = () => {
		setIsShow(false);
	};

	return (
		<div className="detail-tab">
			<div className="detail-tab__btns">
				<div className="detail-tab__btn">
					<Button
						className={isShow ? classes.active : classes.buttonTab}
						onClick={handleChangeTabOne}
						variant="contained"
					>
						Description
					</Button>
				</div>

				<div className="detail-tab__btn">
					<Button
						className={!isShow ? classes.active : classes.buttonTab}
						onClick={handleChangeTabTwo}
						variant="contained"
					>
						Comment{userAvatar || imgFb ? `(${comments.length})` : ''}
					</Button>
				</div>
				<div className="detail-tab__btn-background"></div>
			</div>
			{isShow ? (
				<div className="detail-tab__content">
					<p className="detail-tab__content-description">
						Although the legendary Double Burger really needs no introduction, please allow us…
						Tucked in between three soft buns are two all-beef patties, cheddar cheese, ketchup,
						onion, pickles and iceberg lettuce. Hesburger’s own paprika and cucumber mayonnaise add
						the crowning touch. Oh baby!
					</p>

					<div className="detail-tab__content-table">
						{detailTableData.map(({ title, description, ingredients }) => (
							<div key={title} className="detail-tab__content-col">
								<div className="detail-tab__content-col-wrapper">
									<div className="detail-tab__content-col-title">{title}</div>
									<div className="detail-tab__content-col-description">{description}</div>
								</div>
								<div className="detail-tab__content-ingredients">{ingredients}</div>
							</div>
						))}
					</div>
				</div>
			) : (
				<DetailTabComment />
			)}
		</div>
	);
}
