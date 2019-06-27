import React, { Component } from 'react'
import imgData from '../../data/imgData'
import AudioData from '../../data/AudioData'

class IntroChapter3 extends Component {
  state = {
    img: {imgData},
    AudioState: {AudioData}
  }
  render () {
    return (
      <div className='Measures'>
  
      
        <div className='contentIntroChapter3'>

          <div className='part__introChapter3'>
            <div className='part__introChapter3__Content'>
                  <p>
                    When the state recognized the PTSD as a war disease, 10 years after the end of the war, the PTSD vets were allowed to have their files re-examined and given the "honorable dismissal" and receive <span className='yellow__span'>compensation, pensions disability and care</span>.

                    <br /><br />
                    The US government has invested more than <span className='yellow__span'>$ 48 billion</span> in the medical treatment of its soldiers from all ages.
                    With VVAW, the government has invested in PTSD care as well as other diseases such as Agent Orange.  
                  </p>
            </div>
          </div>
          <div className='part__introChapter3__Image'>
            <img className='Murphy2'src={require(`../../assets/img/${this.state.img.imgData.Chapter3.Measures1}`)} alt='logo' />
            <img className='Murphy3'src={require(`../../assets/img/${this.state.img.imgData.Chapter3.Measures2}`)} alt='logo' />
          </div>
          
        </div>
      </div>
    )
  }
}

export default IntroChapter3

