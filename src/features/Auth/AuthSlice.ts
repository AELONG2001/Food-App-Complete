import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

export interface UserInfo {
	id: string | number;
	name: string;
	email: string;
	img: string;
}

export interface AuthInfo {
	isLogin: boolean;
	user: UserInfo;
	error: string;
}

const initialState: AuthInfo = {
	isLogin: false,
	user: {
		id: '',
		name: '',
		email: '',
		img: '',
	},
	error: '',
};
const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		getUserInfo(state, action: PayloadAction<UserInfo>) {
			state.user = action.payload;
		},

		checkLogin(state, action: PayloadAction<boolean>) {
			state.isLogin = action.payload;
		},
	},
});

export const authActions = authSlice.actions;

export const selectUserLogin = (state: RootState) => state.auth.isLogin;
export const selectUser = (state: RootState) => state.auth.user;
export const selectUserError = (state: RootState) => state.auth.error;

const authReducer = authSlice.reducer;
export default authReducer;
