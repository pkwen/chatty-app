import React, { Component } from 'react';


class ChatBar extends Component {
  render() {
    //Event on enter press when focus is in username input
    const onUserChange = (event) => {
      if (event.key === 'Enter' && event.target.value && event.target.value !== "") {
        event.preventDefault();
        const name = event.target.value;
        this.props.changeUser(name);
      }
    }
    
    //Event on enter press when focus is in content input
    const onEnterPress = (event) => {
      if(event.key === 'Enter' && event.target.value && event.target.value !== "") {
      event.preventDefault();
      const msg = {};
      // msg.id = this.props.messages.length + 1;
      msg.content = document.getElementsByClassName('chatbar-message')[0].value;
      msg.username = this.props.currentUser;
      this.props.addMsg(msg);
      event.target.value = '';
      }
    }

    return (
    <footer className="chatbar">
      <input className="chatbar-username" defaultValue={this.props.currentUser} placeholder="Your Name (Optional)" onKeyPress={onUserChange}/>
      <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyPress={onEnterPress} />
    </footer>
    );
  }
}
export default ChatBar;