/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'

function Shorten() {
    const [shortenUrl,setShortenUrl]=useState([])
    const [search,setSearch]=useState('')
    const [isCopy,setIsCopy]=useState('Copy')
    const [copyStyle,setCopyStyle]=useState('sh__button')
    const [search__error,setSearchError]=useState()
    const getshortenUrl=e=>{
      e.preventDefault()
      console.log(search)
      if(search===""){
        setSearchError(`input field is can't be empty`)
      }else{
        setSearchError()
        fetchUrl(search)
      }
    }
    const fetchUrl=(url)=>{
        fetch("https://api.shrtco.de/v2/shorten?url="+url)
          .then(res => res.json())
          .then(
            (result) => {
              const newSho = {
                oldUrl: url,
                newUrl: result.result.full_short_link2
              }
              const updatedUrlsArray = [...shortenUrl,newSho ];
              setShortenUrl(updatedUrlsArray)
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              console.log(error)
            }
          )
    }
    const getCopy=(e,url)=>{
      e.preventDefault()
      const el = document.createElement("input");
    el.value = url;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
setIsCopy('Copied')
setCopyStyle('copied__button')
    }
  return (
      <>
    <div className="shorten">
      <div className="ma__input">
      <input value={search} 
      type="text" placeholder="Shorten a link here..." 
      onChange={e=>setSearch(e.target.value)}
      name="search" className='url__input'/>
      <p className="error__text">{search__error}</p>
      </div>
      <button onClick={getshortenUrl} className='sh__button shorten_b'>Shorten It!</button>
    </div>
    {shortenUrl?.map((item, i) => {
      return (
<div className='url__lists'>
<span className="orginal__url">{item.oldUrl}</span>
<span className="new__url">{item.newUrl}</span>
<button onClick={e=>getCopy(e,item.newUrl)} className={copyStyle}>{isCopy}</button>
</div>
    )})}
    
    </>
  )
}

export default Shorten