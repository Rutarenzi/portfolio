import React from 'react';
// import { axcel } from '../../assets';
import Leftbanner from './Leftbanner';
import { bannerImg } from '../../assets';

function Banner() {
	return (
		<section
			id="home"
			className="w-full  pt-10 pb-20 flex items-center border-b-[1px] font-titleFont border-b-borderColor"
		>
			<Leftbanner />
			<div className="w-1/2 flex justify-center items-center relative">
				<img
					className="w-[400px] h-[580px] z-10"
					src={bannerImg}
					alt="banner"
				/>
				<div className="absolute bottom-0 w-[500px] h-[500px] bg-gradient-to-r border-[5px] border-borderColor from[#1e2024 to-[#202327 shadow-shadowOne flex justify-center items-center"></div>
			</div>
		</section>
	);
}

export default Banner;
