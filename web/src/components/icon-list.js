import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

export default function Iconography({icons}) {
  return (
    <div className="c-flex-container__default">
      {
        icons.map((icon, index) => (
          <a href={icon.href} key={index} style={{marginLeft: index > 0? '0.5rem' : '0'}}>
            <Img fixed={icon.src}/>
          </a>
        ))
      }
    </div>
  )
}

Iconography.propTypes = {
  icons: PropTypes.array
}