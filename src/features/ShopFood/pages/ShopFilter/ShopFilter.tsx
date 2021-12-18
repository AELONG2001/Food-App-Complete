import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { optionCheckbox, typeOptions } from 'constants/shopInfo';
import React from 'react';
import { makeStyles } from '@mui/styles';
import './shopFilter.scss';

export interface ShopFiltersProps {
	onSubmitFood: (idx: number) => void;
	onSubmitPrice: (idx: number) => void;
	onSubmitVote1: () => void;
	onSubmitVote2: () => void;
	onSubmitVote3: () => void;
}

const useStyles = makeStyles({
	btnRadio: {
		'& .MuiSvgIcon-root': {
			width: '2rem !important',
			height: '2rem !important',
			marginBottom: '1px',
		},
	},
});

function ShopFilters({
	onSubmitFood,
	onSubmitPrice,
	onSubmitVote1,
	onSubmitVote2,
	onSubmitVote3,
}: ShopFiltersProps) {
	const classes = useStyles();

	//get food follow index
	const handleSubmit = (idx: number) => {
		onSubmitFood(idx);
	};

	//get food follow price
	const handleSubmitPrice = (idx: number) => {
		onSubmitPrice(idx);
	};

	return (
		<div className="shop-filters">
			<h2 className="shop-filters__title">Popular</h2>
			<ul className="shop-filters__list">
				{typeOptions.map(({ img, name }, idx) => (
					<li
						onClick={() => handleSubmit(idx + 1)}
						key={idx}
						className="shop-filters__item shop-filters__item"
					>
						<img src={img} alt="Shop icons" />
						<span className="shop-filters__item-name">{name}</span>
					</li>
				))}
			</ul>

			<h2 className="shop-filters__title">Price</h2>
			<FormControl component="fieldset" sx={{ padding: '2px 0 2px 8px' }}>
				<RadioGroup aria-label="gender" defaultValue="female" name="radio-buttons-group">
					{optionCheckbox.map((value, idx) => (
						<FormControlLabel
							onClick={() => handleSubmitPrice(idx + 1)}
							key={idx}
							value={value}
							control={
								<Radio
									className={classes.btnRadio}
									sx={{
										color: '#ff514e !important',
									}}
								/>
							}
							label={value}
							sx={{ flexShrink: 0, fontSize: '1.6rem' }}
						/>
					))}
				</RadioGroup>
			</FormControl>

			<h2 className="shop-filters__title">Rate</h2>
			<div className="shop-filters__stars submit_vote-1" onClick={onSubmitVote1}>
				<StarIcon />
				<StarIcon />
				<StarIcon />
				<StarIcon />
				<StarIcon />
			</div>
			<div className="shop-filters__stars submit_vote-2" onClick={onSubmitVote2}>
				<StarIcon />
				<StarIcon />
				<StarIcon />
				<StarIcon />
				<StarBorderIcon />
			</div>
			<div className="shop-filters__stars submit_vote-3" onClick={onSubmitVote3}>
				<StarIcon />
				<StarIcon />
				<StarIcon />
				<StarBorderIcon />
				<StarBorderIcon />
			</div>
		</div>
	);
}

export default ShopFilters;
