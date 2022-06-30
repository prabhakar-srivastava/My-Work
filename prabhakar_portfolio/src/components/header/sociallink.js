import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

function Sociallink() {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com' target='_blank'><BsLinkedin /></a>  
        <a href='https://www.github.com' target='_blank'><BsGithub /></a>
        <a href='https://www.instagram.com' target='_blank'><BsInstagram /></a>
        <a href='https://www.twitter.com'  target='_blank'><BsTwitter /></a>
        
    </div>
  )
}

export default Sociallink