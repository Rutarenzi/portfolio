import React from 'react';
import { AiFillLinkedin, AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';

const ContactInfo = () => {
	return (
		<div
			className="w-[40%] h-full bg-gredient-to-r from-[#1e2024] to-[#23272b]
              p-8 rounded-lg  "
		>
			{/* <img src={contactImg} alt="ContactUs Image"/> */}
			<div className="flex flex-col gap-3">
				<h2 className="text-3xl font-bold text-white">Rutagarama Axcel</h2>
				<p className="text-lg font-normal text-gray-400">Software Engineer</p>
				<p className="text-base text-gray-400 tracking-wide">
					in software development. I am a solution-oriented full-stack
					developer, a lifelong learner, and Software developer with 2+ years of
					experience in software development.
				</p>
				<p className="text-base text-gray-400 flex items-center gap-2">
					USA Phone : <span className="text-lightText">+123-4324-3423</span>
				</p>
				<p className="text-base text-gray-400 flex -items-center gap-2">
					Email:{' '}
					<span className="text-lightText ">rutagaramaaxcel@gmail.com</span>
				</p>
			</div>
			<div className="flex flex-col">
				<h2 className="text-base uppercase font-titleFont mb-4 ">Connect:</h2>
				<div className="flex">
					<span className="bannerIcon">
						<AiFillLinkedin />
					</span>
					<span className="bannerIcon">
						<AiFillGithub />
					</span>
					<span className="bannerIcon">
						<AiOutlineTwitter />
					</span>
				</div>
			</div>
		</div>
	);
};

export default ContactInfo;
