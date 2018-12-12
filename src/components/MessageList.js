import React, {Component} from 'react';

class MessageList extends Component {
    constructor(props) {
      super(props)
      this.state = {
    	   messages: []
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

    getTimeStamp() {
   	   this.messagesRef.push({ sentAt: this.props.firebase.database.ServerValue.TIMESTAMP });
 	  }

    render(){
      return(
        <div className="messageList">
           {
             this.state.messages.filter(a => a.roomId === this.state.activeRoomId).map( (message) =>
	               <span key={message.key}>
                      <p>{message.username}</p>
                      <p>{message.content}</p>
                      <p>{message.sentAt}</p>
                 </span>)
            }
        </div>
      )
    }
}

export default MessageList;
