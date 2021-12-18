import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import './styles.scss';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { cartActions, selectShowCart } from './CartSlice';
import { makeStyles } from '@mui/styles';
import { selectFoodById } from 'features/ShopFood/shopFoodSlice';
import { Food } from 'models';

const useStyles = makeStyles({
	buttonClose: {
		color: '#ff514e !important',
		fontSize: '3rem !important',
	},
});

export default function Cart() {
	const dispatch = useAppDispatch();
	const isShowCart = useAppSelector(selectShowCart);
	const foodById = useAppSelector(selectFoodById);

	console.log(foodById);

	const classes = useStyles();

	const handleHideCart = () => {
		dispatch(cartActions.handleShowCart(false));
	};

	return (
		<>
			{isShowCart && (
				<div className="cart__box">
					<Box>
						<Box sx={{ my: 3, mx: 2 }}>
							<Grid container alignItems="center">
								<Grid item xs>
									<Typography gutterBottom variant="h4" component="div">
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
							{/* {foodById.map((food, idx) => (
								<Typography key={idx} color="text.secondary" variant="body2">
									{food.name}
									<img
										src={food.img}
										alt={food.name}
										width="100"
										height="30"
										style={{ objectFit: 'cover' }}
									/>
								</Typography>
							))} */}
						</Box>
						<Divider variant="middle" />
						<Box sx={{ m: 2 }}>
							<Typography gutterBottom variant="body1"></Typography>
							<Stack direction="row" spacing={1}>
								<Chip label="Extra Soft" />
								<Chip color="primary" label="Soft" />
								<Chip label="Medium" />
								<Chip label="Hard" />
							</Stack>
						</Box>
						<Box sx={{ mt: 3, ml: 1, mb: 1 }}>
							<Typography gutterBottom variant="body1"></Typography>
						</Box>
					</Box>
				</div>
			)}
		</>
	);
}
