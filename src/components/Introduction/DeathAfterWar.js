import React, { Component } from 'react'

class DeathAfterWar extends Component {
  render () {
    return (
      <div className='death__after_war'>
        <div className="death__after_war--content">
        <div className="death__after_war--content--1">
          <p className='death__after__war--sentence'>Veteran suicide</p> 
          <p className='death__after__war--death'> <span className='yellow__span'>150 000</span> DEAD</p>
        </div>
          <img className='plus' src={require(`/Users/hugues/Documents/Documents pro/Git Project/Welcome-Back/src/assets/img/plus.png`)} alt=""/>
          <div className="death__after_war--content--1">
          <p className='death__after__war--sentence'>Veteran suicide</p> 
          <p className='death__after__war--death'> <span className='yellow__span'>150 000</span> DEAD</p>
        </div>
        </div>
        <img className='death__after__war--img' src={require(`/Users/hugues/Documents/Documents pro/Git Project/Welcome-Back/src/assets/img/deadafter.png`)} alt=""/>
      </div>
    )
  }
}

export default DeathAfterWar