import { createSlice } from '@reduxjs/toolkit';

export const blogSlice = createSlice({
	name: 'blogs',
	initialState: [],
	reducers: {
		addBlog: (state, action) => {
			const blog = {
				id: 1,
				text: action.payload,
			};
			state.push(blog);
		},
	},
});

export const { addBlog } = blogSlice.actions;
export default blogSlice.reducer;
