import React from 'react'
import logo from '../assets/img/logo.svg'
import humberger from '../assets/img/icon-hamburger.svg'
import close from '../assets/img/icon-close.svg'
function Header() {
  return (
    <div className='Header'>

<div className='left__header'>
<img className='app__logo' src={logo} alt=""/>
<div className='for__large__device'>
  <span>  Features</span>
  <span> Pricing</span>
  <span>Resources</span>
</div>
</div>
<div className='left__header'>
  <div className='for__large__device'>
    <span>Login</span>
    <button>Sign Up</button>
  </div>
<img className='humberger__menu' src={humberger} alt=""/>
</div>

    </div>
  )
}

export default Header