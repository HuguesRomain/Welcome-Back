import React, { Component } from 'react'
import VideoPetitChapter from '../ChapterGlobalComponent/VideoPetitChapter';
import imgData from '../../data/imgData'

class Addiction extends Component {
  state = {
    img: {imgData},
  }
  render () {
    return (
      <div className='addiction'>
        <h2 className='addiction__title'>Addiction</h2>
        <div className="traitAdiction" ref={ div => this.trace = div}></div>
        <div className="addiction__content">
          <div className="addiction__part1">
            <div className="addiction__text">
            <p>
              Addiction of vetarans is often the result of self-medication or medical purposes on the battlefield. 
            </p>
            <p>
              Many veterans returned with addiction and many others sank to their arrival : <br/>
              A majority of them consume alcohol and marijuana. As for the opiods, <span className='yellow__span'>30% of the soldiers are addicted to opium, heroin, amphetamines and barbiturates</span>.
            </p>{}
            <p>
              It is estimated that <span className='yellow__span'>100 000 veterans died from drugs </span>(overdose, homicide…), 50% of accidental deaths are due to overdoses.
            </p>
            </div>
            <div className="addiction__video">
              <VideoPetitChapter link={'https://www.youtube.com/embed/XKRUOO67A-c'}/>
              <p className='addiction__description__video'>
                Two Vietnam veteran
                  Extract from “GI Junkies: The Forgotten Veterans”
              </p>
            </div>
          </div>
          <div className='addiction__image'>
        <img className='Addiction1'src={require(`../../assets/img/${this.state.img.imgData.Chapter2.Addiction1}`)} alt='logo' />
        <img className='Addiction2'src={require(`../../assets/img/${this.state.img.imgData.Chapter2.Addiction2}`)} alt='logo' />
        </div>
        </div>
        
      </div>
    )
  }
}

export default Addiction