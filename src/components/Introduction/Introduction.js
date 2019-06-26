import React, { Component } from 'react'
import TitleIntro from './title';
import DescriptionIntro from './description';
import DeathDuringWar from './DeathDuringWar';
import DeathAfterWar from './DeathAfterWar';
import TitlePart2 from './TitlePart2'
import CardsProfile from  './CardsProfile'
import {TimelineLite} from 'gsap'

class Introduction extends Component {

  constructor(props){
    super(props);
    this.tween = new TimelineLite({ paused:false });
  
    this.apear = null;
  }
  
  componentDidMount(){
    this.tween
      .from(this.apear, 1,{ opacity: 0 },3.5)
  }

  render () {
    return (
      <div className='Introduction'>
        <TitleIntro />
        <DescriptionIntro />
        <DeathDuringWar />
        <p className='half__sentence' ref={ p => this.apear = p}>3/4 veterans suffer from post-traumatic syndrome.</p>
        <DeathAfterWar />
        <TitlePart2 />
        <CardsProfile  />
      </div>
    )
  }
}

export default Introduction