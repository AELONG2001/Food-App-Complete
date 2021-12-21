/** @format */

import NotFound from 'components/common/NotFound/NotFound';
import HomePage from 'components/HomePage/HomePage';
import Review from 'components/Review';
import LoginPage from 'features/Auth/Login/Login';
import Cart from 'features/Cart/Cart';
import PopularFood from 'features/PopularFood';
import ShowFoodById from 'features/ShopFood/pages/ShowFoodById';
import React from 'react';
import { BrowserRouter as Router, Outlet, Route, Routes } from 'react-router-dom';
import ScrollToTop from 'utils/ScrollToTop';

function App() {
	return (
		<>
			<Router>
				<ScrollToTop>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/shop" element={<ShowFoodById />}>
							<Route path=":id" element={<Outlet />} />
						</Route>
						<Route path="/popular-food" element={<PopularFood />} />
						<Route path="/review" element={<Review />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</ScrollToTop>
				<Cart />
			</Router>
		</>
	);
}

export default App;
