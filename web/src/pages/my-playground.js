import React from "react"
import Layout from "../components/layout"
import Stars from "../images/c-img__stars.svg"
import Divider from "../components/divider"
import Intro from "../components/intro"
import Segment from "../components/segment"
export default function MyPlayground() {
  return (
    <Layout bg={Stars}>
      <Intro/>
      <Divider height="9rem"/>
      <Segment>
        <iframe width="1000px" height="600px" title="Game" src="https://playcanv.as/p/KEW3puu7/"/>
      </Segment>
    </Layout>
  )
}