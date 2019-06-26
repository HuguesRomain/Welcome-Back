import React, { Component } from 'react'

class VideoPetitChapter extends Component {
  render () {
    return (
      <div className='videoPetitChapter'>
        <iframe className='VideoPetitChapter' src={this.props.link} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    )
  }
}

export default VideoPetitChapter