import React, {Component} from 'react';

class User extends Component {
  // constructor(props){
  //   super(props);
  // }

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
    console.log(`Username at User: ${this.props.user}`)
    return(
      <div>
      <span style={{marginRight: 20 + 'px'}}>Hi, {this.props.user}!</span>
        {
            this.props.user == "Guest" ? <button type="button" className="btn btn-light"> onClick={() => this.signIn()}>Sign In</button> :
                  <button type="button" className="btn btn-light" onClick={() => this.signOut()}>Sign Out</button>
        }
      </div>
    )
  }
}

export default User;
