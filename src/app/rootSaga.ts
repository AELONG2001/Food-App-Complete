import foodSaga from 'features/ShopFood/ShopFoodSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
	yield all([foodSaga()]);
}
