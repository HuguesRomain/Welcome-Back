import React, { Component } from 'react'
import textData from '../../data/ChapterData'
import imgData from '../../data/imgData'
import AudioTrack from '../ChapterGlobalComponent/Audio'

class Health extends Component {
  state = {
    img: {imgData},
  }
  render () {
    return (
      <div className='Health'>
        <h1>HEALTH</h1>
        <div className='contentHealth'>

          <div className='part__Health'>
          <div className='part__Health__Image'>
            <img className='Health1'src={require(`../../assets/img/${this.state.img.imgData.Chapter2.Health1}`)} alt='logo' />
            <img className='Health2'src={require(`../../assets/img/${this.state.img.imgData.Chapter2.Health2}`)} alt='logo' />
          </div>
            <div className='part__Health__Content'>

                  <p>
                  Vietnam veterans' mortality is <span className='yellow__span'>7% higher than other fighters</span>.
                  </p>
                  <p>
                  In addition to external causes such as overdoses or suicide, many veterans have died from chronic illness. One of the known factors is the poisoning caused by the use of <span className='yellow__span'>Agent Orange by the US military in Vietnam</span>. 
                  </p>

                  <p>
                  It is the cause of a high rate of diabetes among veterans and <span className='yellow__span'>Agent Orange has have been suspected of causing cancer, lymphoma, leukemia, sarcoma...</span>
                  </p>
            </div>
          </div>
          
        </div>
      </div>
    )
  }
}

export default Health

