import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

// eslint-disable-next-line react/prop-types
const BlogCard = ({ title, description, src }) => {
	return (
		<div
			className="w-full px-12 h-auto py-10 rounded-lg shadow-shadowTw
        flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900
        transition-colors duration-1000"
		>
			<div className="w-full h-full h-[80%] overflow-hidden rounded-lg">
				<img
					className="w-full h-60 object-cover
         group:scale-110 duration-300 cursor-pointer "
					src={src}
					alt="Blog photo"
				/>
			</div>
			<div className="w-full mt-5 flex flex-col gap-6">
				<div className="flex items-center justify-between">
					<h3>{title}</h3>
					<div className="">
						<span
							className="text-lg w-10 h-10 rounded-full bg-black inline-flex 
                justify-center items-center text-gray-400 hover:text-designColor duration"
						>
							<AiOutlineHeart />
						</span>
					</div>
				</div>
				<div>
					<p>{description}</p>
				</div>
			</div>
		</div>
	);
};

export default BlogCard;
