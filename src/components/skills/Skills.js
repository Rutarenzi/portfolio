import React, { useState } from 'react';
import Title from '../design/Title';
import Education from './Education';
import Professional from './Professional';
import Experience from './Experience';

const Skills = () => {
	const [education, setEducation] = useState(true);
	const [professional, setProfessional] = useState(false);
	const [experience, setExperience] = useState(false);

	return (
		<section
			id="skills"
			className="w-full py-20 border-b-[1px] border-b-borderColor"
		>
			<div className="flex justify-center text-center">
				<Title title="Skills" />
			</div>
			<div className="">
				<ul className="w-full grid grid-cols-3">
					<li
						className={`${
							education
								? 'border-borderColor bg-opacity-80 rounded-lg'
								: 'border-transparent'
						} skillsLi `}
						onClick={() => {
							setEducation(true) &
								setProfessional(false) &
								setExperience(false);
						}}
					>
						Education
					</li>
					<li
						className={`${
							professional
								? 'border-borderColor bg-opacity-80 rounded-lg'
								: 'border-transparent'
						} skillsLi `}
						onClick={() => {
							setEducation(false) &
								setProfessional(true) &
								setExperience(false);
						}}
					>
						Skills
					</li>
					<li
						className={`${
							experience
								? 'border-borderColor bg-opacity-80 rounded-lg'
								: 'border-transparent'
						} skillsLi `}
						onClick={() => {
							setEducation(false) &
								setProfessional(false) &
								setExperience(true);
						}}
					>
						Experience
					</li>
				</ul>
			</div>
			{education && <Education />}
			{professional && <Professional />}
			{experience && <Experience />}
		</section>
	);
};

export default Skills;
