import React, { Component } from 'react'
import { Link } from 'react-router'

class Home extends Component {
  render() {
    return (
      <div className="row">
        <div className="twelve columns">

          <h1>Github Battle</h1>
          <p>Fight other devs.</p>
          <Link to='/playerOne'>
            <button type='button' className='button-primary'>
              Get Started
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Home
