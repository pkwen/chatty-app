import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import NavBar from './NavBar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userCount: 0,
      currentUser: {name: 'Anonymous'},
      messages: []
    }
  }

  //New message sent
  addMsg = (newMsg) => {
    this.socket.send(JSON.stringify(newMsg));
  }

  //Username change
  changeUser = (name) => {
    const notification = {};
    notification.type = 'postNotification';
    notification.oldName = this.state.currentUser.name;
    notification.name = name;
    this.socket.send(JSON.stringify(notification));
    this.setState({currentUser: {name: name}});
  }

  countUser = (count) => {
    this.setState({ userCount: count });
  }
  
  //Receive new message from websocket server and set state to include
  componentWillMount() {
    //Creating WebSocket object
    this.socket = new WebSocket('ws:localhost:3001');

    this.socket.onopen = (event) => {
      const loginNote = { 
        name: this.state.currentUser.name,
        type: 'logInNotification'
      };
      this.socket.send(JSON.stringify(loginNote));
    }

    this.socket.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      console.log(msg);
      const oldMsgList = this.state.messages;
      const newMsgList = this.state.messages.concat(msg);
      this.setState({messages: newMsgList});
      if(msg.type === 'incomingLogIn' || msg.type === 'incomingLogOut') {
        this.setState({ userCount: msg.userCount })
      }
    }
  }

  //After rendering
  componentDidMount() {
    // setTimeout(() => {
      //   console.log("Simulating incoming message");
      //   // Add a new message to the list of messages in the data store
      //   const newMessage = { id: 3, username: "Michelle", content: "Hello there!" };
      //   const messages = this.state.messages.concat(newMessage)
      //   // Update the state of the app component.
      //   // Calling setState will trigger a call to render() in App and all child components.
      //   this.setState({ messages: messages })
      // }, 3000);
    }
    
    // newMsg
    
    render() {
    return (
      // <h1>Hello React :)</h1>
      <div>
      <NavBar userCount={this.state.userCount}/>
      <MessageList messages={this.state.messages} currentUser={this.state.currentUser.name}/>
      <ChatBar 
        changeUser={this.changeUser}
        currentUser={this.state.currentUser.name}
        addMsg={this.addMsg}
        // messages={this.state.messages}
      />
      </div>
    );
  }
}
export default App;
