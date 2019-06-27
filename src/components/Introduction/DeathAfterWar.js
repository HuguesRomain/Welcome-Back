import React, { Component } from 'react'
import {TimelineLite} from 'gsap'

class DeathAfterWar extends Component {
  constructor(props){
    super(props);
      this.tween = new TimelineLite({ paused:false });
  
      this.apear = null;
      }   
  
      componentDidMount(){
        this.tween
        .from(this.apear, 0.7,{ y: 20, autoAlpha: 0}, 4.6)
      }
  render () {
    return (
      <div className='death__after_war' ref={ div => this.apear = div}>
        <div className="death__after_war--content">
        <div className="death__after_war--content--1">
          <p className='death__after__war--sentence'>Veteran suicide</p> 
          <p className='death__after__war--death'> <span className='yellow__span'>150 000</span> DEAD</p>
        </div>
          <img className='plus' src={require(`../../assets/img/plus.png`)} alt=""/>
          <div className="death__after_war--content--1">
          <p className='death__after__war--sentence'>Veteran suicide</p> 
          <p className='death__after__war--death'> <span className='yellow__span'>150 000</span> DEAD</p>
        </div>
        </div>
        <img className='death__after__war--img' src={require(`../../assets/img/deadafter.png`)} alt=""/>
      </div>
    )
  }
}

export default DeathAfterWar