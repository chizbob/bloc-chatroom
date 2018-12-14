import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import User from './components/User/User';

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
          activeRoom: '',
          user: ''
      };
      this.setActiveRoom = this.setActiveRoom.bind(this)
      this.setUser = this.setUser.bind(this)
    }
//use room.key as an identifier for active room
    setActiveRoom(room) {
      this.setState({
        activeRoom: room.key
      });
    }

    setUser(username){
      this.setState({
        user: username
      });
      console.log(this.state.user)
    }

    render() {
      return (
        <div className = "app">

          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-4">Welcome to Bloc Chatrooms!</h1>
              <p className="lead">Enjoy fun chats with your Bloc buddies.</p>
            </div>
          </div>

          <div className="signin-room">
              <span>
                  <User className="user"
                    firebase = {firebase}
                    setUser={this.state.setUser}/>
              </span>

              <span>
                  <RoomList className="room-list"
                    firebase = {firebase}
//passing down setActiveRoom function and activeRoom state to RoomList
                    setActiveRoom={this.setActiveRoom.bind(this)}/>
              </span>

              <span>
                  <MessageList className="message-list"
                    firebase = {firebase}
                    setActiveRoom={this.setActiveRoom.bind(this)}/>
              </span>
            </div>
        </div>
      );
    }
}

export default App;
