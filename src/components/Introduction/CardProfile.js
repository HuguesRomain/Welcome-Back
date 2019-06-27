import React from 'react'
import {Link} from 'react-router-dom';


const ProfileCard = ({ detailsProfile }) => {
  return (
   <Link to={`/${detailsProfile.link}`}> <div style={{backgroundImage: `url(../../assets/img/${detailsProfile.Img})`}} className='card__profile'>
      <p className='card__profile__name'>{detailsProfile.Name}</p>
      <img className='star' src={require(`../../assets/img/star.png`)} alt=""/>
      <p className="name__Chapter">{detailsProfile.Syndrome}</p>
    </div> </Link>
  )
}

export default ProfileCard