import React, {Component} from 'react';

class User extends Component {
  // constructor(props){
  //   super(props);
  // }

  componentDidUpdate(){
    this.props.firebase.auth().onAuthStateChanged(user => {
      this.props.setUser(user);
    });
    console.log(`componentDidMount: ${this.props.username}`)
  }

  signIn(){
      const provider = new this.props.firebase.auth.GoogleAuthProvider();
      this.props.firebase.auth().signInWithPopup( provider );
  }

  signOut(){
      this.props.firebase.auth().signOut();
  }

  render(){
    console.log(`User's Render: ${this.props.username}`);
    return(
      <div>
        {
            this.props.username == null ? <button type="button" onClick={() => this.signIn()}>Sign In</button> :
                  <button type="button" onClick={() => this.signOut()}>Sign Out</button>
        }
      </div>
    )
  }
}

export default User;
