import React, {Component} from 'react';

class MessageList extends Component {
    constructor(props) {
      super(props)
      this.state = {
        messages: '',
      };
      this.messageRef = this.props.firebase.database().ref('messages');
    }

    componentDidMount() {
       this.messageRef.on('child_added', snapshot => {
         const message = snapshot.val();
         message.key = snapshot.key;
         // console.log(message);
         // console.log(message.roomId);
         this.setState({
           messages: this.state.messages.concat(message)
         });
       });
    }

    render(){
      return(
        <div className="message-box">
            {
                this.state.messages.filter(a => a.roomId === activeRoom.key).map((messages) =>
                <p>{messages.content}</p>)
            }
        </div>
      )
    }
}

export default MessageList;
