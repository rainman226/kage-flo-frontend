import React from 'react'

const News = () => {


  const imageUrl = 'https://cdn.myanimelist.net/images/anime/1607/117271.jpg';


  return (
    <div className='w-full h-[1000px] flex  justify-center items-center  '>
  <div className="  w-[1100px] h-full flex  flex-row border-x-2 border-indigo-900/20  bg-custom-yellow/80 backdrop-blur-2xl p-4 text-yellow-100 justify-center ">


      <img src={imageUrl}></img>


  </div>
  </div>
  )
}

export default News