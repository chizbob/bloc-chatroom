import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';

  var config = {
    apiKey: "AIzaSyAZ-nh81214MgEN6E0-MO-rr18njhp0f8k",
    authDomain: "react-chatroom-8e6ec.firebaseapp.com",
    databaseURL: "https://react-chatroom-8e6ec.firebaseio.com",
    projectId: "react-chatroom-8e6ec",
    storageBucket: "react-chatroom-8e6ec.appspot.com",
    messagingSenderId: "458261199253"
  };
  firebase.initializeApp(config);


class App extends Component {
    constructor(){
      super();
      this.state = {
        	activeRoom: ''
     };
    }

    setActiveRoom(room){
      this.setState({
        activeRoom: room
      })
    }

    render() {
      return (
        <div className="container-fluid">
          <div className="jumbotron">
              <h1 className="display-4">Welcome to Bloc Chatrooms!</h1>
              <p className="lead">Enjoy fun chats with your Bloc buddies.</p>
              <hr className="my-4"/>
          </div>
          <div className="container">
              <span>
                  <RoomList className="room-list"
                    firebase = {firebase}
                    isActive={this.state.isActive}
                		setActiveRoom={this.setActiveRoom.bind(this)}
                    activeRoom={this.state.activeRoom}
                		createRoom={(e) => this.createRoom(e)}
                		handleChange={(e) => this.handleChange}
                		handleClick={(e) => this.handleClick}
                		roomMessages={this.state.roomMessages}/>
              </span>
              <span>
                  <MessageList className="message-list"
                    firebase = {firebase}
                    isActive={this.state.isActive}
    		            activeRoom={this.state.activeRoom}
		                messages={this.state.messages}/>
              </span>
          </div>
        </div>
      );
    }
}

export default App;
