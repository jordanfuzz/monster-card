import React, {Component} from 'react'
import './Battlefield.css'
import PlayerField from './PlayerField/PlayerField'

export default class Battlefield extends Component {
  constructor() {
    super()

  }

  render() {
    let players = []
    for(let i = 1; i <= this.props.numberOfPlayers; i++) {
      players.push(<PlayerField/>)
    }

    return(
      <div className="container">
        BATTLEFIELD
        {players}
      </div>
    )
  }
}