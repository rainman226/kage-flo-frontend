import React from 'react';
import { useAnime } from '../../AnimeContext'; // Import the useAnime hook

const AnimeDetailPage = () => {
  const { selectedAnime } = useAnime();

  // Check if a selected anime is available
  if (!selectedAnime) {
    return <div>No anime selected</div>;
  }

  // Render the details of the selected anime
  return (
    <div className='w-full h-auto flex  justify-center items-center  '>
  <div className="  w-[1100px] h-auto flex flex-row border-x-2 border-indigo-900/20  bg-custom-yellow/80 backdrop-blur-2xl p-4 text-yellow-100  ">


   <div className='w-full h-full '>
    <div className='w-auto h-[500px] flex flex-row '> 
   <img
                src={selectedAnime.thumbnail}
                alt={selectedAnime.title}
                className='w-[350px] h-[530px]  rounded '
              />
     <div className=' flex flex-col align-middle ml-20 w-[400px] text-3xl'>
             <h1 className=' text-yellow-100 my-2 '>Title: {selectedAnime.title}</h1>
             <h1 className=' text-yellow-100 my-2'>Type: {selectedAnime.type}</h1>
             <h1 className=' text-yellow-100 my-2'>Studio: {selectedAnime.studio}</h1>
             <h1 className=' text-yellow-100 my-2'>Status: {selectedAnime.status}</h1>
             <h1 className=' text-yellow-100 my-2'>Starte-Date: {selectedAnime.startDate}</h1>
             <h1 className=' text-yellow-100 my-2'>End-Date: {selectedAnime.endDate}</h1>
             <h1 className=' text-yellow-100 my-2'>Source: {selectedAnime.source}</h1>
            <h1 className=' text-yellow-100 my-2'>Episodes: {selectedAnime.episodes}</h1>
            <div className='w-full mt-4 flex mb-10' >
        <button className='  rounded bg-yellow-100/10  px-2 '>Save</button>
        <button className='  rounded bg-yellow-100/10  px-2 '>Watch Later</button>
        <button className='  rounded bg-yellow-100/10  px-2 ' >Watching</button>
      </div>
      </div>
      
              </div>
              <div className='mt-20'>
              <h1 className='text-4xl my-4 bg-yellow-100/20 text-center pb-2'>Sypnosis</h1>
       
      <h1 className=' '>{selectedAnime.description}</h1>
      </div>
      
      
      
      </div>
      </div>
      {/* Include other details you want to display */}
    </div>
  );
};

export default AnimeDetailPage;





