import React from "react"
import Layout from "../components/layout"
import Stars from "../images/c-img__stars.svg"
import Divider from "../components/divider"
import Intro from "../components/intro"

export default function MyPlayground() {
  return (
    <Layout bg={Stars}>
      <Intro/>
      <Divider height="9rem"/>
    </Layout>
  )
}