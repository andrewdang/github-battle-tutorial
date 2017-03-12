import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class ProfilePic extends Component {
  render() {
    return (
      <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
    )
  }
}

class Link extends Component {
  changeUrl() {
    window.location.replace(this.props.href)
  }

  render() {
    return (
      <span
        style={{color: 'blue', cursor: 'pointer'}}
        onClick={this.changeUrl.bind(this)}
      >
        {this.props.children}
      </span>
    )
  }
}

class ProfileLink extends Component {
  render() {
    return (
      <div>
        <Link href={'https://github.com/' + this.props.username}>
          {this.props.username}
        </Link>
      </div>
    )
  }
}

class ProfileName extends Component {
  render() {
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
}

class Avatar extends Component {
  render() {
    const { image, name, username } = this.props.user

    return (
      <div>
        <ProfilePic imageUrl={image} />
        <ProfileName name={name} />
        <ProfileLink username={username} />
      </div>
    )
  }
}

export default Avatar
