import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RoomIcon from '@mui/icons-material/Room';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StarIcon from '@mui/icons-material/Star';
import foodApi from 'api/foodApi';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import 'features/ShopFood/pages/ShopProduct/ShopProduct.scss';
import { selectFoodList, shopFoodAction } from 'features/ShopFood/shopFoodSlice';
import { Food } from 'models';
import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

export interface DetailRelatedProps {
	id?: string;
}

export default function DetailRelated({ id }: DetailRelatedProps) {
	const listProduct = useAppSelector(selectFoodList);
	const [products, setProducts] = useState<Food[]>([]);

	const navigate = useNavigate();

	const dispatch = useAppDispatch();

	useEffect(() => {
		if (listProduct.length <= 0) return;

		const productFilter = listProduct.filter((product) => product.id !== id);
		const randomProducts = [];

		for (let i = 0; i < 5; i++) {
			const num = Math.floor(Math.random() * listProduct.length);
			randomProducts.push(productFilter[num]);
			productFilter.splice(num, 1);
		}
		setProducts(randomProducts);
	}, [listProduct, id]);

	const getFoodById = (id: string) => {
		navigate(`/shop/${id}`);
	};

	const handleGetFoodById = async (id: string, idx: number) => {
		const listFoodById = await foodApi.getFoodById(id);

		dispatch(shopFoodAction.getFoodById(listFoodById));
		dispatch(shopFoodAction.getIdFood(idx));
	};

	return (
		<>
			{products && products.length > 0 && (
				<div className="related-main" style={{ margin: '0 auto' }}>
					<div className="related-heading">Related Products</div>
					<div className="shop-product shop-product__related">
						{products.map((food, idx) => (
							<div key={idx} className="shop-product_box shop-product_box-related">
								<div
									className="shop-product_box-main"
									onClick={() => getFoodById(food && food.id ? food.id : '')}
								>
									<div className="shop-product__img-wrapper">
										<LazyLoadImage
											effect="blur"
											src={food && food.img ? food.img : ''}
											className="shop-product__img"
											alt=""
											width="100%"
											height="100%"
										></LazyLoadImage>
										<div className="shop-product__rate">
											<StarIcon />
											<span>{food && food.rate ? food.rate : ''}</span>
										</div>
									</div>

									<div className="shop-product__content">
										<div className="shop-product__name">{food && food.name ? food.name : ''}</div>
										<p className="shop-product__description">{food && food.dsc ? food.dsc : ''}</p>
										<div className="shop-product__row">
											<div className="shop-product__location">
												<RoomIcon />
												<span>{food && food.country ? food.country : ''}</span>
											</div>
											<div className="shop-product__price">{`$${
												food && food.price ? food.price : ''
											}`}</div>
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
				</div>
			)}
		</>
	);
}
