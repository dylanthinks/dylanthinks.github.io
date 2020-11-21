import React, { Component } from "react"
import { Link } from "gatsby" 

import Layout from "../components/layout"

class Blog extends Component { 
  render() {
    return (
      <Layout>
        <h1>Blog</h1>
        <a href="google.com">Patreon</a>
        <Link to="/">Home</Link>
      </Layout>
    )
  }
}

export default Blog