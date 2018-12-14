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
      const message = JSON.stringify(snapshot.val());
      this.setState({ messages: this.state.messages.concat( message ) })
    });
  }

  render() {
    return (
      <section>
            <div className="message-list">
              {
                this.state.messages.filter((message) => message.roomId === this.props.activeRoomId).map( (message) =>
                   <span key={message.key}>
                        <p>{message.username}</p>
                        <p>{message.content}</p>
                        <p>{message.sentAt}</p>
                   </span>)
              }
            </div>
      </section>
  )};
}


export default MessageList;
