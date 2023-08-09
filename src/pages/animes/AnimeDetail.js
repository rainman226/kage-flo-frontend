import React from 'react';
import { useTopAnimesContext } from '../../TopAnimesContext';

const AnimeDetail = () => {
  const { selectedAnime } = useTopAnimesContext();
  console.log(selectedAnime);
  return (
 <div className='w-full h-full flex  justify-center items-center  '>
  <div className="  w-[1100px] h-full flex  flex-row border-x-2 border-indigo-900/20  bg-custom-yellow/80 backdrop-blur-2xl p-4 text-yellow-100 justify-center ">

    <div className='w-full'>
      {selectedAnime ? (
        <div className='text-yellow-100 flex'>

          <div className='w-[400px]'>
          <h1 className='text-center text-5xl '>Anime Detail</h1>
          <img className='w-full my-10 shadow hover:shadow-2xl' src={selectedAnime.images.jpg.image_url} alt={selectedAnime.title} />
          </div>

          <div className='ml-10 max-w-[600px]'>
          <p>{selectedAnime.synopsis}</p>
           <p>{selectedAnime.status}</p>
           <p>{selectedAnime.mal_id}</p>
           </div>
            
        </div>
      ) : (
        <p>No anime selected</p>
      )}
    </div>
    </div>
    </div>

  );
};

export default AnimeDetail;
