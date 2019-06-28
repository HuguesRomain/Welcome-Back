import React, { Component } from 'react'
import imgData from '../../data/imgData'
import VideoPetitChapter from '../ChapterGlobalComponent/VideoPetitChapter'

class TraumaticEvents extends Component {
  state = {
    img: {imgData},
  }
  render () {
    return (
        <div className='Therapy'>
        <h2>THE THERAPY</h2>
        <div className='contentTherapy'>

          <div className='part__Therapy'>

            <div className='part__Therapy__Image'>
            <div className='videoChapter3'>
              <VideoPetitChapter link={'https://www.youtube.com/embed/gafDF3DKVnk'} />
              <p className='VideoPetitSource'>Jim Alderman, Marine Corps veteran
                Extract from “Bay Pine VA Health Center Adresses PTSD” by US Department of Defense
              </p>
            </div>
            </div>

            <div className='part__Therapy__Content'>
              <p>Yet at the end of the war, the VVAW proposed groups of words, called<span className='yellow__span'> "rap groups" </span>reserved for veterans, in contradiction of the rule who forbid soldier to talk during 72 years.

                  Other ways were salvating for some, <span className='yellow__span'>to talk</span> : the theater, art and writing were suggested. 
              </p>

              <p>
                Jim Murphy has supported a number of projects such as a special justice system, detox programs, education programs, prisons who provides <span className='yellow__span'>special services  and only for veterans</span>.
              </p>
            </div>

          </div>
          

        </div>
      </div>
    )
  }
}

export default TraumaticEvents