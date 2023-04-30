import React from 'react';
import Title from '../design/Title';
import { axcel } from '../../assets';
import BlogCard from './BlogCard';

const Blog = () => {
	return (
		<section
			id="blog"
			className="w-full py-20 border-b-[1px] border-b-borderColor"
		>
			<div className="flex justify-center text-center">
				<Title title="Blogs" />
			</div>
			<div className="grid grid-cols-3 gap-14">
				<BlogCard
					title="My first blog so far "
					description="I am A Web And Mobile Developer,
            With Experience of more than 3 Years. 
            I Am Very Much Expert In HTML, CSS,Database Design. I Am Well Organized, Efficient, 
            And Self-Motivated. 
            "
					src={axcel}
				/>
			</div>
		</section>
	);
};

export default Blog;
