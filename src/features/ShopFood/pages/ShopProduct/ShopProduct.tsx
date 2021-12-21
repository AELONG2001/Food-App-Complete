import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RoomIcon from '@mui/icons-material/Room';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StarIcon from '@mui/icons-material/Star';
import { Box, Pagination } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import EmptyImg from 'assets/images/empty-shop.e78970f0.svg';
import ToastBody from 'components/CustomToast/ToastBody';
import { selectFoodFilter, shopFoodAction } from 'features/ShopFood/shopFoodSlice';
import { Food } from 'models';
import React from 'react';
// lazy load img js
import { LazyLoadImage } from 'react-lazy-load-image-component';
// lazy load img css
import 'react-lazy-load-image-component/src/effects/blur.css';
import { toast } from 'react-toastify';
import foodApi from 'api/foodApi';
import './ShopProduct.scss';

export interface ShopProductProps {
	bestFood: Food[];
	getFoodById: (id: string) => void;
}

function ShopProduct({ bestFood, getFoodById }: ShopProductProps) {
	const dispatch = useAppDispatch();

	// const loading = useAppSelector(selectFoodLoading);
	const filter = useAppSelector(selectFoodFilter);

	const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
		dispatch(
			shopFoodAction.setFilter({
				...filter,
				_page: value,
			})
		);
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

	const handleGetFoodById = async (id: string, idx: number) => {
		const listFoodById = await foodApi.getFoodById(id);

		dispatch(shopFoodAction.getFoodById(listFoodById));
		dispatch(shopFoodAction.getIdFood(idx));

		showToast();
	};

	return (
		<Box>
			{/* {loading && (
				<Box
					sx={{
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
					}}
				>
					<CircularProgress
						sx={{
							color: '#ff514e',
						}}
					/>
				</Box>
			)} */}
			{bestFood.length > 0 ? (
				<div>
					<div className="shop-product">
						{bestFood.map((food, idx) => (
							<div key={idx} className="shop-product_box">
								<div className="shop-product_box-main" onClick={() => getFoodById(food.id)}>
									<div className="shop-product__img-wrapper">
										<LazyLoadImage
											effect="blur"
											src={food.img}
											className="shop-product__img"
											alt=""
											width="100%"
											height="100%"
										></LazyLoadImage>
										<div className="shop-product__rate">
											<StarIcon />
											<span>{food.rate}</span>
										</div>
									</div>

									<div className="shop-product__content">
										<div className="shop-product__name">{food.name}</div>
										<p className="shop-product__description">{food.dsc}</p>
										<div className="shop-product__row">
											<div className="shop-product__location">
												<RoomIcon />
												<span>{food.country}</span>
											</div>
											<div className="shop-product__price">{`$${food.price}`}</div>
										</div>
									</div>
								</div>

								<div className="shop-product__btns">
									<div className="shop-product__btn">
										<FavoriteBorderIcon />
									</div>
									<div
										className="shop-product__btn"
										onClick={() => handleGetFoodById(food.id, idx)}
									>
										<ShoppingCartIcon />
									</div>
								</div>
								<div className="shop-product__label">Favourite</div>
							</div>
						))}
					</div>
					<Pagination count={4} page={filter._page} onChange={handleChange} />
				</div>
			) : (
				<div className="shop-product__empty">
					<img src={EmptyImg} alt="Empty Food" />
					<div>There Is No Product You Are Looking For</div>
				</div>
			)}
		</Box>
	);
}

export default ShopProduct;
