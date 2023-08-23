import React from 'react';
import { Link } from 'react-router-dom';
import { useTopAnimesContext } from '../../TopAnimesContext';

const TopAnimes = () => {
  const { topAnimesData, setSelectedAnime } = useTopAnimesContext(); // Use the context hook

  const handleAnimeClick = anime => {
    setSelectedAnime(anime);
  };

  return (
    <div className='text-2xl text-yellow-100 flex flex-col justify-center align-middle'>
      <h1>Top New Animes</h1>
      <ul className='flex flex-col justify-start align-middle'>
        {topAnimesData.slice(1, 4).map(anime => (
          <li key={anime.mal_id}>
            <Link to={`/anim/${anime.mal_id}`}>
              <img
                src={anime.images.jpg.image_url}
                alt={anime.title}
                className='w-[160px] h-auto border-x-0 mt-4 mx-12 mb-2 hover:scale-110 transition-transform duration-300'
                onClick={() => handleAnimeClick(anime)} // Handle anime click
              />
              <h1>{anime.title}</h1>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopAnimes;
