import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { Link} from 'react-router-dom';

function Carosel() {


const slides = [{
 url: 'https://imgs.search.brave.com/ovEirF7l3IdsBcScJFpwL_hEo58F2fprpdXZr9Z4viE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9m/YXNoaW9uLWxpdHRs/ZS1ib3lfNzE3Njct/OTUuanBnP3NpemU9/NjI2JmV4dD1qcGc'
},
 {
 url: 'https://imgs.search.brave.com/Lxd9N9-MThe093D3EIYgzTaMS4HRsKPGPWK4icuv30E/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NDE1NjIyMzI1Nzkt/NTEyYTIxMzYwMDIw/P2l4bGliPXJiLTQu/MC4zJml4aWQ9TTN3/eE1qQTNmREI4TUh4/elpXRnlZMmg4TVRC/OGZHRnVhVzFsZkdW/dWZEQjhmREI4Zkh3/dyZ3PTEwMDAmcT04/MA'
},
 {
 url: 'https://imgs.search.brave.com/wYQ8LtyFsc4ur3HfGc_gWhhX2XKd3IKv6spWX-q4puU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9u/YXR1cmUtbXlzdGVy/eS1wb3J0cmF5ZWQt/dHJhbnF1aWwtZm9y/ZXN0LXNjZW5lLWdl/bmVyYXRpdmUtYWlf/MTg4NTQ0LTk3NTUu/anBnP3NpemU9NjI2/JmV4dD1qcGc'
},
 {
 url: 'https://imgs.search.brave.com/S4JhAMhnQ49slATmA1VX3FDR4mNouMYhvk1h3MluO8w/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/NC8yNC8wOS8yNS9o/b3JzZS0yMjU1ODc2/XzY0MC5qcGc'
},
 {
 url: 'https://imgs.search.brave.com/LE1loCRQeEyDkCCWIS_JJu_sIgHkvw-yjYCo-bPyXgs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by93/b21hbi13aXRoLWJs/dWUtaGFpci1ibHVl/LWhhaXItc3RhbmRz/LWZyb250LWNvbG9y/ZnVsLWJhY2tncm91/bmRfMTM0MC0zOTA4/Ny5qcGc_c2l6ZT02/MjYmZXh0PWpwZw'
}, 
]

  
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className=' h-[300px] w-[600px] m-auto py-6 px-4 relative group'>
     <Link to = "/"> <div
      
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      >
       <h1 className='text-white text-2xl p-4 bg-indigo-500/20 w-[100px] self-end '>Heloo</h1>
       </div></Link>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled className='text-yellow-100 '/>
          </div>
        ))}
      </div>
    </div>
             )
  }

export default Carosel