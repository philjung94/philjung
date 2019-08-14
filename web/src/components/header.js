import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ site }) => (
  <header className="c-header-container">
    <h1 className="c-header-title">
      <Link to="/">
        {site.siteMetadata.title}
      </Link>
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: "",
}

export default Header
