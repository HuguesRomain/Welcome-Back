import React from 'react'
import ProfileData from '../../data/ProfileData';
import { inherits } from 'util';

const ProfileCard = ({ detailsProfile }) => {
  return (
    <div style={{backgroundImage: `url(require("/Users/LouisHETIC/Documents/Projets/Welcome-Back/src/assets/img/musgrave.png"))`}} className='card__profile'>
      <p className='card__profile__name'>{detailsProfile.Name}</p>
      <img className='star' src={require(`../../assets/img/star.png`)} alt=""/>
      <p className="name__Chapter">{detailsProfile.Syndrome}</p>

    </div>
  )
}

export default ProfileCard