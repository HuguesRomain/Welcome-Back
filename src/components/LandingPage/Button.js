import React, { Component, Fragment } from 'react'

class Button extends Component {
  

  render () {
    const { name } = this.props
    return (
      <Fragment>
        <div className='button__LandingPage'>{ name }</div>
      </Fragment>
    )
  }
}

export default Button