import React, { Component } from 'react'
import imgData from '../../data/imgData'
import VideoPetitChapter from '../ChapterGlobalComponent/VideoPetitChapter'
import AudioData from '../../data/AudioData'; 

class Veterans extends Component {
  state = {
    img: {imgData},
  }
  render () {
    return (
        <div className='Veterans'>
        <h2>VETRANS OF VIETNAM AGAINST WAR</h2>
        <div className='contentVeterans'>

          <div className='part__Veterans'>

            <div className='part__Veterans__Image'>
            <p className='part__Veterans__text'>
              Created in 1971, the VVAW worked, after the war, to ensure that the vets received treatment and benefits for the PTSD and the diseases caused by the Agent Orange.<br /><br />

              They were the <span className='yellow__span'>first to hear veterans</span> suffering from PTSD and to offer therapies.Through their work the syndrome is <span className='yellow__span'>officially recognized in 1980</span>.
            </p>
            <p className='part__Veterans__text'>
            In a first time, considerated unpatriotic and anti-american by the others vets, they earned respect by the help done and others associations joined the VVAW.<br/><br/>

Members have even taken legal actions and won compensations from the companies like Monsanto who created Agent Orange (200 000 
complainants).
            </p>
            </div>

            <div className='part__Veterans__Content'>

            <img className='Veterans1' src={require(`../../assets/img/${this.state.img.imgData.Chapter3.Veterans1}`)} alt='logo' />
            <img className='Veterans3' src={require(`../../assets/img/${this.state.img.imgData.Chapter3.Veterans2}`)} alt='logo' />
            <img className='Veterans2' src={require(`../../assets/img/${this.state.img.imgData.Chapter3.Veterans3}`)} alt='logo' />
          </div>

          </div>
          

        </div>
        <p className='quote2__chapter1__part1'>“Just as an individual requires a period of calm and quiet after a traumatic experience, so does the nation. Now, maybe we're both ready to rationally come to terms with the experience.”</p><br/><br/>
            <p className='quote2__chapter1__part2'>- Bobby Muller -
            </p>
      </div>
    )
  }
}

export default Veterans