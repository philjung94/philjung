import React from "react"
import PropTypes from "prop-types"

export default function Segment({children}) {
  return (
    <div className="c-segment-container__default">
      {children}
    </div>
  )
}

Segment.MainMenu = function SegmentDemo() {
  return (
    <Segment>
      <h1>Code examples and demos</h1>
        <button>Bogan alien</button>
        <button>Github livefeed</button>
        <button>Swipeable views</button>
        <button>Todo list w/ DnD</button>
      <h1>Past client projects</h1>
        <button>Axis - Student Hub</button>
        <button>Easiar - iOS App</button>
      <h1>Experience</h1>
        <button>Auggd - frontend developer</button>
        <button>Academy Xi - full stack developer</button>
        <button>Academy Xi - AR and VR mentor</button>
      <h1>Skills</h1>
        <ul>
          <li>HTML5</li> 
          <li>CSS3, SASS</li>
          <li>Vanilla JS</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Web Design</li>
          <li>Unity C#</li>
        </ul>
    </Segment>
  )
}

Segment.propTypes = {
  children: PropTypes.node.isRequired
}