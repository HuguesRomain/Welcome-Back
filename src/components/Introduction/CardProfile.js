import React from 'react'
import ProfileData from '../../data/ProfileData';
import { inherits } from 'util';
import {Link} from 'react-router-dom'

const ProfileCard = ({ detailsProfile }) => {
  return (
   <link to={`/${detailsProfile.Link}`}> <div style={{backgroundImage: `url(../../assets/img/${ProfileData.Img})`}} className='card__profile'>
      <p className='card__profile__name'>{detailsProfile.Name}</p>
      <img className='star' src={require(`../../assets/img/star.png`)} alt=""/>
      <p className="name__Chapter">{detailsProfile.Syndrome}</p>
    </div> </link>
  )
}

export default ProfileCard