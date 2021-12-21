import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { cartActions, selectShowCart } from './CartSlice';
import { makeStyles } from '@mui/styles';
import { selectFoodById, shopFoodAction } from 'features/ShopFood/shopFoodSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import EmptyCart from 'assets/images/empty_cart.png';
import DialogComponent from 'components/common/Dialog';
import './styles.scss';

const useStyles = makeStyles({
	headingCart: {
		fontWeight: '600 !important',
		color: 'rgba(0, 0, 0, 0.84) !important',
		margin: '0 !important',
		textTransform: 'uppercase',
	},

	buttonClose: {
		color: '#ff514e !important',
		fontSize: '3rem !important',
		cursor: 'pointer'
	},

	boxFood: {
		display: 'flex',
		marginTop: '20px',

		'& img': {
			width: '80px',
			height: '80px',
		},
	},

	boxTitle: {
		paddingLeft: '10px',
		'& .MuiTypography-h5': {
			fontSize: '1.7rem !important',
			lineHeight: '2rem !important',
			color: 'rgba(0, 0, 0, 0.84) !important',
		},
		'& .MuiTypography-body1': {
			color: '#ff514e !important',
			fontSize: '1.4rem !important',
			lineHeight: '1.5rem !important',
			fontWeight: '500 !important',
			marginTop: '2px',
		},
		'& .MuiTypography-body2': {
			fontSize: '1.3rem !important',
			lineHeight: '1.4rem !important',
			color: 'rgba(7, 6, 6, 0.84) !important',
			marginTop: '16px !important',
		},
	},

	itemDelete: {
		margin: 'auto 0 auto auto',
		cursor: 'pointer',
		'& .MuiSvgIcon-root': {
			color: '#b2bec3 !important',
			width: '2.2rem !important',
			height: '2.2rem !important',
		},
	},

	buttonCheckout: {
		display: 'flex !important',
		fontSize: '1.5rem !important',
		color: '#fff !important',
		backgroundColor: '#ff514e !important',
		borderRadius: '4px !important',
		margin: '40px auto 0 auto !important',
	},

	emptyCart: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: '40px',
		'& .MuiButton-root': {
			fontSize: '1.5rem !important',
			color: '#fff !important',
			backgroundColor: '#ff514e !important',
			width: '200px !important',
			borderRadius: '4px !important',
		},
	},

	cartOverlay: {
		position: 'fixed',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		backgroundColor: 'rgba(0,0,0,.65) !important',
		zIndex: '124',
	},
});

export default function Cart() {
	const [isShow, setIsShow] = useState(false);
	const userAvatar = localStorage.getItem('userImg');
	const imgFb = localStorage.getItem('imgFb');

	// const ref = useRef<any>([]);

	const navigate = useNavigate();
	const classes = useStyles();

	const dispatch = useAppDispatch();
	const isShowCart = useAppSelector(selectShowCart);
	const foodById = useAppSelector(selectFoodById);

	const handleHideCart = () => {
		dispatch(cartActions.handleShowCart(false));
	};

	const handleShowCartModal = () => {
		dispatch(cartActions.handleShowCart(false));
	};

	const handleRedirectBuyNow = () => {
		navigate('/popular-food');
		dispatch(cartActions.handleShowCart(false));
	};

	const handleShowDialog = () => {
		if (!userAvatar && !imgFb) {
			setIsShow(true);
		} else {
			setIsShow(false);
		}
		dispatch(cartActions.handleShowCart(false));
	};

	const handleRemoveFoodById = (id: string) => {
		dispatch(shopFoodAction.RemoveFoodById(id));
	};

	return (
		<>
			{isShowCart && (
				<div className="cart__box">
					<Box>
						<Box>
							<Grid container alignItems="center" sx={{ p: 1.6 }}>
								<Grid item xs>
									<Typography
										className={classes.headingCart}
										gutterBottom
										variant="h4"
										component="div"
										sx={{ fontSize: { md: '2.6rem', xs: '2rem' } }}
									>
										Your Cart
									</Typography>
								</Grid>
								<Grid item>
									<CancelPresentationIcon
										className={classes.buttonClose}
										onClick={handleHideCart}
									/>
								</Grid>
							</Grid>
							<Divider />
							<div className="cart__box-main">
								{foodById.map((food: any, idx: number) => (
									<Box key={idx} className={classes.boxFood} sx={{ px: 1.6 }}>
										<img src={food.img} alt={food.name} />
										<Box className={classes.boxTitle}>
											<Typography variant="h5">{food.name}</Typography>
											<Typography variant="body1">{`$${food.price}`}</Typography>
										</Box>
										<Box
											className={classes.itemDelete}
											onClick={() => handleRemoveFoodById(food.id)}
										>
											<DeleteIcon />
										</Box>
									</Box>
								))}
							</div>
							{foodById.length <= 0 && (
								<Box className={classes.emptyCart}>
									<img className="cart__box-empty__img" src={EmptyCart} alt="Empty Cart" />
									<Typography
										variant="h4"
										sx={{
											fontSize: '2rem !important',
											fontWeight: '500',
											color: 'rgba(0, 0, 0, 0.7) !important',
										}}
									>
										Your Cart Is Empty
									</Typography>
									<Button
										variant="contained"
										onClick={handleRedirectBuyNow}
										sx={{ marginTop: { md: '16px', xs: '24px' } }}
									>
										Buy now
									</Button>
								</Box>
							)}
						</Box>
					</Box>
					{foodById.length > 0 && (
						<Button
							onClick={handleShowDialog}
							fullWidth
							className={classes.buttonCheckout}
							variant="contained"
							sx={{ width: { md: '400px', xs: '280px' } }}
						>
							Checkout
						</Button>
					)}
				</div>
			)}
			<DialogComponent isShow={isShow} setIsShow={setIsShow} />

			{isShowCart && <Box className={classes.cartOverlay} onClick={handleShowCartModal}></Box>}
		</>
	);
}
