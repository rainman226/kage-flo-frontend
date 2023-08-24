import React from 'react'
import { useState,useEffect } from 'react';
import { useUser } from '../../UserContext';
import { useAuth } from '../../AuthContext';

const AddAnime = (props) => {
  
  const {isLoggedIn}  = useAuth()

 const { profileData } = useUser();
//the state that tels us if it's saved
 const [isAnimeSaved, setIsAnimeSaved] = useState(false);
 const [status, setStatus] = useState('WATCHING'); // Default status
  const [watchedEpisodes, setWatchedEpisodes] = useState(0);
  const [grade, setGrade] = useState(null);

// console.log(props.selectedAnime.id);
// console.log(profileData.id);

 const checkAnimeSaved = async () => {
    const url = `http://localhost:8080/entry/hasEntry?userID=${profileData.id}&animeID=${props.selectedAnime.id}`;

    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setIsAnimeSaved(data);
        console.log(data); // Update the state based on the API response
      } else {
        // Handle the case where the request fails.
        console.error('Failed to check if anime is saved.');
      }
    } catch (error) {
      // Handle any network or other errors that may occur.
      console.error('An error occurred:', error);
    }
  };


 const saveAnime = async () => {
    const url = 'http://localhost:8080/entry/save';

    // Construct the request body (unchanged)
    const requestBody = {
      userID: {
        id: profileData.id,
      },
      animeID: {
        id: props.selectedAnime.id,
        title: props.selectedAnime.title,
        thumbnail: props.selectedAnime.thumbnail,
      },
      status: 'WATCHING',
      watchedEpisodes: 0,
      grade: null,
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        setIsAnimeSaved(true); // Update the state to indicate that the anime is saved
        console.log('Anime saved successfully.');
      } else {
        // Handle the case where the save request fails.
        console.error('Failed to save anime.');
      }
    } catch (error) {
      // Handle any network or other errors that may occur.
      console.error('An error occurred:', error);
    }
  };



   // useEffect to check if anime is saved when the component mounts
  useEffect(() => {
    checkAnimeSaved();
  }, []);

   return (
    // Conditional rendering based on isLoggedIn
      <div>

       {isLoggedIn && (
        <>
        <button
          onClick={isAnimeSaved ? null : saveAnime}
          className="bg-yellow-500/20 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded"
        >
          {isAnimeSaved ? 'Anime Saved' : 'Save Anime'}
        </button>
        {isAnimeSaved && (
          <div>
            <h1 className='text-3xl'>Status</h1>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className='bg-indigo-500 text-white rounded-md my-5 w-full text-center appearance-none py-2 px-3 leading-tight focus:outline-none focus:bg-indigo-500 focus:text-white hover:scale-110 transition-transform duration-300'
            >
              <option className='bg-indigo-500 rounded-md  ' value="WATCHING">WATCHING</option>
              <option className='bg-indigo-500 rounded-md ' value="COMPLETED">COMPLETED</option>
              <option className='bg-indigo-500 rounded-md ' value="ONHOLD">ONHOLD</option>
              <option className='bg-indigo-500 rounded-md ' value="DROPPED">DROPPED</option>
              <option className='bg-indigo-500 rounded-md ' value="Planned to watch">PLANNED TO WATCH</option>
            </select>
            <h1 className='text-3xl'>Watched Episodes</h1>
            <input
              type="number"
              className='bg-indigo-500/70 rounded-md text-center my-2 hover:scale-110 transition-transform duration-300'
              value={watchedEpisodes}
              onChange={(e) => {
               if(e.target.value <= props.selectedAnime.episodes)
               setWatchedEpisodes(parseInt(e.target.value))
              
              
              }
              }
            />
            <h1 className='text-3xl'>Grade</h1>
            <input
              type="number"
              className='bg-indigo-500/70 rounded-md text-center my-2 hover:scale-110 transition-transform duration-300'
              value={grade || ''}
              onChange={(e) => {
               if(e.target.value <= 10 )
               setGrade(parseFloat(e.target.value))
              }}
            />
            <h1 className='text-xl'>Please use dot notation ex: 6.5</h1>
          </div>
        )}
        </>
        )}
      </div>
    
  );
};

export default AddAnime