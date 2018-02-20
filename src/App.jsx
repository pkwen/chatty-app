import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.setState({currentUser: {name: name}});
  }

  //Creating WebSocket object
  socket = new WebSocket('ws:localhost:3001');

  //Receive new message from websocket server and set state to include
  componentWillMount() {
    this.socket.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      const oldMsgList = this.state.messages;
      const newMsgList = this.state.messages.concat(msg);
      this.setState({messages: newMsgList});
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
      <MessageList messages={this.state.messages}/>
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
