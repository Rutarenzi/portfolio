import React from 'react';
// import '../assets/styles/main.scss';
import NavBar from '../components/navBar/NavBar';
import Banner from '../components/banner/Banner';
import Feature from '../components/feature/Feature';
import Blog from '../components/blogs/Blog';
import Skills from '../components/skills/Skills';
import ContactUs from '../components/contactus/ContactUs';
import About from '../components/about/About';
import Aboutbotton from '../components/about/Aboutbotton';

export default function Homepage() {
	return (
		<div className="w-full  h-auto bg-bodyColor text-lightText px-4">
			<NavBar />
			<div className="max-w-screen-2xl mx-auto px-16">
				<Banner />
				<Feature />
				<Skills />
				<ContactUs />
				<Blog />
				<About />
				<Aboutbotton />
			</div>
		</div>
	);
}
