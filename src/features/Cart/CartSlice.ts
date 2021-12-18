import { RootState } from './../../app/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartInfo {
	isShowCart: boolean;
}

const initialState: CartInfo = {
	isShowCart: false,
};

const cartSlice = createSlice({
	name: 'Cart',
	initialState,
	reducers: {
		handleShowCart(state, action: PayloadAction<boolean>) {
			state.isShowCart = action.payload;
		},
	},
});

export const cartActions = cartSlice.actions;

export const selectShowCart = (state: RootState) => state.cart.isShowCart;

const cartReducer = cartSlice.reducer;
export default cartReducer;
