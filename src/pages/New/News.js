import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NewDetail from './NewDetail';

const News = () => {
  const [news, setNews] = useState([]);
  const [lastAnime,setLastAnime] = useState([]);

  useEffect(() => {
    const apiurl = 'http://localhost:8080/news/all';

    axios
      .get(apiurl)
      .then(response => {
        console.log(response.data);
        setNews(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

    const apiurl2 = 'http://localhost:8080/anime/all';

    axios.get(apiurl2)
    .then(response => {
      console.log(response.data);
      setLastAnime(response.data)
      console.log(lastAnime);
    })


  }, []);

  return (
    <div className='w-full h-auto flex justify-center items-center'>
      <div className="w-[1100px] h-full flex flex-row border-x-2 border-indigo-900/20 bg-custom-yellow/80 backdrop-blur-2xl p-4 text-yellow-100 justify-center">
        <div className='w-[750px] h-full flex flex-col '>
          <h1 className='text-center text-2xl text-yellow-100'>This Are all The News</h1>
          {news.map(item => (
            <div key={item.id} className="news-item relative w-[740px] mt-5 ml-4">
              <Link to={`/newDetail/${item.id}`}>
              <img src={item.cover} alt={item.title} className="w-full h-[240px] rounded-md " />
              <div className="absolute inset-0 flex justify-center items-center h-[200px] ">
                <div className="bg-black/20 backdrop-blur-2xl mt-8 p-4 rounded-lg shadow-md hover:scale-110 transition-transform duration-300">
                  <h1 className="text-xl font-semibold">{item.title}</h1>
                  {/* Add more text/data here */}
                </div>
              </div></Link>
            </div>
          ))}</div>
          <div className='w-full'><h1 className='text-center text-2xl'>Recent added anime</h1>
          
          {lastAnime.slice(-4).map((item, key) => {
  return (
    <div className='ml-11' key={key}>
      <Link to={`/anime/${item.id}`} className='block w-[240px] h-[335px] relative'>
        <div className='w-full h-full'>
          <img
            src={item.thumbnail}
            className='w-full h-full rounded-md shadow-lg hover:scale-110 transition-transform duration-300 my-5'
            alt=''
          />
        </div>
        <div className='absolute inset-0 w-full h-full backdrop-filter backdrop-blur-lg opacity-0 hover:opacity-100 flex items-center justify-center transition-all duration-300'>
          <h1 className='text-center text-yellow-100 text-lg'>{item.title}</h1>
        </div>
      </Link>
    </div>
  );
})}




          </div>
        
      </div>
    </div>
  );
};

export default News;