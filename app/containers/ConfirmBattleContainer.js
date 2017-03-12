import React, { Component } from 'react'
import ConfirmBattle from '../components/ConfirmBattle'
import githubHelpers from '../utils/githubHelpers'

class ConfirmBattleContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      playersInfo: []
    }
  }

  componentDidMount() {
    const query = this.props.location.query

    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
      .then((players) => {
        this.setState({
          isLoading: false,
          playersInfo: [players[0], players[1]]
        })
      })
  }

  handleInitiateBattle() {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      }
    })
  }

  render() {
    const { isLoading, playersInfo } = this.state

    return (
      <ConfirmBattle
        isLoading={isLoading}
        playersInfo={playersInfo}
        onInitiateBattle={this.handleInitiateBattle.bind(this)}
      />
    )
  }
}

ConfirmBattleContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default ConfirmBattleContainer
