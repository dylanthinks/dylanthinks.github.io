import React from "react"
import { Link } from "gatsby"
// import PropTypes from "prop-types"


const Footer = () => (
<div>  
  <ul> 
    <li><Link to="/About">Home</Link></li>
    <li><Link to="/Blog">Blog</Link></li>
    <li><Link to="/About">Projects</Link></li>
    <li><Link to="/About">LinkedIn</Link></li>
    <li><Link to="/About">Github</Link></li>
    <li><Link to="/About">Codepen</Link></li>
  </ul>

  <ul>
    <li><Link to="/About">Twitter</Link></li>
  </ul>

    <p>Copyright © Dylan Hinks {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a></p>
</div>
)

export default Footer