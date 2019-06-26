import React, { Component } from 'react'
import imgData from '../../data/imgData'

class PtsdMechanism extends Component {
  state = {
    img: {imgData},
  }
  render () {
    return (
      <div className='ptsdMechanism'>
        <h2>THE PTSD MECHANISM</h2>
        <div className='ptsdMechanism__contentBlock'>
          <div className='ptsdMechanism__content'>
            <div className='Steps'>
              <h3>Step 1</h3>
                <h4>WARTIME AROCITIES</h4>  
                  <p>Violation of internalize standards of behavior</p>
            </div>

            <div>
              <img className='Soldat4' src={require(`../../assets/img/${this.state.img.imgData.Chapter1.Tank1}`)} alt='logo' />
            </div>

          </div>

          <div className='ptsdMechanism__content'>
            <div>
              <img className='Soldat4' src={require(`../../assets/img/${this.state.img.imgData.Chapter1.Tank2}`)} alt='logo' />
            </div>
              <div className='Steps'>
                <h3>Step 2</h3>
                  <h4>GUILT</h4>  
                    <p>Failure to integrate amoral acts within personal schemas</p>
              </div>
          </div>
          <div className='ptsdMechanism__content'>
            <div className='Steps'>
              <h3>Step 3</h3>
                <h4>PTSD SYMPTOMS</h4>  
                  <p>Re-experiencing, Distress, Avoidance Hyperarousal</p>
            </div>

            <div>
              <img className='Soldat4' src={require(`../../assets/img/${this.state.img.imgData.Chapter1.Tank3}`)} alt='logo' />
            </div>
          </div>
          <div className='Step'>
            <h3>Step 4</h3> 
                <p>Belief that oneself is irredeemable or reduced trust in others/socials </p>
          </div>

          <div className='Step'>
            <h3><span className='yellow__span'>CONCLUSION</span></h3>
                <p>DEPRESSION AND SUICIDAL IDEATION OR HOSTILITY AND AGGRESSION.</p>
          </div>

            <p className='quote2__chapter1__part1'>“ I don’t think Americans realized how hurt we were. That the best that could hope for was indefference. ”</p><br/><br/>
            <p className='quote2__chapter1__part2'>- John Musgrave -
            </p>
        </div> 
      </div>
    )
  }
}

export default PtsdMechanism