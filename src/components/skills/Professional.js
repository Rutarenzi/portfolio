import React from 'react';
import { motion } from 'framer-motion';

const Professional = () => {
	return (
		<div className="w-full flex gap-20">
			<div className="w-1/2">
				<div className="py-12 font-titleFont">
					{/* <p className="text-sm text-designColor tracking-[4px]">2017 - 2010</p> */}
					<h2 className="text-4xl font-bold">Front-End</h2>
				</div>
				<div className="w-full mt-14 flex flex-col gap-4 ">
					<div className="overflow-x-hidden">
						<p className="text-sm uppercase font-medium">Figma</p>
						<motion.span
							initial={{ x: '-100%', opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.5, delay: 0.5 }}
							className="w-full h-2 bgOpacity inline-flex rounded-md mt-2"
						>
							<span
								className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-cyan-500
                    to-indigo-500 rounded-md relative"
							>
								<span className="absolute -top-7 right-0">80%</span>
							</span>
						</motion.span>
					</div>
					<div className="overflow-x-hidden">
						<p className="text-sm uppercase font-medium">HTML</p>
						<motion.span
							initial={{ x: '-100%', opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.5, delay: 0.5 }}
							className="w-full h-2 bgOpacity inline-flex rounded-md mt-2"
						>
							<span
								className="w-[85%] h-full bg-gradient-to-r from-blue-600 via-cyan-500
                    to-indigo-500 rounded-md relative"
							>
								<span className="absolute -top-7 right-0">85%</span>
							</span>
						</motion.span>
					</div>

					<div className="overflow-x-hidden">
						<p className="text-sm uppercase font-medium">CSS</p>
						<motion.span
							initial={{ x: '-100%', opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.5, delay: 0.5 }}
							className="w-[70%] h-2 bgOpacity inline-flex rounded-md mt-2"
						>
							<span
								className="w-full h-full bg-gradient-to-r from-blue-600 via-cyan-500
                    to-indigo-500 rounded-md relative"
							>
								<span className="absolute -top-7 right-0">70%</span>
							</span>
						</motion.span>
					</div>

					<div className="overflow-x-hidden">
						<p className="text-sm uppercase font-medium">Javascript</p>
						<motion.span
							initial={{ x: '-100%', opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.5, delay: 0.5 }}
							className="w-full h-2 bgOpacity inline-flex rounded-md mt-2"
						>
							<span
								className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-cyan-500
                    to-indigo-500 rounded-md relative"
							>
								<span className="absolute -top-7 right-0">95%</span>
							</span>
						</motion.span>
					</div>

					<div className="overflow-x-hidden">
						<p className="text-sm uppercase font-medium">React</p>
						<motion.span
							initial={{ x: '-100%', opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.5, delay: 0.5 }}
							className="w-full h-2 bgOpacity inline-flex rounded-md mt-2"
						>
							<span
								className="w-[75%] h-full bg-gradient-to-r from-blue-600 via-cyan-500
                    to-indigo-500 rounded-md relative"
							>
								<span className="absolute -top-7 right-0">75%</span>
							</span>
						</motion.span>
					</div>

					<div className="overflow-x-hidden">
						<p className="text-sm uppercase font-medium">React Native</p>
						<motion.span
							initial={{ x: '-100%', opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.5, delay: 0.5 }}
							className="w-full h-2 bgOpacity inline-flex rounded-md mt-2"
						>
							<span
								className="w-[60%] h-full bg-gradient-to-r from-blue-600 via-cyan-500
                    to-indigo-500 rounded-md relative"
							>
								<span className="absolute -top-7 right-0">60%</span>
							</span>
						</motion.span>
					</div>
				</div>
			</div>
			<div className="w-1/2">
				<div className="py-12 font-titleFont">
					{/* <p className="text-sm text-designColor tracking-[4px]">2017 - 2010</p> */}
					<h2 className="text-4xl font-bold">Back-End</h2>
				</div>
				<div className="w-full mt-14 flex flex-col gap-4">
					<div className="overflow-x-hidden">
						<p className="text-sm uppercase font-medium">PHP</p>
						<motion.span
							initial={{ x: '-100%', opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.5, delay: 0.5 }}
							className="w-full h-2 bgOpacity inline-flex rounded-md mt-2"
						>
							<span
								className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-cyan-500
                    to-indigo-500 rounded-md relative"
							>
								<span className="absolute -top-7 right-0">90%</span>
							</span>
						</motion.span>
					</div>
					<div className="overflow-x-hidden">
						<p className="text-sm uppercase font-medium">LARAVEL</p>
						<motion.span
							initial={{ x: '-100%', opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.5, delay: 0.5 }}
							className="w-[60%] h-2 bgOpacity inline-flex rounded-md mt-2"
						>
							<span
								className="w-full h-full bg-gradient-to-r from-blue-600 via-cyan-500
                    to-indigo-500 rounded-md relative"
							>
								<span className="absolute -top-7 right-0">60%</span>
							</span>
						</motion.span>
					</div>

					<div className="overflow-x-hidden">
						<p className="text-sm uppercase font-medium">NODEJS</p>
						<motion.span
							initial={{ x: '-100%', opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.5, delay: 0.5 }}
							className="w-[95%] h-2 bgOpacity inline-flex rounded-md mt-2"
						>
							<span
								className="w-full h-full bg-gradient-to-r from-blue-600 via-cyan-500
                    to-indigo-500 rounded-md relative"
							>
								<span className="absolute -top-7 right-0">95%</span>
							</span>
						</motion.span>
					</div>

					<div className="overflow-x-hidden">
						<p className="text-sm uppercase font-medium">SQL</p>
						<motion.span
							initial={{ x: '-100%', opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.5, delay: 0.5 }}
							className="w-full h-2 bgOpacity inline-flex rounded-md mt-2"
						>
							<span
								className="w-full h-full bg-gradient-to-r from-blue-600 via-cyan-500
                    to-indigo-500 rounded-md relative"
							>
								<span className="absolute -top-7 right-0">100%</span>
							</span>
						</motion.span>
					</div>

					<div className="overflow-x-hidden">
						<p className="text-sm uppercase font-medium">POSTGRESQL</p>
						<motion.span
							initial={{ x: '-100%', opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.5, delay: 0.5 }}
							className="w-full h-2 bgOpacity inline-flex rounded-md mt-2"
						>
							<span
								className="w-[71%] h-full bg-gradient-to-r from-blue-600 via-cyan-500
                    to-indigo-500 rounded-md relative"
							>
								<span className="absolute -top-7 right-0">71%</span>
							</span>
						</motion.span>
					</div>

					<div className="overflow-x-hidden">
						<p className="text-sm uppercase font-medium">MONGODB</p>
						<motion.span
							initial={{ x: '-100%', opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.5, delay: 0.5 }}
							className="w-[50%] h-2 bgOpacity inline-flex rounded-md mt-2"
						>
							<span
								className="w-full h-full bg-gradient-to-r from-blue-600 via-cyan-500
                    to-indigo-500 rounded-md relative"
							>
								<span className="absolute -top-7 right-0">50%</span>
							</span>
						</motion.span>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Professional;
