import React from "react"
import {ReactComponent as HeroImage} from '../images/my-hero.svg'
import "../styles/component-hero.scss"

export default function Hero({children=[]}) {
  return (
    <div className="c-hero-container__lg">
      <HeroImage className="c-hero-bg__lg"/>
      {children}
    </div>
  )
}
