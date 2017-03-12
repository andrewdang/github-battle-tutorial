import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import routes from './config/routes'

const USER_DATA = {
  name: 'Andrew Dang',
  username: 'andrewdang17',
  image: 'https://s3.amazonaws.com/cms-uploads.adoptapet.com/4/e/7/26.png'
}

ReactDOM.render(
  routes,
  document.getElementById('app')
)
