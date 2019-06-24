import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'

class Button extends Component {
  state = {
    goToIntro: false,
  }
  
  handleIntro = () => {
    console.log('test')
    this.setState({goToIntro: true})
  }
  
  render () {
    if(this.state.goToIntro){
      return <Redirect push to={`/introduction`}></Redirect>
    }
    const { name } = this.props
  
    return (
      <Fragment>
        <div onClick={this.handleIntro} className='button__LandingPage'>{ name }</div>
      </Fragment>
    )
  }
}

export default Button


