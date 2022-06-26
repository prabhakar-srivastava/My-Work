import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

function Sociallink() {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com'><BsLinkedin /></a>  
        <a href='https://www.github.com' ><BsGithub /></a>
        <a href='https://www.instagram.com'><BsInstagram /></a>
        <a href='https://www.twitter.com'  ><BsTwitter /></a>
        
    </div>
  )
}

export default Sociallink