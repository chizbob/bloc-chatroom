import React, { Component } from "react";


class User extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    this.props.firebase.auth().onAuthStateChanged(user => {
    this.props.setUser(user);
    });
  }

  signIn(){
      const provider = new this.props.firebase.auth.GoogleAuthProvider();
      this.props.firebase.auth().signInWithPopup( provider );
  }

  signOut(){
      this.props.firebase.auth().signOut();
  }

  render(){
      return(
        <section className="signin-button">
          {
            this.props.displayName ? (
                <button type="button"
                               className="btn btn-light"
                               onClick={() => this.signOut()}>
                               Sign Out</button>
            ) : (<button type="button"
                            className="btn btn-light"
                            onClick={() => this.signIn()}>
                            Sign In</button>
            )
          }
        </section>
      )
  }
}

export default User;
