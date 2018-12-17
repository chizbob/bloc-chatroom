import React, {Component} from 'react';

class RoomList extends Component {
  constructor(props){
    super(props)

    this.state= {
      rooms: [],
      newRoomName: ''
    };

    this.roomsRef = this.props.firebase.database().ref('rooms');
  }

  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat( room ) })
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

  handleChange(e) {
    this.setState({
      newRoomName: e.target.value
    });
  }

  render() {
    return (
      <section className="rooms">
          <div className="rooms-list">
            {
              this.state.rooms.map( (room, index) =>
                  <li key={index} className="nav-item" onClick={ () => this.props.setActiveRoom(room) }>
                  {room.name}
                  </li>)
            }
          </div>

          <form className="form-group" style={{display: 'flex'}} onSubmit={this.createRoom.bind(this)}>
              <input
                className="form-control"
                type="text"
                placeholder="Name your room"
                value={this.state.newRoomName}
                onChange={this.handleChange.bind(this)} />
              <button className="btn btn-light" style={{marginLeft: 10 + 'px'}}>Submit</button>
          </form>
      </section>
    );
  }
}

export default RoomList;
