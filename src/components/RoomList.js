import React, {Component} from 'react';

class RoomList extends Component {
    constructor(props) {
      super(props)
        this.state = {
          rooms: [],
	        newRoomName: ''
        };
        this.roomsRef = this.props.firebase.database().ref('rooms');
    }

    componentDidMount() {
     this.roomsRef.on('child_added', snapshot => {
       const room = snapshot.val();
       room.key = snapshot.key;
       this.setState({
         rooms: this.state.rooms.concat(room)
       });
     });
    }

    createRoom(e) {
      e.preventDefault();
        this.roomsRef.push({
          name: this.state.newRoomName
        });
        this.setState({
          newRoomName: ''
        });
    }

    handleChange(e){
    	  this.setState({
            newRoomName: e.target.value
        });
	  }

    render(){
      return(
        <div className = "roomList">
          {
            this.state.rooms.map((room, index) =>
            <div className = "roomId"
              key = {index}
              onClick={ () => this.props.setActiveRoom(room)}>
              {room.name}
            </div>)
          }

          <form className="form-group" onSubmit={this.createRoom.bind(this)}>
             <input className="form-control" type="text" name="chatroom" value={this.state.newRoomName} placeholder="Name your room" onChange= { e => this.handleChange(e)} />
             <button type="submit" className="btn btn-primary">Submit</button>
          </form>

        </div>
      )
    }
}

export default RoomList;
