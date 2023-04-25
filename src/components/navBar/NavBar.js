import React from 'react';
import { logo } from '../../assets/index';
import { navLinksdata } from '../../constant';
import { Link } from 'react-scroll';

const NavBar = () => {
	return (
		<div className="w-full h-15 mx-auto sticky top-0 bg-bodyColor z-50 flex justify-between items-center font-titleFont border-b-[0px] border-b-gray-600">
			<div>
				<img src={logo} alt="logo" />
			</div>
			<div>
				<ul className="flex items-center gap-10">
					{navLinksdata.map(({ _id, title, link }) => {
						return (
							<li
								className="text-base font-normal text-gray-400 tracking-wide cursor-pointer
                    hover:text-designColor hover:border-b-[1px] hover:border-b-borderColor duration-300"
								key={_id}
							>
								<Link
									activeClass="active"
									to={link}
									smooth={true}
									offset={-70}
									duration={500}
								>
									{title}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default NavBar;
