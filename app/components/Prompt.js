import React, { PropTypes } from 'react'

const Prompt = (props) => {
  const { onUpdateUser, onSubmitUser, username, header } = props

  return (
    <div className="twelve columns prompt">
      <h1>{header}</h1>

      <div>
        <form onSubmit={onSubmitUser}>
          <div className="row">
            <input
              type="text"
              className="u-full-width"
              placeholder="Github Username..."
              onChange={onUpdateUser}
              value={username}
            />
          </div>

          <div className="row">
            <input
              type="submit"
              className="button-primary u-full-width"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

Prompt.propTypes = {
  header: PropTypes.string.isRequired
}

export default Prompt
