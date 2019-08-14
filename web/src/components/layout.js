import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "../styles/index.scss"

const Layout = ({ bg, children }) => {
  const data = useStaticQuery(graphql`
    query layoutQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="c-layout-container__default" style={{backgroundImage: `url(${bg})`}}>
      <Header {...data} />
      {children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  bg: PropTypes.string
}

export default Layout
