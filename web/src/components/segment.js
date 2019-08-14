import React from "react"
import PropTypes from "prop-types"

export default function Segment({children}) {
  return (
    <div className="c-segment-container__default">
      {children}
    </div>
  )
}

Segment.propTypes = {
  children: PropTypes.node.isRequired
}