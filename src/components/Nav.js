import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import "./Nav.css"

const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <nav>
      <div class="nav-wrapper container">
        <Link to="/" className="brand-logo">
          {data.site.siteMetadata.title}
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/about" className="link" activeClassName="active-item">
              About
            </Link>
          </li>
          <li>
            <Link to="/blog" activeClassName="active-item">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" activeClassName="active-item">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
