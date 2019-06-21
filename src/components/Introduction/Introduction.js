import React, { Component } from 'react'
import TitleIntro from './Title';
import DescriptionIntro from './description';
import DeathDuringWar from './DeathDuringWar';
import DeathAfterWar from './DeathAfterWar';
import TitlePart2 from './TitlePart2'
import CardsProfile from  './CardsProfile'

class Introduction extends Component {
  render () {
    return (
      <div className='Introduction'>
        <TitleIntro />
        <DescriptionIntro />
        <DeathDuringWar />
        <p className='half__sentence'>3/4 veterans suffer from post-traumatic syndrome.</p>
        <DeathAfterWar />
        <TitlePart2 />
        <CardsProfile  />
      </div>
    )
  }
}

export default Introduction