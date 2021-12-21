/** @format */

import createSagaMiddleware from '@redux-saga/core';
import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import authReducer from 'features/Auth/AuthSlice';
import cartReducer from 'features/Cart/CartSlice';
import detailTabReducer from 'features/ShopFood/pages/ShowFoodById/pages/components/DetailTab/DetailTabSlice';
import shopFoodReducer from 'features/ShopFood/shopFoodSlice';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
	food: shopFoodReducer,
	auth: authReducer,
	cart: cartReducer,
	comment: detailTabReducer,
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
