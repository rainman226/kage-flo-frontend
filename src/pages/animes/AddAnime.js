import React, { useState, useEffect } from 'react';
import { useUser } from '../../UserContext';
import { useAuth } from '../../AuthContext';

const AddAnime = (props) => {
  const { isLoggedIn } = useAuth();
  const { profileData } = useUser();
  const [isLoading, setIsLoading] = useState(true);

  const [isAnimeSaved, setIsAnimeSaved] = useState(false);
  const [status, setStatus] = useState('WATCHING');
  const [watchedEpisodes, setWatchedEpisodes] = useState(0);
  const [grade, setGrade] = useState(null);
  const [animeEntryId, setAnimeEntryId] = useState(null);
  const [animeData, setAnimeData] = useState(null);

  const checkAnimeSaved = async () => {

   setIsLoading(true);
    // Your API endpoint to check if anime is saved
    const url = `http://localhost:8080/entry/hasEntry?userID=${profileData.id}&animeID=${props.selectedAnime.id}`;

    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setIsAnimeSaved(data);

        if (data) {
          const entryIdResponse = await fetch(
            `http://localhost:8080/entry/getEntryId?userID=${profileData.id}&animeID=${props.selectedAnime.id}`
          );
          if (entryIdResponse.ok) {
            const entryIdData = await entryIdResponse.json();
            setAnimeEntryId(entryIdData);

            // Fetch and update status, watched episodes, and grade
            const animeDataResponse = await fetch(
              `http://localhost:8080/entry/get?id=${entryIdData}`
            );
            if (animeDataResponse.ok) {
              const animeData = await animeDataResponse.json();
              setStatus(animeData.status);
              setWatchedEpisodes(animeData.watchedEpisodes);
              setGrade(animeData.grade);
              setAnimeData(animeData);
            }
          }
        }
        setIsLoading(false);
      } else {
        console.error('Failed to check if anime is saved.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setIsLoading(false);
    }
  };

  const saveAnime = async () => {
    // Your API endpoint to save anime
    const url = 'http://localhost:8080/entry/save';

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
        setIsAnimeSaved(true);
        console.log('Anime saved successfully.');
      } else {
        console.error('Failed to save anime.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const updateAnimeEntry = async () => {
    if (!animeEntryId) {
      console.error('Anime entry ID is missing.');
      return;
    }

    // Your API endpoint to update anime entry
    const url = `http://localhost:8080/entry/update/${animeEntryId}`;

    const requestBody = {
      status,
      watchedEpisodes,
      grade,
    };

    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        console.log('Anime entry updated successfully.');
      } else {
        console.error('Failed to update anime entry.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  useEffect(() => {
    checkAnimeSaved();
  }, [props.selectedAnime.id]);

  return (
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
              <h1 className="text-3xl">Status</h1>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="bg-indigo-500 text-white rounded-md my-5 w-full text-center appearance-none py-2 px-3 leading-tight focus:outline-none focus:bg-indigo-500 focus:text-white hover:scale-110 transition-transform duration-300"
              >
                <option className="bg-indigo-500 rounded-md" value="WATCHING">
                  WATCHING
                </option>
                <option className="bg-indigo-500 rounded-md" value="COMPLETED">
                  COMPLETED
                </option>
                <option className="bg-indigo-500 rounded-md" value="ONHOLD">
                  ONHOLD
                </option>
                <option className="bg-indigo-500 rounded-md" value="DROPPED">
                  DROPPED
                </option>
                <option
                  className="bg-indigo-500 rounded-md"
                  value="PTW"
                >
                  PTW
                </option>
              </select>
              <h1 className="text-3xl">Watched Episodes</h1>
              <input
                type="number"
                className="bg-indigo-500/70 rounded-md text-center my-2 hover:scale-110 transition-transform duration-300"
                value={watchedEpisodes}
                onChange={(e) => {
                  if (e.target.value <= props.selectedAnime.episodes)
                    setWatchedEpisodes(parseInt(e.target.value));
                }}
              />
              <h1 className="text-3xl">Grade</h1>
              <input
                type="number"
                className="bg-indigo-500/70 rounded-md text-center my-2 hover:scale-110 transition-transform duration-300"
                value={grade || ''}
                onChange={(e) => {
                  if (e.target.value <= 10) setGrade(parseFloat(e.target.value));
                }}
              />
              <h1 className="text-xl">Please use dot notation ex: 6.5</h1>
              <button
                onClick={updateAnimeEntry}
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded w-full mt-2"
              >
               Done
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AddAnime;