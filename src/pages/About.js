import React, { Component } from "react"
import { Link } from "gatsby" 

import Layout from "../components/layout"

class About extends Component {
  render() {
    return (
      <Layout>
        <h1>About</h1>
        <Link to="/">Home</Link>
      </Layout>
    )
  }
  
}

export default About