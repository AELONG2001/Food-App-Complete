import AddIcon from '@mui/icons-material/Add';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import RemoveIcon from '@mui/icons-material/Remove';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { makeStyles } from '@mui/styles';
import { Food } from 'models';
import React, { ReactNode, useState } from 'react';
// react content loader
import ContentLoader from 'react-content-loader';
import ToastBody from 'components/CustomToast/ToastBody';
import { toast } from 'react-toastify';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import './styles.scss';
import foodApi from 'api/foodApi';
import { shopFoodAction } from 'features/ShopFood/shopFoodSlice';
import { useAppDispatch } from 'app/hooks';

export interface DetailInfoProps {
	id?: string;
	listFood: Food[];
}

const useStyles = makeStyles({
	radioBtn: {
		'& .MuiSvgIcon-root': {
			fontSize: '2.4rem !important',
		},
	},
	buttonAdd: {
		fontSize: '1.2rem !important',
		color: '#fff !important',
		backgroundColor: '#ff514e !important',
		borderRadius: '20px !important',
	},
});

export default function DetailInfo({ id, listFood }: DetailInfoProps) {
	const classes = useStyles();

	//value Add and Remove
	let [count, setCount] = useState<number>(1);

	//get price and save on state
	let [newPrice, setNewPrice] = useState<number>();

	const dispatch = useAppDispatch();

	const contentLoader = () => {
		<ContentLoader>
			<rect x="0" y="0" width="100%" height="35" />
		</ContentLoader>;
	};

	//change price when click remove and add
	const handleIncrement = (price: number) => {
		setCount(count + 1);
		console.log(count);
		if (count === 1) {
			setNewPrice(price * 1);
		}
		const newCount = count + 1;
		setNewPrice(price * newCount);
	};

	const handleDecrement = (price: number) => {
		setCount(count - 1);
		if (count <= 1) {
			setCount(1);
		}
		const newCount = count - 1;
		setNewPrice(price * newCount);
	};

	//change price when check radio
	const handleChangePriceOne = (idx: number, price: number) => {
		setNewPrice(price * 2);
		setCount(2);
	};

	const handleChangePriceTwo = (idx: number, price: number) => {
		setNewPrice(price * 3);
		setCount(3);
	};

	const handleChangePriceThree = (idx: number, price: number) => {
		setNewPrice(price * 5);
		setCount(5);
	};

	//React toastify
	const showToast = () => {
		return toast(
			<ToastBody title="Success !" desc="The product has been added to cart" icon={true} />,
			{
				position: 'top-left',
				className: 'background__toast-success',
				closeButton: (
					<div
						style={{
							position: 'absolute',
							top: 8,
							right: 8,
							color: '#fff',
						}}
					>
						<ExitToAppIcon sx={{ width: '2rem !important', height: '2rem !important' }} />
					</div>
				),
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			}
		);
	};

	const handleAddFood = async (id: string) => {
		const listFoodById = await foodApi.getFoodById(id);

		dispatch(shopFoodAction.getFoodById(listFoodById));
		showToast();
	};

	return (
		<>
			{listFood.map(
				(food, idx) =>
					food.id === id && (
						<div key={idx} className="detail-content">
							<h2 className="detail-content__title">
								{food.name ? food.name : (contentLoader() as ReactNode)}
							</h2>

							<div className="detail-content__rate">
								<div className="detail-content__stars">
									<StarIcon />
									<StarIcon />
									<StarIcon />
									<StarIcon />
									{food.rate === 5 ? <StarIcon /> : <StarBorderIcon />}
								</div>
								<div className="detail-content__reviews">
									<span> Customer Reviews</span>
								</div>
							</div>

							<div className="detail-content__price">
								<strong>${newPrice ? newPrice.toFixed(0) : food.price}</strong>
							</div>

							<div className="detail-content__tags">
								<div className="detail-content__tag">
									<span className="detail-content__tag-label">Category:</span>
									<span className="detail-content__tag-detail category">food</span>
								</div>
								<div className="detail-content__tag">
									<span className="detail-content__tag-label">Country:</span>
									<span className="detail-content__tag-detail">{food.country}</span>
								</div>
							</div>

							<p className="detail-content__description">{food.dsc}</p>

							<form className="detail-content__form">
								<div className="detail-content__form-title">Choose your options</div>
								<FormControl component="fieldset">
									<RadioGroup row aria-label="gender" name="row-radio-buttons-group">
										<FormControlLabel
											label="Buy 2 products"
											value="Buy 2 products"
											control={
												<Radio
													checked={count === 2}
													onClick={() => handleChangePriceOne(idx + 1, food.price)}
													className={classes.radioBtn}
													sx={{ color: '#ff514e !important' }}
												/>
											}
										/>

										<FormControlLabel
											checked={count === 3}
											label="Buy 3 products"
											value="Buy 3 products"
											control={
												<Radio
													onClick={() => handleChangePriceTwo(idx + 1, food.price)}
													className={classes.radioBtn}
													sx={{ color: '#ff514e !important' }}
												/>
											}
										/>

										<FormControlLabel
											label="Buy 5 products"
											value="Buy 5 products"
											control={
												<Radio
													checked={count === 5}
													onClick={() => handleChangePriceThree(idx + 1, food.price)}
													className={classes.radioBtn}
													sx={{ color: '#ff514e !important' }}
												/>
											}
										/>
									</RadioGroup>
								</FormControl>
							</form>

							<div className="detail-content__btns">
								<div className="detail-content__btn-handle ">
									<Button
										className="detail-content__btn-inc btn-circle"
										onClick={() => handleDecrement(food.price)}
									>
										<RemoveIcon sx={{ color: 'rgba(0, 0, 0, 0.6) !important' }} />
									</Button>
									<span className="detail-content__btn-qnt">{count}</span>
									<Button
										className="detail-content__btn-dec btn-circle"
										onClick={() => handleIncrement(food.price)}
									>
										<AddIcon sx={{ color: 'rgba(0, 0, 0, 0.6) !important' }} />
									</Button>
								</div>

								<div className="detail-content__add" onClick={() => handleAddFood(food.id)}>
									<Button
										className={classes.buttonAdd}
										sx={{ width: { md: '300px', xs: '240px' } }}
									>
										<AddShoppingCartIcon />
										<span>Add to cart</span>
									</Button>
								</div>

								<Button className="detail-content__btn-like btn-circle">
									<FavoriteBorderIcon />
								</Button>
							</div>

							<div className="detail-content__commits">
								<div className="detail-content__commit">
									<LocalShippingIcon />
									<span>Free global shipping on all orders</span>
								</div>
								<div className="detail-content__commit">
									<EventAvailableIcon />
									<span>2 hours easy returns if you change your mind</span>
								</div>
								<div className="detail-content__commit">
									<LoyaltyIcon />
									<span>Order before noon for same day dispatch</span>
								</div>
							</div>
						</div>
					)
			)}
		</>
	);
}
