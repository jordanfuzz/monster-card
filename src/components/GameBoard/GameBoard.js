import React, {Component} from 'react'
import Battlefield from './Battlefield/Battlefield'

export default class GameBoard extends Component {
  constructor() {
    super()

    this.state = {
      numberOfPlayers: 0
    }
    this.setNumPlayers = this.setNumPlayers.bind(this)
  }

  setNumPlayers(num) {
    this.setState({
      numberOfPlayers: num
    })
  }

  render() {
    const playerSelect = (<div>
      How many players?
      <button onClick={() => this.setNumPlayers(2)}>2</button>
      <button onClick={() => this.setNumPlayers(3)}>3</button>
      <button onClick={() => this.setNumPlayers(4)}>4</button>
    </div>)

    return(
      <div>
        <Battlefield numberOfPlayers={this.state.numberOfPlayers}/>
        {!this.state.numberOfPlayers ? playerSelect : null}
      </div>
    )
  }

}