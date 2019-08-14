import React from "react"
import {Link} from "gatsby"
import Img from "gatsby-image"

const CardList = ({children}) => <div className="c-cardlist-container__flex">{children}</div>

CardList.Card = function Card({link, img, title, icon, children}) {
  return (
    <Link to={link} style={{textDecoration: "none"}}>
      <div className="c-card-container">
        <div>
          <Img className="c-card-img" fluid={img}/>
        </div>
        <div className="c-card-title">{title}</div>
        <div className="c-card-content">
          {children}
        </div>
      </div>
    </Link>
  )
}

export default CardList;
