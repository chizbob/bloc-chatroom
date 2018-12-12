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
        this.state= {
          activeRoom: ''
      };
      this.setActiveRoom = this.setActiveRoom.bind(this);
    }
//use room.key as an identifier for active room
    setActiveRoom(room) {
      this.setState({
        activeRoom: room.key
      });
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
//passing down setActiveRoom function and activeRoom state to RoomList
                    setActiveRoom={this.setActiveRoom}
                    activeRoom={this.state.activeRoom}/>
              </span>
              <span>
                  <MessageList className="message-list"
                    firebase = {firebase}
//passing down setActiveRoom function and activeRoom state to MessageList
                    setActiveRoom={this.setActiveRoom}
                    activeRoom={this.state.activeRoom}/>
              </span>
          </div>
        </div>
      );
    }
}

export default App;
