import React, { Component } from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  render() {
    console.log('Rendering <MessageList/>');
    const messages = this.props.messages.map(msg => {
      return (
        <Message key={msg.id} msg={msg}/>
      );
    })
    return (
      <main className="messages">
      {messages}
      </main>
    );
  }
}
export default MessageList;