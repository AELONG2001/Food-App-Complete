import { Grid } from '@mui/material';
import foodApi from 'api/foodApi';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import React, { ChangeEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ShopFilter from './pages/ShopFilter/ShopFilter';
import ShopProduct from './pages/ShopProduct/ShopProduct';
import ShopSearch from './pages/ShopSearch/ShopSearch';
import { selectFoodFilter, selectFoodList, shopFoodAction } from './shopFoodSlice';

export default function ShopFood() {
	const dispatch = useAppDispatch();
	const filter = useAppSelector(selectFoodFilter);
	const foodList = useAppSelector(selectFoodList);

	const navigate = useNavigate();

	//get main food
	useEffect(() => {
		dispatch(shopFoodAction.fetchFoodList(filter));
	}, [dispatch, filter]);

	//get food follow params
	const handleSubmitGetFood = async (idx: number) => {
		switch (idx) {
			case 1:
				const burgersFood = await foodApi.getFoods('/burgers', filter);
				dispatch(shopFoodAction.fetchBurgersFood(burgersFood));
				break;
			case 2:
				const breadsFood = await foodApi.getFoods('/breads', filter);
				dispatch(shopFoodAction.fetchBreadsFood(breadsFood));
				break;
			case 3:
				const sandwichesFood = await foodApi.getFoods('/sandwiches', filter);
				dispatch(shopFoodAction.fetchSandWichesFood(sandwichesFood));
				break;
			case 4:
				const drinkFoods = await foodApi.getFoods('/drinks', filter);
				dispatch(shopFoodAction.fetchDrinksFood(drinkFoods));
				break;

			case 5:
				const pizzasFood = await foodApi.getFoods('/pizzas', filter);
				dispatch(shopFoodAction.fetchPizzasFood(pizzasFood));
				break;
			default:
				return;
		}
	};

	//get food follow price
	const handleSubmitPrice = (idx: number) => {
		switch (idx) {
			case 1:
				const newFilterUnder = { _page: 1, _limit: 16, price_lte: 100 };
				dispatch(shopFoodAction.setFilter(newFilterUnder));
				break;
			case 2:
				const newFilterUpTo = { _page: 1, _limit: 16, price_gte: 100 };
				dispatch(shopFoodAction.setFilter(newFilterUpTo));
				break;
			case 3:
				const newFilterUnderDown = { _page: 1, _limit: 16, price_lte: 50 };
				dispatch(shopFoodAction.setFilter(newFilterUnderDown));
				break;
			case 4:
				const newFilterTo = { _page: 1, _limit: 16, price_gte: 50, price_lte: 100 };
				dispatch(shopFoodAction.setFilter(newFilterTo));
				break;
			default:
				return;
		}
	};

	//get food follow vote
	const handleSubmitVote1 = () => {
		const newFilterUnder = { _page: 1, _limit: 16, rate_like: 5 };
		dispatch(shopFoodAction.setFilter(newFilterUnder));
	};

	const handleSubmitVote2 = () => {
		const newFilterUnder = { _page: 1, _limit: 16, rate_like: 4 };
		dispatch(shopFoodAction.setFilter(newFilterUnder));
	};

	const handleSubmitVote3 = () => {
		const newFilterUnder = { _page: 1, _limit: 16, rate_like: 3 };
		dispatch(shopFoodAction.setFilter(newFilterUnder));
	};

	//handle Search
	const onFoodSearch = (e: ChangeEvent<HTMLInputElement>) => {
		const newFilterUnder = { _page: 1, _limit: 16, name_like: e.target.value };
		dispatch(shopFoodAction.setFilterWidthDebounce(newFilterUnder));
	};

	//show Food follow id
	const getFoodById = (id: string) => {
		navigate(`/shop/${id}`);
	};

	return (
		<Grid container maxWidth="lg" sx={{ margin: '0 auto' }}>
			<Grid item xs={12} md={2}>
				<ShopFilter
					onSubmitFood={handleSubmitGetFood}
					onSubmitPrice={handleSubmitPrice}
					onSubmitVote1={handleSubmitVote1}
					onSubmitVote2={handleSubmitVote2}
					onSubmitVote3={handleSubmitVote3}
				/>
			</Grid>
			<Grid item xs={12} md={10}>
				<ShopSearch onFoodSearch={onFoodSearch} />
				<ShopProduct bestFood={foodList} getFoodById={getFoodById} />
			</Grid>
		</Grid>
	);
}
