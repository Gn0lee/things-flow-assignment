import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

import pageSlice from 'common/redux/pageSlice';

const rootReducer = {
	page: pageSlice,
};

const store = configureStore({
	reducer: rootReducer,
});

export default store;

type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
