import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer className="page-footer">
      <div className="footer-copyright">
        <div className="container">
          Created by {data.site.siteMetadata.author}, © 2019
        </div>
      </div>
    </footer>
  )
}

export default Footer
