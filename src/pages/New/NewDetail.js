import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const NewDetail = () => {
  const { id } = useParams();
  const [newsDetail, setNewsDetail] = useState({});

  useEffect(() => {
    const apiurl = `http://localhost:8080/news/get?id=${id}`;

    axios
      .get(apiurl)
      .then(response => {
        console.log(response.data);
        setNewsDetail(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  return (
    <div className='w-full h-auto flex justify-center items-center'>
      <div className="w-[1100px] h-full flex flex-row border-x-2 border-indigo-900/20 bg-custom-yellow/80 backdrop-blur-2xl p-4 text-yellow-100 justify-center relative">
        {/* Place the title over the image with absolute positioning */}
        <div  className="news-item relative w-full mt-10 ">
              
              <img src={newsDetail.cover} alt={newsDetail.title} className="w-full h-[540px] rounded-md " />
              <div className="absolute inset-0 ml-6  flex justify-start items-center h-[200px] ">
                <div className="bg-black/20 backdrop-blur-2xl mt-60 p-4 rounded-lg shadow-md hover:scale-110 transition-transform duration-300">
                  <h1 className="text-4xl ">{newsDetail.title}</h1>

                  <h1 className="text-2xl text-white font-light mt-2">Written by {newsDetail.author}</h1>
                  {/* Add more text/data here */}
                </div>
                
              </div>
              <h1 className='text-4xl my-4 bg-yellow-100/20 text-center p-4'>{newsDetail.author} Commented</h1>
              <p className='text-4xl my-4  text-center'>{newsDetail.content}</p>
            </div>
            
      </div>
    </div>
  );
};

export default NewDetail;