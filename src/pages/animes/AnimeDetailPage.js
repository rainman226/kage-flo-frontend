import React from 'react';
import { useAnime } from '../../AnimeContext'; // Import the useAnime hook
import AddAnime from "./AddAnime"


const AnimeDetailPage = () => {
  const { selectedAnime } = useAnime();

  // Check if a selected anime is available
  if (!selectedAnime) {
    return <div>No Anime selected</div>;
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
     <div className=' flex flex-col align-middle ml-20 w-full text-3xl'>
             <h1 className=' text-yellow-100 my-3 '>Title: {selectedAnime.title}</h1>
             <h1 className=' text-yellow-100 my-3'>Type: {selectedAnime.type}</h1>
             <h1 className=' text-yellow-100 my-3'>Studio: {selectedAnime.studio}</h1>
             <h1 className=' text-yellow-100 my-3'>Status: {selectedAnime.status}</h1>
             <h1 className=' text-yellow-100 my-3'>Starte-Date: {selectedAnime.startDate}</h1>
             <h1 className=' text-yellow-100 my-3'>End-Date: {selectedAnime.endDate}</h1>
             <h1 className=' text-yellow-100 my-3'>Source: {selectedAnime.source}</h1>
            <h1 className=' text-yellow-100 my-3'>Episodes: {selectedAnime.episodes ? selectedAnime.episodes: "Ongoing" }</h1>
            <div className='w-full mt-4 flex mb-10' >
        
      </div>
      
      </div>
      <div className='w-[400px] text-center text-2xl'>
      <AddAnime selectedAnime={selectedAnime}/>
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





