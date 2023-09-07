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

          <div className='ml-10 max-w-[600px]'>
          <p>{data.synopsis}</p>
           <p>{data.status}</p>
           <p>{data.mal_id}</p>
           

           <button>
            <HiSave className='w-[50px] h-[50px] text-black'/>
           </button>
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
