import React, { Component } from 'react';


class ChatBar extends Component {
  render() {
    const onEnterPress = (event) => {
      if(event.key === 'Enter' && event.target.value && event.target.value !== "") {
      event.preventDefault();
      const msg = {};
      // msg.id = this.props.messages.length + 1;
      msg.content = document.getElementsByClassName('chatbar-message')[0].value;
      msg.username = document.getElementsByClassName('chatbar-username')[0].value ? 
      document.getElementsByClassName('chatbar-username')[0].value : 'Anonymous';
      this.props.addMsg(msg);
      event.target.value = '';
      }
      // msg.username = event.target.elements.username.value;
    }
    console.log('Rendering <ChatBar/>');
    return (
    <footer className="chatbar">
      <input className="chatbar-username" defaultValue={this.props.currentUser} placeholder="Your Name (Optional)" />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyPress={onEnterPress} />
    </footer>
    );
  }
}
export default ChatBar;