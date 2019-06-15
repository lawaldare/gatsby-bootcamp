import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

import "materialize-css/dist/css/materialize.min.css"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <div className="container">
        <h1>Hello</h1>
        <h2>I'm Dare Lawal, a Software Engineer living in Nigeria</h2>
        <p>
          Need a developer? <Link to="/contact">Contact me</Link>
        </p>
      </div>
    </Layout>
  )
}

export default IndexPage
