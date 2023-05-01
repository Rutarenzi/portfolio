import React from 'react';
import { logo } from '../../assets/index';
import { AiFillLinkedin, AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';

const About = () => {
	return (
		<div
			className="w-full py-20 h-auto border-b-[1px] border-b-borderColor
    grid grid-cols-4 gap-8"
		>
			<div className="w-full h-full flex flex-col gap-8">
				<img className="w-32" src={logo} alt="logo" />
				<div className="flex gap-4">
					<span className="bannerIcon">
						<AiFillGithub />
					</span>
					<span className="bannerIcon">
						<AiFillLinkedin />
					</span>
					<span className="bannerIcon">
						<AiOutlineTwitter />
					</span>
				</div>
			</div>
			<div className="w-full h-full">
				<h3 className="text-xl uppercase text-designColor tracking-wider">
					Quick
				</h3>
				<ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
					<li>
						<span
							className="w-full text-lg hover:text-designColor duration-300 
            cursor-pointer relative group"
						>
							About{' '}
							<span
								className="absolute h-[1px] w-full inline-flex
            bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0
            transition-transform duration-300"
							></span>
						</span>
					</li>
					<li>
						<span
							className="w-full text-lg hover:text-designColor duration-300 
            cursor-pointer relative group"
						>
							Portfolio{' '}
							<span
								className="absolute h-[1px] w-full inline-flex
            bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0
            transition-transform duration-300"
							></span>
						</span>
					</li>
					<li>
						<span
							className="w-full text-lg hover:text-designColor duration-300 
            cursor-pointer relative group"
						>
							Services{' '}
							<span
								className="absolute h-[1px] w-full inline-flex
            bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0
            transition-transform duration-300"
							>
								Blog
							</span>
						</span>
					</li>
				</ul>
			</div>
			<div className="w-full h-full">
				<h3 className="text-xl uppercase text-designColor tracking-wider">
					Quick
				</h3>
				<ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
					<li>
						<span
							className="w-full text-lg hover:text-designColor duration-300 
            cursor-pointer relative group"
						>
							Authentication{' '}
							<span
								className="absolute h-[1px] w-full inline-flex
            bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0
            transition-transform duration-300"
							></span>
						</span>
					</li>
					<li>
						<span
							className="w-full text-lg hover:text-designColor duration-300 
            cursor-pointer relative group"
						>
							System status{' '}
							<span
								className="absolute h-[1px] w-full inline-flex
            bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0
            transition-transform duration-300"
							></span>
						</span>
					</li>
					<li>
						<span
							className="w-full text-lg hover:text-designColor duration-300 
            cursor-pointer relative group"
						>
							Terms of service{' '}
							<span
								className="absolute h-[1px] w-full inline-flex
            bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0
            transition-transform duration-300"
							>
								Pricing
							</span>
						</span>
					</li>
				</ul>
			</div>
			<div className="w-full h-full">
				<h3 className="text-xl uppercase text-designColor tracking-wider">
					Quick
				</h3>
				<ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
					<li>
						<span
							className="w-full text-lg hover:text-designColor duration-300 
            cursor-pointer relative group"
						>
							Authentication{' '}
							<span
								className="absolute h-[1px] w-full inline-flex
            bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0
            transition-transform duration-300"
							></span>
						</span>
					</li>
					<li>
						<span
							className="w-full text-lg hover:text-designColor duration-300 
            cursor-pointer relative group"
						>
							System status{' '}
							<span
								className="absolute h-[1px] w-full inline-flex
            bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0
            transition-transform duration-300"
							></span>
						</span>
					</li>
					<li>
						<span
							className="w-full text-lg hover:text-designColor duration-300 
            cursor-pointer relative group"
						>
							Terms of service{' '}
							<span
								className="absolute h-[1px] w-full inline-flex
            bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0
            transition-transform duration-300"
							></span>
						</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default About;
