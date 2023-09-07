import {useState,useEffect} from 'react';
import { useAnime } from '../../AnimeContext'; // Import the useAnime hook
import AddAnime from "./AddAnime"
import { useParams } from 'react-router';
import ReviewAnime from './ReviewAnime';

const AnimeDetailPage = () => {
  const { selectedAnime } = useAnime();
  const [anime, setAnime] = useState([]);
  const [loading, setLoading] = useState(false);
  
   const {id} = useParams();

 //Here when we render the page we get the id from the url and fetch using that id
  useEffect(() => {
    // Fetch anime data from the API
    const animeResource = `http://localhost:8080/anime?id=${id}`;
    setLoading(true);
    
    fetch(animeResource) // Replace with the actual API URL
      .then(response => response.json())
      .then(data => {
        setAnime(data[0])
        console.log(data[0])
      })
      .catch(error => console.error('Error fetching data:', error))
      .finally(() => {
        setLoading(false);
      });
  }, [id])

  // Check if a selected anime is available
  if(loading){
    return <div className='w-full h-full text-center text-3xl text-red-600'>Loading ...</div>
  }

  //Here we check if the user manually put a different anime that we don't have
  if(!anime){
    return <div>No anime found</div>;
  }
  // if (!selectedAnime) {
  //   return <div>No Anime selected</div>;
  // }

  // Render the details of the selected anime
  return (
    <div className='w-full h-auto flex  justify-center items-center  '>
  <div className="  w-[1100px] h-auto flex flex-row border-x-2 border-indigo-900/20  bg-custom-yellow/80 backdrop-blur-2xl p-4 text-yellow-100  ">


   <div className='w-full h-full '>
    <div className='w-auto h-[500px] flex flex-row '> 
   <img
                src={anime.thumbnail}
                alt={anime.title}
                className='w-[350px] h-[530px]  rounded '
              />
     <div className=' flex flex-col align-middle ml-20 w-full text-3xl'>
             <h1 className=' text-yellow-100 my-3 '>Title: {anime.title}</h1>
             <h1 className=' text-yellow-100 my-3'>Type: {anime.type}</h1>
             <h1 className=' text-yellow-100 my-3'>Studio: {anime.studio}</h1>
             <h1 className=' text-yellow-100 my-3'>Status: {anime.status}</h1>
             <h1 className=' text-yellow-100 my-3'>Starte-Date: {anime.startDate}</h1>
             <h1 className=' text-yellow-100 my-3'>End-Date: {anime.endDate}</h1>
             <h1 className=' text-yellow-100 my-3'>Source: {anime.source}</h1>
            <h1 className=' text-yellow-100 my-3'>Episodes: {anime.episodes ? anime.episodes: "Ongoing" }</h1>
            <div className='w-full mt-4 flex mb-10' >
        
      </div>
      
      </div>
      <div className='w-[400px] text-center text-2xl'>
      <AddAnime selectedAnime={anime}/>
      </div>
              </div>
              <div className='mt-20'>
              <h1 className='text-4xl my-4 bg-yellow-100/20 text-center pb-2'>Sypnosis</h1>
       
      <h1 className=' '>{anime.description}</h1>
      </div>
      
      
         <div>
          {/* Here we call the ReviewAnime Component */}
            <ReviewAnime selectedAnime={anime}/>
         </div>
         
      </div>
      </div>
      {/* Include other details you want to display */}
    </div>
  );
};

export default AnimeDetailPage;





