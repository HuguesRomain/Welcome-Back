import React, { Component } from 'react'

class VideoChapter extends Component {
  render () {
    return (
      <div className='videoChapter'>
        <iframe className='videoMusgrave' src="https://www.youtube.com/embed/QZ0zf4voIao?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    )
  }
}

export default VideoChapter