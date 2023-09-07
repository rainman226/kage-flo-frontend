import React, { useEffect, useState } from 'react';
import { useTopAnimesContext } from '../../TopAnimesContext';
import {HiSave } from 'react-icons/hi';
import { useParams } from 'react-router';

const AnimeDetail = () => {

  const [data, setData] = useState(null) 

   const {id} = useParams();
  
   useEffect(() => {
     const animeResource = `https://api.jikan.moe/v4/anime/${id}/full`;

     fetch(animeResource)
     .then(response => response.json())
     .then(data =>{ console.log(data.data)
    setData(data.data)
    })


   },[])

  const { selectedAnime } = useTopAnimesContext();
  console.log("This is data",data);
  return (
 <div className='w-full h-full flex  justify-center items-center  '>
  <div className="  w-[1100px] h-full flex  flex-row border-x-2 border-indigo-900/20  bg-custom-yellow/80 backdrop-blur-2xl p-4 text-yellow-100 justify-center ">

    <div className='w-full'>
      {data ? (
        <div className='text-yellow-100 flex'>

          <div className='w-[400px]'>
          <h1 className='text-center text-5xl '>Anime Detail</h1>
          <img className='w-full my-10 shadow hover:shadow-2xl' src={data.images.jpg.image_url} alt={data.title} />
          </div>

          <div className='ml-10 w-[600px] text-center flex flex-col justify-center'>
            <h1 className=' text-yellow-100 text-4xl font-bold'>Title: {data.title}</h1>
            <h1 className=' text-yellow-100 my-3 text-3xl '>Type: TV</h1>
            <h1 className=' text-yellow-100 my-3 text-3xl '>Studio: {data.studios[0].name}</h1>
            <h1 className=' text-yellow-100 my-3 text-3xl '>Status: {data.status}</h1>
          <h1 className=' text-yellow-100 my-3 text-3xl '>Start-Date: {data.aired.from}</h1>
          <h1 className=' text-yellow-100 my-3 text-3xl '>End-Date: {data.aired.to}</h1>
          <h1 className=' text-yellow-100 my-3 text-3xl '>Source: Manga</h1>
          
          <h1 className=' text-yellow-100 my-3 text-3xl '>Episodes: {data.episodes}</h1>
          
          
          
             {/* <h1 className=' text-yellow-100 my-3'>Type: {anime.type}</h1>
             <h1 className=' text-yellow-100 my-3'>Studio: {anime.studio}</h1>
             <h1 className=' text-yellow-100 my-3'>Status: {anime.status}</h1>
             <h1 className=' text-yellow-100 my-3'>Starte-Date: {anime.startDate}</h1>
             <h1 className=' text-yellow-100 my-3'>End-Date: {anime.endDate}</h1>
             <h1 className=' text-yellow-100 my-3'>Source: {anime.source}</h1>
            <h1 className=' text-yellow-100 my-3'>Episodes: {anime.episodes ? anime.episodes: "Ongoing" }</h1> */}
           

           {/* <button>
            <HiSave className='w-[50px] h-[50px] text-black'/>
           </button> */}
           </div>
            
        </div>
      ) : (
        <p>JAJAJAJ</p>
      )}
    </div>
    </div>
    </div>

  );
};

export default AnimeDetail;
