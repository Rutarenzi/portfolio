import React from 'react';

// eslint-disable-next-line react/prop-types
const Title = ({ title }) => {
	return (
		<div className="flex flex-col gap-2 font-titleFont mb-14">
			<h2 className="text-5xl text-designColor font-bold capitalize">
				{title}
			</h2>
		</div>
	);
};

export default Title;
