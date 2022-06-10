import React from 'react'
import illustration from '../assets/img/illustration-working.svg'
import Shorten from './Shorten'
function Home() {
  return (
    <>
    <div className='home'>
      <img className='illustration' src={illustration} alt=""/>
      <div className="home__desc">
        <h2>More than just shorter links</h2>
        <p> Build your brand’s recognition and get detailed insights 
  on how your links are performing.</p>
  <button>Get Started</button>
      </div>
    </div>
    <Shorten/>
    </>
  )
}

export default Home
