import React from "react";
import {PortfolioCard} from "../Components/PortfolioCard/PortfolioCard";


export const Portfolio = ({history}) => {
	return(
			<section className='works'>
				<div className="container flex">
					<div className="card">
						My Works
					</div>

					<PortfolioCard title='React'
					               // history={history}
					               onClick={() => {
						               history.push("/react")
					               }}
					/>


					<PortfolioCard title='JavaScript'
					               onClick={() => {
						               history.push("/javascript")
					               }}
					/>
					<PortfolioCard title='HTML+CSS'/>


				</div>


</section>

	)
};

