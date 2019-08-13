import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/hero"

const IndexPage = () => (
  <Layout>
    <Hero>
      <p>Frontend Developer. Loves React. Makes cool things.</p>
    </Hero>
    <SEO title="Home" />
  </Layout>
)

export default IndexPage
