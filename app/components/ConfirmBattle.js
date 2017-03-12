import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import UserDetails from './UserDetails'
import UserDetailsWrapper from './UserDetailsWrapper'
import Loading from './Loading'

const ConfirmBattle = (props) => {
  return props.isLoading === true
    ? <Loading speed={500} text='Waiting' />
    : <div>
        <h1>Confirm Players</h1>

        <div className="row">
          <UserDetailsWrapper header="Player One">
            <UserDetails info={props.playersInfo[0]} />
          </UserDetailsWrapper>

          <UserDetailsWrapper header="Player Two">
            <UserDetails info={props.playersInfo[1]} />
          </UserDetailsWrapper>
        </div>

        <div className="action-btns">
          <div className="row">
            <button
              className="button-primary u-full-width"
              onClick={props.onInitiateBattle}
            >
              Start battle!
            </button>
          </div>

          <div className="row">
            <Link to='/playerOne'>
              <button
                className="button u-full-width"
                onClick={props.onInitiateBattle}
              >
                Start Over
              </button>
            </Link>
          </div>
        </div>
      </div>
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired
}

export default ConfirmBattle
