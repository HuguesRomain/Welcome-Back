import React, { Component } from 'react';
import imgData from '../../data/imgData';

class Transmission extends Component {
  state = {
    imgState: {imgData},
  }
  render () {
    return (
      <div className='Transmission'>
        <h2 className='Transmission__title'>transmission</h2>
        <div className="traitTransmision"></div>
        <div className="Transmission__content">
        <div className="Transmission__text">
          <p className='Transmission__text--1'>
            Iraq <span className='yellow__span'>and golf veterans</span> are also experiencing a high rate of PTSD and veterans of Vietnam have made it a point of honor that no more returning soldiers will be treated as they were.
          </p>
          <p className='Transmission__text--2'>
             Many of them do prevention in schools and talk about the psychological repercussions of war. Others are a form of support and guide soldiers who need help.
         </p>
        </div>
        <div className="Transmission__img">
         <img className='Transmission1'src={require(`../../assets/img/${this.state.imgState.imgData.Chapter3.Transmission1}`)} alt='logo' />
         <img className='Transmission2'src={require(`../../assets/img/${this.state.imgState.imgData.Chapter3.Transmission2}`)} alt='logo' />
         </div>
        </div>
        <p className='todayResults'>Prevention and care is not enough. Despite the general awareness, <span className='yellow__span'>10% of the homeless</span> are veterans and one American soldier commits suicide <span className='yellow__span'>every 80 minutes</span>.</p>
      </div>
    )
  }
}

export default Transmission