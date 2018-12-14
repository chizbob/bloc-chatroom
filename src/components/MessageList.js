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
          this.state.messages.filter(a=> a.roomId == this.props.activeRoom.key).map( (message) =>
              <span key={message.key}>
                  <span style={{paddingRight: 20 + 'px'}}>{message.content}</span>
                  <span style={{paddingRight: 20 + 'px'}}>{message.username}</span>
                  <span style={{paddingRight: 20 + 'px'}}>{message.sentAt}</span>
              </span>)
        }
        </section>
      )
  }
}


export default MessageList;
