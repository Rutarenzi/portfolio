import React from 'react';
import Title from '../design/Title';
import Card from './card';

function Feature() {
	return (
		<section
			id="about"
			className="w-full h-[700px] py-20   border-b-[1px] border-b-black border-b-borderColor"
		>
			<Title title="About Me" />
			<div className="flex gap-4">
				<Card
					title="Contact Me"
					description="E-mail: Rutagaramaaxcel@gmail.com Tel: +250792415011"
				/>
				<Card
					title="Who I am"
					description="
			Software developer with 2+ years of experience in software development.
			 I am a solution-oriented full-stack developer, a lifelong learner, and 
			 an adventurer with a background in computer science. My expertise lies in 
			 HTML, CSS, JAVASCRIPT(React, React Native, Nodejs), SQL, and PHP(Laravel). 
			 I enjoy development because of the satisfaction I get from overcoming challenges. looking forward to changing the world with IT expertise.

Skills & Technologies:
Swagger | CircleCi | Docker | Git | Github | Postman | Restful API | JWT | MongoDb | Postgresql | Figma | System design | Software Project Management | Object-Oriented programming | Networking "
				/>
			</div>
		</section>
	);
}

export default Feature;
