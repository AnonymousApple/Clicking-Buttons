import React, { Component } from 'react';

class MessageFeed extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { messages, currentUser } = this.props

    const redStyle = {
      'color': "red",
    }

    const feed = messages.map((message, i) => {
      return (
        <li key={i}>
          <p><strong>{message.user}</strong></p>
          <p style={message.user === currentUser ? redStyle: null}>{message.text}</p>
          <p>{message.time}</p>
        </li>
      )
    })

    return (
      <ul>{feed}</ul>
    )
  }
}

export default MessageFeed;
