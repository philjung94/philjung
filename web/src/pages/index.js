import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Alien from "../components/alien"
import Segment from "../components/segment"
import Iconography from "../components/icon-list"
import Stars from "../images/c-img__stars.svg"

const Divider = ({height}) => (<div className="divider" style={{height}}/>)

function Home({data}) {
  const icons = Object.entries(data).map(([key, value]) => ({
    href: ({
      liIcon: "https://www.linkedin.com/in/phil-j-99620992/",
      ghIcon: "https://github.com/philjung94"
    }[key]) || "/",
    src: value.childImageSharp.fixed
  }))
  return (
    <Layout bg={Stars}>
      <SEO title="Phil Jung"/>
      <p>Frontend Developer</p>
      <p> <span role="img" aria-label="Heart">❤️</span> React </p>
      <Divider/>
      <Iconography icons={icons}/>
      <Divider height="2rem"/>
      <AlienWidget/>
    </Layout>
  )
}

function AlienWidget() {
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

export const query = graphql`
  query {
    liIcon: file(relativePath: { eq: "i-li__blue.png" }) {
      childImageSharp {
        fixed(width: 32, height: 32) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    ghIcon: file(relativePath: { eq: "i-gh__white.png" }) {
      childImageSharp {
        fixed(width: 32, height: 32) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Home
