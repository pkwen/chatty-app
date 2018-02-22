import React, { Component } from 'react';


class ChatBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.currentUser,
      content: ''
    }
  }
  
  
  render() {
    const handleUserChange = (event) => {
      this.setState({ username: event.target.value });
    }
  
    const handleContentChange = (event) => {
      this.setState({ content: event.target.value });
    }
    //Event on enter press when focus is in username input
    const onUserChange = (event) => {
      if (event.key === 'Enter' 
        && event.target.value 
        && event.target.value !== ""
        && event.target.value !== this.props.currentUser) {
        event.preventDefault();
        const name = event.target.value;
        this.props.changeUser(name);
      }
    }
    
    //Event on enter press when focus is in content input
    const onEnterPress = (event) => {
      if(event.key === 'Enter' 
      && event.target.value 
      && event.target.value !== "") {
      event.preventDefault();
      const msg = {};
      msg.content = document.getElementsByClassName('chatbar-message')[0].value;
      msg.username = this.props.currentUser;
      msg.type = 'postMessage';
      this.props.addMsg(msg);
      this.setState({ content: '' });
      }
    }

    return (
    <footer className="chatbar">
      <input 
        className="chatbar-username" 
        value={this.state.username}
        placeholder="Your Name (Optional)" 
        onChange={handleUserChange}
        onKeyPress={onUserChange}
      />
      <input 
        className="chatbar-message" 
        value={this.state.content}
        placeholder="Type a message and hit ENTER" 
        onChange={handleContentChange}
        onKeyPress={onEnterPress} 
      />
    </footer>
    );
  }
}
export default ChatBar;