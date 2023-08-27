import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useUser } from '../../UserContext';


const NewsEntryForm = () => {

  const {profileData} = useUser();
  console.log(profileData);


  const schema = yup.object().shape({
    title: yup.string().required('Title is required'),
    cover: yup.string().url('Cover must be a valid URL').required('Cover URL is required'),
    content: yup.string().required('Content is required'),
    author: yup.string().required('Author is required'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      author: profileData.username || '', // Set the default value to the username if available
    },
  });

  const onSubmit = async (data) => {
    try {
      // Make a POST request to the specified endpoint
      const response = await axios.post('http://localhost:8080/news/add', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('News data sent successfully:', response.data);
      // Add any navigation or success message logic here
    } catch (error) {
      console.error('Error sending news data:', error);
      // Handle the error, e.g., display an error message
    }
  };

  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className="w-[1100px] h-full flex justify-center border-x-2 border-indigo-900/20 bg-custom-yellow/80 backdrop-blur-2xl p-4 text-yellow-100">
        <div className="w-auto h-auto flex flex-col items-center justify-center mb-20 rounded-lg transition ease-in-out delay-150 bg-indigo-900/10 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-900/10 duration-300 border-black self-center">
          <h1 className="mt-10 text-4xl text-yellow-100">News Entry</h1>
          <form className="flex flex-col justify-center align-middle py-10 w-[300px]" onSubmit={handleSubmit(onSubmit)}>
            <p className="mb-1 text-white">Title</p>
            <input className="bg-yellow-500/20 text-white p-1 disabled:opacity-75 mb-1" type="text" placeholder="Title..." {...register("title")} />
            <p className="err">{errors.title?.message}</p>

            <p className="mb-1 text-white">Cover URL</p>
            <input className="bg-yellow-500/20 text-white p-1 disabled:opacity-75 mb-1" type="text" placeholder="Cover URL..." {...register("cover")} />
            <p className="err">{errors.cover?.message}</p>

            <p className="mb-1 text-white">Content</p>
            <textarea className="bg-yellow-500/20 text-white p-1 disabled:opacity-75 mb-1" placeholder="Content..." {...register("content")} />
            <p className="err">{errors.content?.message}</p>

          <p className="mb-1 text-white">Author</p>
            <input className="bg-yellow-500/20 text-white p-1 disabled:opacity-75 mb-1" type="text" placeholder="Author..." {...register("author")} />
            <p className="err">{errors.author?.message}</p>

            <input className="rounded mt-3 bg-yellow-100 hover:bg-white cursor-pointer text-black" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsEntryForm;