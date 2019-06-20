import React, { Component } from 'react'
import Text from '../../data/textData'

class Title extends Component {
  state = {
    TextData: {Text},
  }
  render () {
    return (
      <div className='Title'>
        {this.state.TextData.Text.TextData.textIntro.Title}
      </div>
    )
  }
}

export default Title