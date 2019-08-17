import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { ReactComponent as AlienSVG } from "../images/c-img__alien.svg"
import Balloon from "./balloon"
import Segment from "./segment"
import Divider from "./divider"
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

Alien.Widget = function AlienWidget() {
  const init = {toSpeak: '', input: ''}
  const [speech, setSpeech] = useState({...init})
  const onClick = () => setSpeech({toSpeak: speech.input, input: ''})
  const onChange = (e) => setSpeech({input: e.target.value.slice(0, 40)}) // Cap the length
  return (
    <Segment>
      <Alien toSpeak={speech.toSpeak} done={() => setSpeech({...init})}/> 
      <h1>Meet Alex - a sassy alien.</h1>
      <ol>
        <li>Get your headphones on.</li>
        <li>Click on him to hear him talk.</li>
        <li>Type him something else to say!</li>
      </ol>
      <Divider/>
      <div className="c-flex-container__default">
        <input 
          onBlur={onClick} 
          onKeyDown={(e) => e.key === "Enter" && onClick()}
          placeholder="Be sensible." 
          value={speech.input} 
          onChange={onChange}
        />
        <button onClick={onClick}>
          Speak
        </button>
      </div>
      <Divider height="2rem"/>
    </Segment>
  )
}

Alien.propTypes = {
  toSpeak: PropTypes.string,
  done: PropTypes.func
}