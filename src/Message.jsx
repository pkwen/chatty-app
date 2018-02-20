import React, { Component } from 'react';


class Message extends Component {
  checkURL(content) {
    content = content.split(' ').filter((item) => {
      let regex = /\.jpg|\.png|\.gif/g;
      if (regex.test(item)) {
        return true;
      }
      return false;
    })
    return content;
  }
  render() {
    if(this.props.msg.type === 'incomingMessage') {
      if(this.checkURL(this.props.msg.content).length > 0) {
      return (
        <div className="message">
          <span className="message-username" style={{ color: this.props.msg.color }}>{this.props.msg.username}</span>
          <img className="message-image" src={this.checkURL(this.props.msg.content)[0]}/>
        </div>
      );
    } else {
      return (
        <div className="message">
          <span className="message-username" style={{color: this.props.msg.color}}>{this.props.msg.username}</span>
          <span className="message-content">{this.props.msg.content}</span>
        </div>
      );
    }
    } else if (this.props.msg.type === 'incomingNotification') {
      return (
        <div className="message system">
          {this.props.msg.oldName} changed their name to {this.props.msg.name}.
        </div>
      );
    } else if (this.props.msg.type === 'incomingLogIn') {
      return (
        <div className='message system'>
          {this.props.msg.name} has logged in.
        </div>
      );
    } else if (this.props.msg.type === 'incomingLogOut') {
        return (
          <div className='message system'>
            {this.props.msg.name} has logged out.
          </div>
        );
    }
  }
}
export default Message;