import React, { PropTypes } from 'react'

const UserDetailsWrapper = (props) => {
  return (
    <div className="six columns">
      <h3>{props.header}</h3>
      {props.children}
    </div>
  )
}

export default UserDetailsWrapper
