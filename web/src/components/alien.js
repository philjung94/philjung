import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { ReactComponent as AlienSVG } from "../images/c-img__alien.svg"
import Balloon from "./balloon"
import boganism from "boganipsum"

export default function Alien({toSpeak = '', done}) {
  const [speech, setSpeech] = useState(null)
  useEffect(() => {
    if (toSpeak) onClick()
  })
  const onClick = () => {
    if (toSpeak) done()
    if (!speech) {
      const s = toSpeak || boganism({paragraphs: 1}).slice(0, 50)
      setSpeech(s)
      
      if (!window.speechSynthesis) {
        alert("Your browser does not support the SpeechSynthesis API.")
        return
      }

      const msg = new SpeechSynthesisUtterance()
      msg.voice = window.speechSynthesis.getVoices().Alex
      msg.text = s
      msg.onend = () => setSpeech(null)
      speechSynthesis.speak(msg)
    }
  }
  return (
    <div className="c-alien-container">
      <div className="c-alien-wrapper">
        <AlienSVG onClick={onClick}/>
      </div>
      {speech && <Balloon text={speech}/>}
    </div>
  )
}

Alien.propTypes = {
  toSpeak: PropTypes.string,
  done: PropTypes.func
}