import React from "react"

import Nav from "./Nav"
import Footer from "./footer"

import "./layout.css"

const Layout = props => {
  return (
    <div className="wrapper">
      <div className="main">
        <Nav />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
