import React, { Component } from 'react';


class Message extends Component {
  render() {
    if(this.props.msg.type === 'incomingMessage') {
      return (
        <div className="message">
          <span className="message-username">{this.props.msg.username}</span>
          <span className="message-content">{this.props.msg.content}</span>
        </div>
      );
    } else if (this.props.msg.type === 'incomingNotification') {
      return (
        <div className="message system">
          {this.props.msg.oldName} changed their name to {this.props.msg.newName}.
        </div>
      );
    } else if (this.props.msg.type === 'incomingLogIn') {
      return (
        <div className='message system'>
          {this.props.msg.name} has logged in.
        </div>
      );
    } else if (this.props.msg.type === 'incomingLogOut') {
      <div className='message system'>
        {this.props.msg.name} has logged out.
        </div>
    }
  }
}
export default Message;