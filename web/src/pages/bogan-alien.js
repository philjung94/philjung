import React from "react"
import Layout from "../components/layout"
import Stars from "../images/c-img__stars.svg"
import Divider from "../components/divider"
import Intro from "../components/intro"
import Alien from "../components/alien"
const AlienWidget = Alien.Widget

export default function BoganAlien() {
  return (
    <Layout bg={Stars}>
      <Intro/>
      <Divider height="5rem"/>
      <AlienWidget/>
    </Layout>
  )
}