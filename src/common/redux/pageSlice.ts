import { createSlice } from '@reduxjs/toolkit';

interface PageState {
	page: number;
}

const initialState: PageState = {
	page: 0,
};

const pageSlice = createSlice({
	name: 'page',
	initialState,
	reducers: {
		increasePage: state => {
			return { ...state, page: state.page + 1 };
		},
		resetPage: state => {
			return { ...state, page: 0 };
		},
	},
});

export const { increasePage, resetPage } = pageSlice.actions;

export default pageSlice.reducer;
