import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';

const AnimeEntryForm = () => {
  const schema = yup.object().shape({
    title: yup.string().required('Title is required'),
    startDate: yup.string().required('Start Date is required'),
    endDate: yup.string().required('End Date is required'),
    description: yup.string().required('Description is required'),
    thumbnail: yup.string().url('Thumbnail must be a valid URL').required('Thumbnail URL is required'),
    type: yup.string().required('Type is required'),
    episodes: yup.number().integer().min(1, 'Episodes must be at least 1').required('Episodes is required'),
    status: yup.string().required('Status is required'),
    source: yup.string().required('Source is required'),
    studio: yup.string().required('Studio is required'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      // Make a POST request to the specified endpoint
      const response = await axios.post('http://localhost:8080/anime/add', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Anime data sent successfully:', response.data);
      // Add any navigation or success message logic here
    } catch (error) {
      console.error('Error sending anime data:', error);
      // Handle the error, e.g., display an error message
    }
  };

  return (
   <div className='w-full h-full flex  justify-center items-center  '>
  <div className="  w-[1100px] h-full flex justify-center border-x-2 border-indigo-900/20  bg-custom-yellow/80 backdrop-blur-2xl p-4 text-yellow-100  ">



    

      <div className="w-auto h-auto flex flex-col items-center justify-center mb-20 rounded-lg transition ease-in-out delay-150 bg-indigo-900/10 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-900/10 duration-300 border-black self-center">

        <h1 className="mt-10 text-4xl text-yellow-100">Anime Entry</h1>

        <form className="flex flex-col justify-center align-middle py-10 w-[300px] 
        
        " onSubmit={handleSubmit(onSubmit)}>
          <p className="mb-1 text-white">Title</p>
          <input className="bg-yellow-500/20 text-white p-1 disabled:opacity-75 mb-1" type="text" placeholder="Title..." {...register("title")} />
          <p className="err">{errors.title?.message}</p>

          <p className="mb-1 text-white">Start Date</p>
          <input className="bg-yellow-500/20 text-white p-1 disabled:opacity-75 mb-1" type="date" placeholder="Start Date..." {...register("startDate")} />
          <p className="err">{errors.startDate?.message}</p>

          <p className="mb-1 text-white">End Date</p>
          <input className="bg-yellow-500/20 text-white p-1 disabled:opacity-75 mb-1" type="date" placeholder="End Date..." {...register("endDate")} />
          <p className="err">{errors.endDate?.message}</p>

          <p className="mb-1 text-white">Description</p>
          <textarea className="bg-yellow-500/20 text-white p-1 disabled:opacity-75 mb-1" placeholder="Description..." {...register("description")} />
          <p className="err">{errors.description?.message}</p>

          <p className="mb-1 text-white">Thumbnail URL</p>
          <input className="bg-yellow-500/20 text-white p-1 disabled:opacity-75 mb-1" type="text" placeholder="Thumbnail URL..." {...register("thumbnail")} />
          <p className="err">{errors.thumbnail?.message}</p>

          <p className="mb-1 text-white">Type</p>
          <input className="bg-yellow-500/20 text-white p-1 disabled:opacity-75 mb-1" type="text" placeholder="Type..." {...register("type")} />
          <p className="err">{errors.type?.message}</p>

          <p className="mb-1 text-white">Episodes</p>
          <input className="bg-yellow-500/20 text-white p-1 disabled:opacity-75 mb-1" type="number" placeholder="Episodes..." {...register("episodes")} />
          <p className="err">{errors.episodes?.message}</p>

          <p className="mb-1 text-white">Status</p>
          <input className="bg-yellow-500/20 text-white p-1 disabled:opacity-75 mb-1" type="text" placeholder="Status..." {...register("status")} />
          <p className="err">{errors.status?.message}</p>

          <p className="mb-1 text-white">Source</p>
          <input className="bg-yellow-500/20 text-white p-1 disabled:opacity-75 mb-1" type="text" placeholder="Source..." {...register("source")} />
          <p className="err">{errors.source?.message}</p>

          <p className="mb-1 text-white">Studio</p>
          <input className="bg-yellow-500/20 text-white p-1 disabled:opacity-75 mb-1" type="text" placeholder="Studio..." {...register("studio")} />
          <p className="err">{errors.studio?.message}</p>

          <input className="rounded mt-3 bg-yellow-100 hover:bg-white cursor-pointer text-black" type="submit" value="Submit" />
        </form>
      
    </div>
    </div>
    </div>
  );
};

export default AnimeEntryForm;