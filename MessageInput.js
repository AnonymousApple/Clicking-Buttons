import React, { Component } from 'react';

class MessageInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: {}
    }
  }

  handleClick = (e) => {
    const { currentUser } = this.props;
    console.log(e.target);
    const newMessage = {
      text: e.target.value,
      time: new Date,
      name: currentUser,
    }
    this.setState({message: newMessage})
  }

  render() {

    return (
      <form>
        <input type='text' value='' />
        <button onClick={this.handleClick}>Click</button>
      </form>

    )
  }
}

export default MessageInput;
