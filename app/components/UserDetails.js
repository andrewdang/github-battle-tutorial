import React, { PropTypes } from 'react'

const UserDetails = (user) => {
  return (
     <div>
      {!!user.score && <li><h3><b>Score:</b> {user.score}</h3></li>}

      <li>
        <img src={user.info.avatar_url} className="u-max-full-width" />
      </li>

      {user.info.name && <li><b>Name:</b> {user.info.name}</li>}

      <li>
        <b>Username: </b>
        {user.info.login}
      </li>

      {user.info.location && <li><b>Location:</b> {user.info.location}</li>}
      {user.info.company && <li><b>Company:</b> {user.info.company}</li>}

      <li>
        <b>Followers: </b>
        {user.info.followers}
      </li>

      <li>
        <b>Following: </b>
        {user.info.following}
      </li>

      <li>
        <b>Public Repos: </b>
        {user.info.public_repos}
      </li>

      {user.info.blog && <li><b>Site:</b> <a href={user.info.blog} target='_blank'> {user.info.blog}</a></li>}
    </div>
  )
}

UserDetails.propTypes = {
  score: PropTypes.number,
  info: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    blog: PropTypes.string,
    company: PropTypes.string,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    location: PropTypes.string,
    login: PropTypes.string.isRequired,
    name: PropTypes.string,
    public_repos: PropTypes.number.isRequired
  })
}

export default UserDetails
