import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'

class Button extends Component {
  state = {
    goToIntro: false,
  }
  
  handleIntro = () => {
    this.setState({goToIntro: true})
  }
  render () {
    if(this.state.goToIntro) {
      return <Redirect push to={`/introduction`}></Redirect>
    }
    const { name } = this.props
    return (
      <Fragment>
        <button className='button__LandingPage' onClick={this.handleIntro}>{ name }</button>
      </Fragment>
    )
  }
}

export default Button