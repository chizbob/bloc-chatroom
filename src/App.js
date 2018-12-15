import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import User from './components/User';

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
  constructor() {
    super();
    this.state = {
      activeRoom: {key: "empty"},
      user: null
    }
    this.setActiveRoom = this.setActiveRoom.bind(this);
    this.setUser = this.setUser.bind(this);
  }

  setActiveRoom(room) {
    this.setState( {
        activeRoom: room
    });
  }

  setUser(user){
    this.setState({
      user: user
    })
  }

  render() {
    return (
      <div className="app">
          <div className="jumbotron jumbotron-fluid">
              <div className="container">
                <h1 className="display-4">Bloc Chats!</h1>
                <p className="lead">Enjoy fun in chatrooms with your Bloc buddies.</p>
              </div>
          </div>

          <div className="user-container">
              <User
                firebase={firebase}
                setUser={this.setUser}/>
          </div>

          <div className="room-container">
              <RoomList
                firebase={firebase}
                setActiveRoom={this.setActiveRoom}
                activeRoom={this.state.activeRoom}/>
          </div>

          <div className="message-container">
              <MessageList firebase={firebase}
                activeRoom={this.state.activeRoom}/>
          </div>
      </div>
    );
  }
}


export default App;
