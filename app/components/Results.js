import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import UserDetails from './UserDetails'
import UserDetailsWrapper from './UserDetailsWrapper'

const StartOver = () => {
  return (
    <div>
      <Link to='/playerOne'>
        <button className="button button-primary u-full-width">
          Start Over
        </button>
      </Link>
    </div>
  )
}

const Results = (props) => {
  if (props.isLoading === true) {
    return (
      <h2>Loading...</h2>
    )
  }

  if (props.scores[0] === props.scores[1]) {
    return (
      <div className="row">
        <h1>It's a Tie!</h1>
        <StartOver />
      </div>
    )
  }

  const winningIndex = props.scores[0] > props.scores[1] ? 0 : 1
  const losingIndex = winningIndex === 0 ? 1 : 0

  return (
    <div>
      <h1>Results</h1>
      <div className='row'>
        <UserDetailsWrapper header='Winner!'>
          <UserDetails scores={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
        </UserDetailsWrapper>

        <UserDetailsWrapper header='Loser'>
          <UserDetails scores={props.scores[losingIndex]} info={props.playersInfo[losingIndex]} />
        </UserDetailsWrapper>
      </div>

      <div className="row action-btns">
        <StartOver />
      </div>
    </div>
  )
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}

export default Results
