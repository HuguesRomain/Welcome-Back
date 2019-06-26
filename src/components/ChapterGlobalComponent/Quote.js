import React, { Component, Fragment } from 'react'
import textQuote from '../../data/textQuotes.json'

class Quote extends Component {
  render () {
    return (
      <div className='quote'>
        {textQuote.map((postDetail)=>{
          return <Fragment>
                  <p className = "quoteContent">"{postDetail.quote}"</p>
                  <p className = "quoteAuthor">- {postDetail.author} -</p>
                </Fragment>
        })}
      </div>
    )
  }
}

export default Quote