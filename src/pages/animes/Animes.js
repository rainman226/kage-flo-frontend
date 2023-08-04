import React from 'react'
import Carosel from './Carosel'

const Animes = () => {
  return (
    
      <div className='w-full h-[701px] flex  justify-center items-center  '>
  <div className="  w-[1100px] h-full flex flex-row border-x-2 border-indigo-900/20  bg-custom-yellow/80 backdrop-blur-2xl p-4 text-yellow-100  ">

    <div className='flex flex-col w-[800px]'>


    
   <h1 className='text-2xl   self-center'>Newst Animes</h1>
   <Carosel />
   <h1 className='text-2xl   self-center  h-auto'>All Animes</h1>
   <Carosel />
</div>

<div className='text-2xl border-x-2 border-yellow-100/20 flex-1 text-center'>
  Top Airing Anime
</div>

  </div>


      </div>
    
  )
}

export default Animes