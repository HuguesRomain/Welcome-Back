import React, { Component } from 'react'
import imgData from '../../data/imgData'

class SocialImpact extends Component {
  state = {
    img: {imgData},
  }
  render () {
    return (
      <div className='SocialImpact'>
        <h2 className='Title__SocialImpact'>Precariousness and social impact</h2>
          <div className='content__SocialImpact'> 
          <div className='first__part__SocialImpact'>
            <p className='paragraph__SocialImpact'>
                3/4 of veterans find themselves <span className='yellow__span'>without jobs or homeless</span> on their return. There is not measures to rehabilitate them in civilian life. <br/> <br/> 

                These young vets with <span className='yellow__span'>no diploma</span>, have to hide hide on their military past because they are not accepted by the society.
                </p>
                <img className='Soldats22' src={require(`../../assets/img/${this.state.img.imgData.Chapter2.Soldat22}`)} alt='logo' />
           </div>
  <div className='videoChapter2'>
     
  </div>
        </div>
      </div>
    )
  }
}

export default SocialImpact