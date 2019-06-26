import React, { Component } from 'react'

class VideoPetitChapter extends Component {
  render () {
    return (
      <div className='videoPetitChapter'>
        <iframe className='VideoPetitChapter' src="https://www.youtube.com/embed/JFXarq7J9Rc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    )
  }
}

export default VideoPetitChapter