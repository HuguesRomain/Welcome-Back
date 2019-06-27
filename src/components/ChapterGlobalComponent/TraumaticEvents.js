import React, { Component } from 'react'
import imgData from '../../data/imgData'
import VideoPetitChapter from '../ChapterGlobalComponent/VideoPetitChapter'
import AudioData from '../../data/AudioData'; 

class TraumaticEvents extends Component {
  state = {
    img: {imgData},
  }
  render () {
    return (
        <div className='TraumaticEvents'>
        <h2>TRAUMATIC EVENTS</h2>
        <div className="traitPTSD"></div>
        <div className='contentTraumaticEvents'>

          <div className='part__TraumaticEvents'>

            <div className='part__TraumaticEvents__Image'>
            <p className='part__TraumaticEvents__text'>
              These <span className='yellow__span'>young soldiers</span> went to war with the idea of ​​returning as <span className='yellow__span'>heroes like their fathers</span>.<br></br><br></br>
            </p>
            <p className='part__TraumaticEvents__text'>
              Beyond the <span className='yellow__span'>disillusionment</span> of the reality of the battlefield, the atrocities committed, 
              seen, suffered during the war, the losses, the shock of defeat and contempt that <span className='yellow__span'>the soldiers
              had to face</span> when they returned, several factors can be put involved in their syndromes.
            </p>
            <div className='videoChapter1'>
              <VideoPetitChapter link={'https://www.youtube.com/embed/JFXarq7J9Rc'} />
              <p className='VideoPetitSource'>Extract from “The Vietnam War”, episode 5</p>
            </div>
            </div>

            <div className='part__TraumaticEvents__Content'>

            <img className='Trauma1' src={require(`../../assets/img/${this.state.img.imgData.Chapter1.Trauma1}`)} alt='logo' />
            <img className='Trauma2' src={require(`../../assets/img/${this.state.img.imgData.Chapter1.Trauma2}`)} alt='logo' />
            <img className='Trauma3' src={require(`../../assets/img/${this.state.img.imgData.Chapter1.Trauma3}`)} alt='logo' />
          </div>

          </div>
          

        </div>
      </div>
    )
  }
}

export default TraumaticEvents