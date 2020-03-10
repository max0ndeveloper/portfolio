import React from "react";
import {NavLink} from "react-router-dom";

export const PortfolioCard = ({title, history, onClick}) => {
  console.log(history);
  // const cardTitle = ["React", "JS", "HTML+CSS"];
  return (
      // <NavLink to='/' className="worksCard">
      //{/*</NavLink>*/
        <div className="worksCard" onClick={onClick}>
        {/*<div className="worksCard image">*/}
        {/*  <img src="" alt=""/>*/}
        {/*</div>*/}
        <p className="worksCard__title">
          {title}
        </p>
        </div>


        )

        };

