import React from "react"
import PropTypes from "prop-types"
export default function Balloon({text}) {
  return (<div className="c-speech-bubble">{text}</div>)
}
Balloon.propTypes = {
  text: PropTypes.string.isRequired
}