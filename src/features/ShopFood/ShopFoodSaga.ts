import { shopFoodAction } from './shopFoodSlice';
import { takeLatest, call, put, debounce } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { ListParams } from 'models/common';
import { Food } from 'models';
import foodApi from 'api/foodApi';

function* fetchFoodList(action: PayloadAction<ListParams>) {
	try {
		const listFood: Food[] = yield call(foodApi.getFoods, '/best-foods', action.payload);
		yield put(shopFoodAction.fetchFoodSuccess(listFood));
	} catch (error) {
		yield put(shopFoodAction.fetchFoodFailed(error as string));
	}
}

function* handleSearchDebounce(action: PayloadAction<ListParams>) {
	yield put(shopFoodAction.setFilter(action.payload));
}

export default function* foodSaga() {
	yield takeLatest(shopFoodAction.fetchFoodList, fetchFoodList);

	yield debounce(500, shopFoodAction.setFilterWidthDebounce, handleSearchDebounce);
}
