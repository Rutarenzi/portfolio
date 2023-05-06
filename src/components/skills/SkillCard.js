import React from 'react';

// eslint-disable-next-line react/prop-types
const SkillCard = ({ title, content, description }) => {
	return (
		<div className="w-full h-1/3 group flex">
			<div className="w-10 h-[6px]  mt-16 bgOpacity relative">
				<span
					className="absolute w-5 h-5 rounded-full -top-2 -left-3 
                flex justify-center items-center bg-[#01192b] bg-opacity-100"
				>
					<span
						className="w-3 h-3 rounded-full bg-bodyColor inline-flex 
                    group-hover:bg-[#04c2c9] duration-300"
					></span>
				</span>
			</div>
			<div
				className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 
            rounded-lg px-10 flex flex-col justify-center gap-10 shadow-shadowTwo "
			>
				<div>
					<h3 className="text-2xl font-semibold group-hover:text-white duration-300">
						{title}
					</h3>
					<p className="text-sm mt-2 text-gray-400 group-hover:text-white duration-300 ">
						{content}
					</p>
				</div>
				<p className="text-base font-medium text-gray-400 group-hover:text-gray-300 duration ">
					{description}
				</p>
			</div>
		</div>
	);
};
export default SkillCard;
