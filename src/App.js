import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css';
import RoomList from './components/RoomList';

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
  render() {
    return (
      <div className="container-fluid">
        <div className="jumbotron">
            <h1 className="display-4">Welcome to Bloc Chatrooms!</h1>
            <p className="lead">Enjoy fun chats with your Bloc buddies.</p>
            <hr className="my-4"/>
        </div>
        <RoomList
            firebase = {firebase}
            />
      </div>
    );
  }
}

export default App;
