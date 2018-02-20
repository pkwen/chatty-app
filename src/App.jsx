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
    this.addMsg = (newMsg) => {
      // const oldMsgList = this.state.messages;
      // const newMsgList = this.state.messages.concat(newMsg);
      // this.setState({messages: newMsgList});
      this.socket.send(JSON.stringify(newMsg));
    }
  }
  componentDidMount() {
    console.log("componentDidMount <App />");
    this.socket = new WebSocket('ws:localhost:3001');
    this.socket.onmessage = (event) => {
      console.log(JSON.parse(event));
    }
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
      console.log('Rendering <App/>');
    return (
      // <h1>Hello React :)</h1>
      <div>
      <MessageList messages={this.state.messages}/>
      <ChatBar 
        currentUser={this.state.currentUser.name}
        addMsg={this.addMsg}
        // messages={this.state.messages}
      />
      </div>
    );
  }
}
export default App;
