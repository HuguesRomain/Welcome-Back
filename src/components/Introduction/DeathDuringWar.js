import React, { Component } from 'react'
import {TimelineLite} from 'gsap'

class DeathDuringWar extends Component {

  constructor(props){
    super(props);
    this.tween = new TimelineLite({ paused:false });

    this.apear = null;
    this.apear2 = null;
    this.blowUp = null;
  }

  componentDidMount(){
    this.tween
      .from(this.apear, 1,{ opacity: 0 }, 1)
      .from(this.apear2, 1, {opacity: 0 })
      .from(this.blowUp, 1,{ y: 20, autoAlpha: 0})
  }

  render () {
    return (
      <div className='death__during__war'>
        <p className='death__during__war--sentence' ref={ p => this.apear = p }>AMERICAN LOSSES RISEDS TO OVER</p> 
        <div>
          <div ref={ div => this.apear2 = div }>
            <p className='death__during__war--death'> <span className='yellow__span'>58 220</span> DEAD</p>
          </div>
          <img className='death__during__war--img' ref={ img => this.blowUp = img } src={require(`../../assets/img/dead.png`)} alt=""/>
        </div>
      </div>
    )
  }
}

export default DeathDuringWar