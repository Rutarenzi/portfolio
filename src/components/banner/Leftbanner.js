import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import { AiFillLinkedin, AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
function Leftbanner() {
	const [text] = useTypewriter({
		words: ['Software Engineer', 'Software Engineer', 'Software Engineer'],
		Loop: true,
		typeSpeed: 20,
		deleteSpeed: 10,
		delaySpeed: 2000,
	});
	return (
		<div className="w-1/2 flex flex-col gap-10">
			<div className="flex flex-col gap-3">
				<h5 className="text-lg font-normal">YOU ARE WELCOME</h5>
				<h2 className="text-4xl font-bold text-white">
					I am <span className="l capitalize">Rutagarama Axcel</span>{' '}
				</h2>
				<h3 className="text-3xl font-bold text-white">
					<span>{text}</span>
				</h3>
				<p className="text-base font-bodyFont leading-6 tracking-wide">
					I am A Web And Mobile Developer,With Experience of more than 3 Years.
					I Am Very Much Expert In HTML, CSS,Database Design. I Am Well
					Organized, Efficient, And Self-Motivated. My Key To Success Has Been
					To Learn Quickly, Hard Work And Being Passionate About What I Do
				</p>
			</div>
			<div>
				<h2 className="flex-base uppercase font-titleFont mb-4">Connect :</h2>
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
		</div>
	);
}

export default Leftbanner;
