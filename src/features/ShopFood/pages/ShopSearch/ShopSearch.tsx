import React, { ChangeEvent, useRef, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import './shopSearch.scss';
import { useAppSelector } from 'app/hooks';
import { selectFoodList } from 'features/ShopFood/shopFoodSlice';

export interface ShopSearchProps {
	onFoodSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function ShopSearch({ onFoodSearch }: ShopSearchProps) {
	const shopProduct = document.querySelector('.shop-product');

	const [activeOne, setActiveOne] = useState<boolean>(true);
	const [activeTwo, setActiveTwo] = useState<boolean>(false);

	const ref = useRef<HTMLFormElement>(null);

	const listFood = useAppSelector(selectFoodList);

	const handleChangeActiveOne = () => {
		if (shopProduct !== null && listFood.length > 0) {
			setActiveOne(true);
			setActiveTwo(false);
			shopProduct!.classList.remove('shop-product-column');
		}
	};

	const handleChangeActiveTwo = () => {
		if (shopProduct !== null && listFood.length > 0) {
			setActiveOne(false);
			setActiveTwo(true);
			shopProduct!.classList.add('shop-product-column');
		}
	};

	const onFoodSearchClick = () => {
		ref.current!.reset();
	};

	return (
		<div className="shop-handle">
			<form className="shop-handle__search" ref={ref}>
				<input placeholder="Search your food" onChange={onFoodSearch} />
				<div className="shop-handle__search-btn" onClick={onFoodSearchClick}>
					<SearchIcon />
				</div>
			</form>

			<div className="shop-handle__display-types">
				<ViewComfyIcon
					onClick={handleChangeActiveOne}
					className={`shop-handle__display-type ${activeOne && 'active'}`}
				/>
				<ViewListIcon
					onClick={handleChangeActiveTwo}
					className={`shop-handle__display-type ${activeTwo && 'active'}`}
				/>
			</div>
		</div>
	);
}
