import React, { Component, Fragment } from 'react'

class Video extends Component {

  
  render() {
  
    return (
      <Fragment>
        <iframe className='videoBackground' width="560" height="315" src="https://www.youtube.com/embed/IUkz64bk-C4?controls=0&autoplay=1&loop=1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </Fragment>
    );
  }
}

export default Video

