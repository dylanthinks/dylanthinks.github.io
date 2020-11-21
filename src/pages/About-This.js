import React, { Component } from "react"
import { Link } from "gatsby" 

import Layout from "../components/layout"

class About extends Component {
  render() {
    return (
      <Layout>
        <h1>About This Site</h1>
        <p>The tech stack I used for this website: GatsbyJS. </p>
        <Link to="/">Home</Link>
      </Layout>
    )
  }
  
}

export default About