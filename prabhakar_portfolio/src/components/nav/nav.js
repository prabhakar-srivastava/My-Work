import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'

const Nav = () => {
  return (
    <nav>
      <a href='#header'><AiOutlineHome /></a>
      <a href='#about'><AiOutlineUser /></a>
      <a href='#exp'><BiBook /></a>
      <a href='#project'><RiServiceLine /></a>
      <a href='#contact'><BiMessageSquareDetail /></a> 
      


    </nav>
  )
}

export default Nav