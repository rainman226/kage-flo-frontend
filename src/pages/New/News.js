import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NewDetail from './NewDetail';

const News = () => {
  const [news, setNews] = useState([]);

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
  }, []);

  return (
    <div className='w-full h-auto flex justify-center items-center'>
      <div className="w-[1100px] h-full flex flex-row border-x-2 border-indigo-900/20 bg-custom-yellow/80 backdrop-blur-2xl p-4 text-yellow-100 justify-center">
        <div className='w-[750px] h-full flex flex-col '>
          {news.map(item => (
            <div key={item.id} className="news-item relative w-[740px] mt-10 ">
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
          <div className='w-full'><h1 className='text-center text-2xl'>Recent added anime</h1></div>
        
      </div>
    </div>
  );
};

export default News;