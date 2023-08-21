import {useEffect,useState} from 'react'
import Carosel from './Carosel'
import TopAnimes from './TopAnimes'
import { useAuth } from '../../AuthContext';
import axios from 'axios';

const Animes = () => {

   const [topAnimesData, setTopAnimesData] = useState([]);


   useEffect(() => {
  const apiUrl = 'http://localhost:8080/anime/getAnime?page=1';

  axios.get(apiUrl)
    .then(response => {
      console.log('Fetched data:', response.data);
     setTopAnimesData(response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}, []);

  console.log(topAnimesData);

  return (
    
      <div className='w-full h-auto flex  justify-center items-center  '>
  <div className="  w-[1100px] h-auto flex flex-row border-x-2 border-indigo-900/20  bg-custom-yellow/80 backdrop-blur-2xl p-4 text-yellow-100  ">

    <div className='flex flex-col w-[800px]'>


    {/* Here i want to have the searchbar */}
   <h1 className='text-2xl   self-center'>All Animess</h1>
   <Carosel topAnimesData={topAnimesData}/>
   
 
</div>

<div className=' flex align-center text-center  flex-1 '>
<TopAnimes  />
</div>

  </div>


      </div>
    
  )
}

export default Animes