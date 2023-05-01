import React from 'react';
import SkillCard from './SkillCard';

const Education = () => {
	return (
		<div className="w-full flex gap-20">
			<div>
				<div className="py-12 font-titleFont">
					{/* <p className="text-sm text-designColor tracking-[4px]">2017 - 2010</p> */}
					<h2 className="text-4xl font-bold">Eduction </h2>
				</div>
				<div
					className="w-full mt-14 h-[1000px] border-l-[6px] border-l-[#026469]
    border-opacity-30 flex flex-col gap-10"
				>
					<SkillCard
						title="BSC in Computer Science"
						content="University of Rwanda(College of Science and Technology)"
						description="Software developer with 2+ years of experience 
            in software development.
             I am a solution-oriented full-stack developer, a lifelong learner, and
             Software developer with 2+ years of experience 
            in software development.
             I am a solution-oriented full-stack developer, a lifelong learner, and"
					/>
					<SkillCard
						title="BSC in Computer Science"
						content="University of Rwanda(College of Science and Technology)"
						description="Software developer with 2+ years of experience 
            in software development.
             I am a solution-oriented full-stack developer, a lifelong learner, and
             Software developer with 2+ years of experience 
            in software development.
             I am a solution-oriented full-stack developer, a lifelong learner, and"
					/>
					<SkillCard
						title="BSC in Computer Science"
						content="Andela Team Leadership Program"
						description="Software developer with 2+ years of experience 
            in software development.
             I am a solution-oriented full-stack developer, a lifelong learner, and
             Software developer with 2+ years of experience 
            in software development.
             I am a solution-oriented full-stack developer, a lifelong learner, and"
					/>
				</div>
			</div>
			<div>
				<div className="py-12 font-titleFont">
					{/* <p className="text-sm text-designColor tracking-[4px]">2017 - 2010</p> */}
					<h2 className="text-4xl font-bold">Experience </h2>
				</div>
				<div
					className="w-full mt-14 h-[1000px] border-l-[6px] border-l-[#026469]
    border-opacity-30 flex flex-col gap-10"
				>
					<SkillCard
						title="BSC in Computer Science"
						content="University of Rwanda(College of Science and Technology)"
						description="Software developer with 2+ years of experience 
            in software development.
             I am a solution-oriented full-stack developer, a lifelong learner, and
             Software developer with 2+ years of experience 
            in software development.
             I am a solution-oriented full-stack developer, a lifelong learner, and"
					/>
					<SkillCard
						title="BSC in Computer Science"
						content="University of Rwanda(College of Science and Technology)"
						description="Software developer with 2+ years of experience 
            in software development.
             I am a solution-oriented full-stack developer, a lifelong learner, and
             Software developer with 2+ years of experience 
            in software development.
             I am a solution-oriented full-stack developer, a lifelong learner, and"
					/>
					<SkillCard
						title="BSC in Computer Science"
						content="Andela Team Leadership Program"
						description="Software developer with 2+ years of experience 
            in software development.
             I am a solution-oriented full-stack developer, a lifelong learner, and
             Software developer with 2+ years of experience 
            in software development.
             I am a solution-oriented full-stack developer, a lifelong learner, and"
					/>
				</div>
			</div>
		</div>
	);
};

export default Education;
