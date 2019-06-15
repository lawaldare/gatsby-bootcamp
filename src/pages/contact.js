import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const Contact = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <div className="container">
        <h1>Contact</h1>
        <p className="flow-text">
          Contact me on{" "}
          <a href="https://twitter.com/lawaldarekayode" target="_blank">
            Twitter
          </a>
        </p>
      </div>
    </Layout>
  )
}

export default Contact
