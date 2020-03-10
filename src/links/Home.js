import React from "react";
import Typical from 'react-typical'


export const Home = () => {
	return(
			<section className="home">
				<div className="content__text">
					{/*<h1 className="helloText">*/}
					{/*	Hello!*/}
					{/*</h1>*/}
					{/*<h2>I'm Max. I'm a beginner Web-developer.</h2>*/}
					<Typical
							steps={['Hello!', 1000, "I'm Max. I'm a beginner web-developer.", 1000]}
							loop={1}
							wrapper="h1"
							className="hello__text"
					/>
				</div>
			</section>

	)
};

