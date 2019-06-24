import React, { Component } from 'react';
import textData from '../../data/textData';

class TitleIntro extends Component {
  state = {
    TextData: {textData},
  }
  
  render () {
    return (
        <h1 className='Title'>WELCOME BACK</h1>
    )
  }
}

export default TitleIntro