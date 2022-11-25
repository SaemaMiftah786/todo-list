import React from 'react'
// /import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Header(props) {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/">{props.title? props.title: "Todos List"}</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link className="nav-item nav-link active" to="/">Home</Link>
      <Link className="nav-item nav-link" to="/about">About</Link>
      {/* <Link className="nav-item nav-link" to="#">Pricing</Link>
      <Link className="nav-item nav-link disabled" to="#">Disabled</Link> */}
    </div>
  </div>
</nav>
    
    
  )
}


Header.propTypes = {
    //title: PropTypes.number.isRequired, // will throw error as proptype should be number is required
}

Header.defaultProps = {
    title: " New Title Here"
}