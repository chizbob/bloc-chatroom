import React, {Component} from 'react';

class MessageList extends Component {
  constructor(props){
    super(props);

    this.state= {
      messages: [],
      newMessage:''
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

  handleChange(e) {
    console.log(e.target);
    this.setState({
      newMessage: e.target.value
    });
  }

  createMessage() {
    if (!this.props.activeRoomId) return;
    const newMessage = this.state.newMessage;
    this.messageRef.push({
      content: newMessage,
      username: this.props.user,
      roomId: this.props.activeRoom,
      sentAt: this.props.firebase.database.ServerValue.TIMESTAMP
    });
    this.setState({
      newMessage: ''
    });
  }

  render() {
      return (
        <section>
          <div className="message-box">{
          this.state.messages.filter(a=> a.roomId == this.props.activeRoom.key).map( (message) =>
              <span key={message.key}>
                  <span style={{paddingRight: 20 + 'px'}}>{message.content}</span>
                  <span style={{paddingRight: 20 + 'px'}}>{message.username}</span>
                  <span style={{paddingRight: 20 + 'px'}}>{message.sentAt}</span>
              </span>)}
          </div>

          <form className="message-input">
              <input type="text"
                     placeholder="Say something good"
                     value={this.state.newMessage}
                     onChange={this.handleChange.bind(this)}/>
              <button onClick={() => this.createMessage()}>Send</button>
          </form>
        </section>
      )
  }
}


export default MessageList;
