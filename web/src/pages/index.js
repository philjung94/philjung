import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Button from "../components/button"

const GithubWidget = ({icon, data}) => (
  <div 
    style={{
      display: 'flex', 
      flexFlow: 'column nowrap', 
      justifyContent: 'center', 
      alignItems: 'center'
    }}
  >
    <div style={{display: 'flex', flexFlow: 'row nowrap', alignItems: 'center'}}>
      <a href="https://github.com/philjung94">
        <Img fixed={icon.childImageSharp.fixed}/>
      </a>
    </div>
    {/*<Img 
      style={{width: "40rem", height: "20rem"}} 
      fluid={ghData.childImageSharp.fluid}
    />*/}
  </div>
)

export default function Home({data}) {
  return (
    <Layout>
      <SEO title="Phil Jung"/>
      <Hero>
        <p>Frontend Developer</p>
        <p> ❤️ React </p>
        <br/>
        <GithubWidget icon={data.ghIcon} data={data.ghData}/>
      </Hero> 
      <div style={{width: "100px", height: "4000px"}}/>
    </Layout>
  )
}

export const query = graphql`
  query {
    ghData: file(relativePath: { eq: "c-img-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 900, quality: 100) {
          ...GatsbyImageSharpFluid
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
