import React, {useState} from 'react';
import {Burger} from "../Burger/Burger";
import {NavLink, BrowserRouter} from 'react-router-dom';



export const Hdr = () => {
	const [showBurger, setShowBurger] = useState(false);

	return(
			<header className={"header"}>
				<div className={"container"}>
					<div className={"header__body"}>
						<div className={"header__logo"}>
							<img src="https://i.ibb.co/jHvmKk1/avatar.png" alt=""/>
						</div>
						<div className={ showBurger ? `header__burger active` : "header__burger"}>

						<Burger burgerMenu={()=> setShowBurger( (prevState => !prevState))}/>
					</div>
						<nav className={ showBurger ? `header__menu active` : "header__menu "}>
							<ul className="header__list">
								<li>
									<NavLink to='/' className="header__link">Home </NavLink>
									<NavLink to="/about" className="header__link">About </NavLink>
									<NavLink to="/portfolio" className="header__link">Portfolio </NavLink>
									<NavLink to="/contact" className="header__link">Contact </NavLink>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</header>

	)
};

export default Hdr;