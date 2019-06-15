import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const About = () => {
  return (
    <Layout>
      <Head title="About" />
      <div className="container">
        <h1>About</h1>
        <p className="flow-text">This is the About Page</p>
        <p>
          <Link to="/contact">Contact Me</Link>
        </p>
      </div>
    </Layout>
  )
}

export default About
