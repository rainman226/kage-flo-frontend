import { useState, useEffect  } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { Link , useNavigate} from 'react-router-dom';
import { useAnime } from '../../AnimeContext'; // Import the useAnime hook

function Carosel(props) {
  const { selectedAnime,setSelectedAnime } = useAnime(); // Access the setAnime function from the context
   console.log(props.topAnimesData)

   const navigate = useNavigate();

  

  const handleAnimeClick = (selectedAnime) => {
    // Set the selected anime in the context
    setSelectedAnime(selectedAnime);
    console.log(selectedAnime)

    // navigate(`/anime/${selectedAnime.id}`);

  };
   


  const [animeData, setAnimeData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

 useEffect(() => {
    // Fetch anime data from the API
    fetch('https://api.jikan.moe/v4/anime/540/full') // Replace with the actual API URL
      .then(response => response.json())
      .then(data => {setAnimeData({data})
        // console.log({data});
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);


    



  const prevSlide = () => {
   if (props.currentPage > 1) {
      props.setCurrentPage(props.currentPage - 1);
    }
    console.log("Current Page:", props.currentPage);
  };

  const nextSlide = () => {
    if (props.currentPage < 3) {
      props.setCurrentPage(props.currentPage + 1);
    }
    console.log("Current Page:", props.currentPage);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };


 // Filter the anime data based on the search query
  const filteredAnimes = props.searchQuery
    ? props.searchAnimesData.filter(anime => {
        const title = anime.title.toLowerCase();
        const query = props.searchQuery.toLowerCase();
        return title.includes(query);
      })
    : props.topAnimesData; // If no search query, display all animes




  return (
    <div className=' h-full w-full m-auto py-6 px-4 relative group flex flex-col transition-transform duration-300 ease-in-out'>
     
<div className='w-auto h-auto flex flex-wrap justify-center  '>
      {filteredAnimes.map((anime, index) => (
        <Link 
         to={`/anime/${anime.id}`}
         key={index}  onClick={() => handleAnimeClick(anime)}>
          
          <div
              className='h-[200px] w-[120px] mx-4 mb-20 ml-3'
          >
            
             <img
                src={anime.thumbnail}
                alt={anime.title}
                className='w-full h-full object-cover rounded hover:scale-110 transition-transform duration-300'
              />
              <h1 
            // className='text-white text-2xl p-4 bg-black/20 backdrop-blur-2xl w-[270px] h-full self-end rounded-r-lg'
            className='text-yellow-100 align-middle mt-2 transition-opacity duration-300 hover:opacity-75'
            >
              {anime.title}
            </h1>

          </div>
          
        </Link>
      ))}
 </div>






      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-1 text-2xl rounded-full  p-2 bg-black/20 text-white cursor-pointer hover:text-indigo-500 transform hover:scale-125 transition-transform duration-300'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-1 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:text-indigo-500 transform hover:scale-125 transition-transform duration-300'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      {/* <div className='flex top-4 justify-center py-2 mt-10' >
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled className='text-yellow-100 '/>
          </div>
        ))} 
      </div> */}
    </div>
             )
  }

export default Carosel