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
      user: "Guest"
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
      user: user.displayName
    })
  }

  render() {
    console.log(`username at App: ${this.state.user}`)
    return (
      <section className="app">
          <div className="jumbotron jumbotron-fluid">
              <div className="container">
                <h1 className="display-4">Bloc Chats!</h1>
                <p className="lead">Enjoy fun in chatrooms with your Bloc buddies.</p>
              </div>
          </div>

          <aside className="user-container" style={{marginRight: 30 + 'px'}}>
            <div style={{textAlign: 'right', marginRight: 20 + 'px'}}>
              <User
                firebase={firebase}
                setUser={this.setUser}
                user={this.state.user}/>
            </div>
          </aside>
            <main style={{display: 'flex'}}>
              <RoomList
                firebase={firebase}
                setActiveRoom={this.setActiveRoom}
                activeRoom={this.state.activeRoom}/>

              <MessageList
                firebase={firebase}
                activeRoom={this.state.activeRoom}
                user={this.state.user}/>
            </main>
      </section>
    );
  }
}


export default App;
