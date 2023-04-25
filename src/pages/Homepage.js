import React from 'react';
// import '../assets/styles/main.scss';
import NavBar from '../components/navBar/NavBar';
import Banner from '../components/banner/Banner';
import Feature from '../components/feature/Feature';
import Blog from '../components/blogs/Blog';

export default function Homepage() {
	return (
		<div className="w-full  h-auto bg-bodyColor text-lightText">
			<div className="max-w-screen-2xl mx-auto px-16">
				<NavBar />
				<Banner />
				<Feature />
				<Blog />
			</div>
		</div>
	);
}
