import React from "react"
import Layout from "../components/layout"
import Stars from "../images/c-img__stars.svg"
import Divider from "../components/divider"
import Alien from "../components/alien"
const AlienWidget = Alien.Widget

export default function BoganAlien() {
  return (
    <Layout bg={Stars}>
      <Divider height="9rem"/>
      <AlienWidget/>
    </Layout>
  )
}