import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import PropTypes from "prop-types"
import CardList from "./card-list"
import Divider from "./divider"
export default function Segment({children}) {
  return (
    <div className="c-segment-container__default">
      {children}
    </div>
  )
}

Segment.MainMenu = function SegmentDemo() {
  const {alien, livefeed, playground} = useStaticQuery(
    graphql`
      query {
        alien: file(relativePath: { eq: "c-img-3.png" }) {
          childImageSharp {
            fixed(width: 250, height: 250) {
              ...GatsbyImageSharpFixed
            }
          }
        }      
        playground: file(relativePath: { eq: "c-img-4.png" }) {
          childImageSharp {
            fixed(width: 250, height: 250) {
              ...GatsbyImageSharpFixed
            }
          }
        }      
        livefeed: file(relativePath: { eq: "c-img-1.png" }) {
          childImageSharp {
            fixed(width: 250, height: 250) {
              ...GatsbyImageSharpFixed
            }
          }
        }      
      }
    `
  )
  const mapImgToFixed = i => (( i || {} )["childImageSharp"] || {}).fixed
  return (
    <Segment>
      <h1>Code demos</h1>
        <CardList>
          <Link to="/bogan-alien">
            <CardList.Card title="Bogan alien" img={mapImgToFixed(alien)}/>
          </Link>
          <Link to="/my-playground">
            <CardList.Card title="My playground" img={mapImgToFixed(playground)}/>
          </Link>
          <Link to="/github-livefeed">
            <CardList.Card title="Github livefeed" img={mapImgToFixed(livefeed)}/>
          </Link>
        </CardList>
      <h1>Client projects</h1>
        <a href="https://axis.academyxi.com">
          <button>Axis - Students Hub</button>
        </a>
        <br/>
        <a href="https://apps.apple.com/au/app/easiar-viewer/id886516339">
          <button>Easiar - Mobile App</button>
        </a>
      <Divider height={"2rem"}/>
    </Segment>
  )
}

Segment.propTypes = {
  children: PropTypes.node.isRequired
}