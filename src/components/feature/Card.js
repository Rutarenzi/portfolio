/* eslint-disable react/prop-types */
import React from 'react';

const Card = ({ title, description }) => {
	return (
		<div
			className="w-1/2 h-80 px-12 py-10 rounded-lg shadow-shadowTwo flex items-center bg-gradient-to-r
			from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black 
			hover:to-[#1e2024] transation-colors duration-100
			 bg-red-200"
		>
			<div className="flex flex-col gap-4">
				<h3 className="text-2xl font-titleFont font-bold text-designColor">
					{title}
				</h3>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default Card;
