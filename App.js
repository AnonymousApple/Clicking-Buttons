import React, { Component } from 'react';
import MessageFeed from './MessageFeed';
import MessageInput from './MessageInput';
import logo from './logo.svg';
import './App.css';

const messages = [
  {
    text: 'Why am I doing this... #ICAUGHTAGHOSTINMYGAMINGROOMANDITWASCARY',
    time: '3:00am',
    user: 'Cabbagecars'
  }, {
    text: 'I like explosions',
    time: '8:00pm',
    user: 'Cabbagecars'
  }, {
    text: 'Stop',
    time: '8:01pm',
    user: 'eamadi343'
  }
]
class App extends Component {
  render() {
    const currentUser = 'Cabbagecars'
    return (
      <div className="App">
        <MessageFeed messages={messages} currentUser={currentUser} />
        <MessageInput currentUser={currentUser} />
      </div>
    );
  }
}

export default App;
