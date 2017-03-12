import axios from 'axios'

const id = '7eda7a50308db7c467e3af76889f80c0b361473f'
const sec = 'SEC ID'
const param = `?client_id=${id}&client_secret=${sec}`


function getUserInfo(username) {
  return axios.get('https://api.github.com/users/' + username)
}

function getRepos(username) {
  return axios.get('https://api.github.com/users/' + username + '/repos?per_page=100');
}

function getTotalStars(repos) {
  return repos.data.reduce((prev, current) => {
    return prev + current.stargazers_count
  }, 0)
}

function getPlayersData(player) {
  return getRepos(player.login)
    .then(getTotalStars)
    .then((totalStars) => {
      return {
        followers: player.followers,
        totalStars: totalStars
      }
    })
}

function calculateScores(players) {
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars
  ]
}

let helpers = {
  getPlayersInfo: function(players) {
    return axios.all(players.map((username) => {
      return getUserInfo(username)
    })).then((info) => {
      return info.map((user) => {
        return user.data
      })
    }).catch((err) => {
      console.log('Error in getPlayersInfo', err)
    })
  },
  battle: function(players) {
    const playerOneData = getPlayersData(players[0])
    const playerTwoData = getPlayersData(players[1])

    return axios.all([playerOneData, playerTwoData])
      .then(calculateScores)
      .catch(error => console.log('error', error))
  }
}

export default helpers
