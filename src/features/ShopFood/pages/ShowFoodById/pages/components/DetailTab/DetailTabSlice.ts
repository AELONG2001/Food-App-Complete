import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

export interface DetailTabSlice {
	comment: string;
	listComment: any;
}

const initialState: DetailTabSlice = {
	comment: '',
	listComment: JSON.parse(localStorage.getItem('comment') as any) || [],
};

const detailTabSlice = createSlice({
	name: 'detaiTab',
	initialState,
	reducers: {
		setComment(state, action: PayloadAction<string>) {
			state.comment = action.payload;
		},
		getComment(state, action: PayloadAction<DetailTabSlice>) {
			return {
				...state,
				listComment: [...state.listComment, action.payload],
			};
		},
	},
});

export const detailTabAction = detailTabSlice.actions;

export const selectComment = (state: RootState) => state.comment.comment;
export const selectListComment = (state: RootState) => state.comment.listComment;

const detailTabReducer = detailTabSlice.reducer;
export default detailTabReducer;
