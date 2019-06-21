import React, { Component } from 'react'

class DeathDuringWar extends Component {
  render () {
    return (
      <div className='death__during__war'>
        <p className='death__during__war--sentence'>AMERICAN LOSSES RISEDS TO OVER</p> 
        <p className='death__during__war--death'> <span className='yellow__span'>58 220</span> DEAD</p>
        <img className='death__during__war--img' src={require(`../../assets/img/dead.png`)} alt=""/>
      </div>
    )
  }
}

export default DeathDuringWar