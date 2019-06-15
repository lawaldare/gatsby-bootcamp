import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const NotFound = () => {
  return (
    <Layout>
      <Head title="404" />
      <div className="container">
        <h1>Page Not Found</h1>
        <p>
          <Link to="/">&larr; Head Home</Link>
        </p>
      </div>
    </Layout>
  )
}

export default NotFound
