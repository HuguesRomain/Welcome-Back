import React, { Component } from 'react';
import textData from '../../data/textData';
import {Link} from 'react-router-dom';

class TitleIntro extends Component {
  state = {
    TextData: {textData},
  }
  
  render () {
    return (
        <Link to={'/Introduction'}><h1 className='Title'>WELCOME BACK</h1></Link>
    )
  }
}

export default TitleIntro