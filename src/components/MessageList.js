import React, {Component} from 'react';

class MessageList extends Component {
    constructor(props) {
      super(props)
        this.state = {
          messages: [],
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

    handleSubmit(e) {
        e.preventDefault();
        const newMessageName = e.target.value;
        this.messagesRef.push({
          name: newMessageName
        });
    }


    render(){
      return(
        <div className="message-box">
            {
                this.state.messages.filter(roomId).map((messages) =>
                <p>{messages.content}</p>)
            }
        </div>
      )
    }
}

export default MessageList;
