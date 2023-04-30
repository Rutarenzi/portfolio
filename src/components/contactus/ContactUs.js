import React from 'react';
import Title from '../design/Title';
import ContactInfo from './ContactInfo';

const ContactUs = () => {
	return (
		<section
			id="contactus"
			className="w-full py-20 border-b-[1px] border-b-borderColor"
		>
			<div className="flex justify-center items-center text-center">
				<Title title="Contact-Us" />
			</div>
			<div className="w-full">
				<div className="w-full h-auto flex justify-between">
					<ContactInfo />
					<div
						className="w-[50%] h-full py-10 bg-gradient-to-r from-[#1e2024]
                    to-[#23272b] flex flex-col gap-8 p-8 rounded-lg "
					>
						<form className="w-full flex flex-col gap-6 py-2 ">
							<div className="w-full flex gap-4">
								<div className="w-1/2 flex flex-col gap-4">
									<p className="text-sm text-gray-400 uppercase tracking-wide ">
										Your Name:
									</p>
									<input className="inputer" type="text" />
								</div>
								<div className="w-1/2 flex flex-col gap-4">
									<p className="text-sm text-gray-400 uppercase tracking-wide ">
										Your Number:
									</p>
									<input className="inputer" type="text" />
								</div>
							</div>
							<div className="flex flex-col gap-4">
								<p className="text-sm text-gray-400 uppercase tracking-wide ">
									E-mail:
								</p>
								<input className="inputer" type="text" />
							</div>
							<div className="flex flex-col gap-4">
								<p className="text-sm text-gray-400 uppercase tracking-wide ">
									Message:
								</p>
								<textArea
									cols="30"
									rows="7"
									className="textAreaInputer"
								></textArea>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactUs;
