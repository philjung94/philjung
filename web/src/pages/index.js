import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Intro from "../components/intro"
import SEO from "../components/seo"
import Iconography from "../components/icon-list"
import Stars from "../images/c-img__stars.svg"
import Divider from "../components/divider"
import Segment from "../components/segment"

export default function Home({data}) {
  const icons = Object.entries(data).map(([key, value]) => ({
    href: ({
      liIcon: "https://www.linkedin.com/in/pjung319/",
      ghIcon: "https://github.com/philjung94"
    }[key]) || "/",
    src: value.childImageSharp.fixed
  }))
  return (
    <Layout bg={Stars}>
      <SEO title="Phil Jung"/>
      <Intro/>
      <Divider/>
      <Iconography icons={icons}/>
      <Divider height="2rem"/>
      <Segment.MainMenu/>
    </Layout>
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
