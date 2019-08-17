import React from "react"
import Img from "gatsby-image"

const CardList = ({children}) => <div className="c-cardlist-container__flex">{children}</div>

CardList.Card = function Card({title, desc, img, children}) {
  return (
    <div className="c-card-container">
      <div className="c-card-img"><Img fixed={img}/></div>
      <div className="c-card-title">{title}</div>
      {children && (
        <div className="c-card-content">
          {children}
        </div>
      )}
    </div>
  )
}

export default CardList;
