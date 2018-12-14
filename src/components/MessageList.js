import React, {Component} from 'react';

class MessageList extends Component {
  constructor(props){
    super(props);

    this.state= {
      messages: []
    };

    this.messageRef = this.props.firebase.database().ref('messages');
  }

  componentDidMount() {
       this.messageRef.on('child_added', snapshot => {
         const message = snapshot.val();
         message.key = snapshot.key;
         this.setState({
           messages: this.state.messages.concat(message)
         });
       });
    }

  render() {
      return (
        <section>
        {
              this.state.messages.filter( (message) => message.roomId === this.props.activeRoom.key).map( (message) =>
                  <span key={message.key}>
                      <p>{message.username}</p>
                      <p>{message.content}</p>
                      <p>{message.sentAt}</p>
                  </span>)
        }
        </section>
      )
  }
}


export default MessageList;
