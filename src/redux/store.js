import { configureStore } from '@reduxjs/toolkit';
import blogReducer from '../redux/features/slice/blog/blogSlice';

export const reducers = {
	blogs: blogReducer,
};

const store = configureStore({
	reducer: {
		...reducers,
	},
});

export default store;
