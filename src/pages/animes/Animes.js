import {useEffect,useState} from 'react'
import Carosel from './Carosel'
import TopAnimes from './TopAnimes'
import { useAuth } from '../../AuthContext';
import axios from 'axios';

const Animes = () => {

   const [topAnimesData, setTopAnimesData] = useState([]);
  const [searchAnimesData, setSearcTopAnimesData] = useState([]);
   const [searchQuery, setSearchQuery] = useState('');
   const [currentPage, setCurrentPage] = useState(1);

   //Here in the useEffect we fetch and api that will send us a page of animes
   useEffect(() => {
  const apiUrl = `http://localhost:8080/anime/getAnime?page=${currentPage}`;
 
  axios.get(apiUrl)
    .then(response => {
      console.log('Fetched data:', response.data);
     setTopAnimesData(response.data);//here we save the animes from the page
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
    
    //in this fetch we get all the animes and we save it in a state wich we will send as prop for the search 
    const apiUrl2 = 'http://localhost:8080/anime/all';
     axios.get(apiUrl2)
    .then(response => {
      // console.log('Fetched data:', response.data);
     setSearcTopAnimesData(response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}, [currentPage]);


const handleSearch = () => {
    const searchApiUrl = `http://localhost:8080/anime/search?keyword=${searchQuery}`;

    axios.get(searchApiUrl)
      .then(response => {
        console.log('Search results:', response.data);
    
      })
      .catch(error => {
        console.error('Error fetching search results:', error);
      });
  };

  console.log(topAnimesData);

  return (
    
      <div className='w-full h-auto flex  justify-center items-center  '>
  <div className="  w-[1100px] h-auto flex flex-row border-x-2 border-indigo-900/20  bg-custom-yellow/80 backdrop-blur-2xl p-4 text-yellow-100  ">

    <div className='flex flex-col w-[800px]'>


    {/* Here i want to have the searchbar */}

<div className="mb-4">
            <input
              type="text"
              placeholder="Search for anime..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-[700px] px-4 py-2  border border-gray-300 rounded-md bg-slate-500"
            />
            <button
              onClick={handleSearch}
              className="mt-2 ml-3 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600  "
            >
              Search
            </button>
          </div>

  
   <h1 className='text-2xl   self-center'>All Animes</h1>
   {/* Here we have the pages  */}
   <Carosel  topAnimesData={topAnimesData} searchQuery={searchQuery} searchAnimesData={searchAnimesData}
    currentPage={currentPage} // Pass currentPage to Carosel
    setCurrentPage={setCurrentPage} />
   
 
</div>

<div className=' flex align-center text-center  flex-1 '>
<TopAnimes  />
</div>

  </div>


      </div>
    
  )
}

export default Animes