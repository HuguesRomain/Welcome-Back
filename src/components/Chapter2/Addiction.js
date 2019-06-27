import React, { Component } from 'react'
import VideoPetitChapter from '../ChapterGlobalComponent/VideoPetitChapter';

class Addiction extends Component {
  render () {
    return (
      <div className='addiction'>
        <h2 className='addiction__title'>Addiction</h2>
        <div className="addiction__content">
          <div className="addiction__part1">
            <div className="addiction__text">
            <p>
              Addiction in vetarans is often the result of self-medication or medical purposes on the battlefield. 
            </p>
            <p>
              Many veterans returned with addiction and many others sank to their arrival : <br/>
              A majority of them consume alcohol and marijuana. As for the opiods, 30% of the soldiers are addicted to opium, heroin, amphetamines and barbiturates.
            </p>{}
            <p>
              It is estimated that 100 000 veterans died from drugs (overdose, homicide…), 50% of accidental deaths are due to overdoses.
            </p>
            </div>
            <div className="addiction__video">
              <VideoPetitChapter link={'https://www.youtube.com/embed/80H0fnT8sZs'}/>
              <p className='addiction__description__video'>
                Two Vietnam veteran
                  Extract from “GI Junkies: The Forgotten Veterans”
              </p>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Addiction