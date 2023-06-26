import React from 'react';

const AboutMe = () => {
  return (
    <>
      <div id="about" className="w-full bg-zinc-950 px-10 sm:px-18 pt-24">
        <div className='flex flex-col'>
            {/* title mobile*/}
          <h1 className="md:hidden text text-2xl pb-12">A bit about me</h1>
            <div className='flex flex-col-reverse sm:flex-col lg:flex-row'>
            <div data-aos-duration="4000" data-aos="zoom-in-right" className=' pb-12 md:pl-8 lg:w-1/2 flex flex-col justify-center'>
            {/* title desktop */}
            <h1 className="hidden md:block text text-2xl pb-8">A bit about me</h1>
            {/* description */}
            <span className='text-gray-500 text-2xl sm:text-3xl leading-loose'>
              I am a UI/UX designer who is passionate about creating <span className='text'>
                 beautiful and joyful digital experiences. Besides design, I love music,
                games and travelling.
              </span>
            </span>
          </div>
          {/* img */}
          <div className='flex lg:grid lg:grid-cols-2 lg:gap-y-8 lg:grid-rows-2 lg:w-1/2 flex-wrap items-center justify-evenly gap-4 pb-12 lg:pl-8'>
            <span data-aos-duration="4100" data-aos="flip-up" className='sm:h-72 sm:w-56 lg:row-span-2 w-44 h-60 flex items-center justify-center'><img className='h-full w-full' src="https://s8.uupload.ir/files/travel_hlag.png" alt="habit" /></span>
            <span data-aos-duration="4400" data-aos="flip-up" className='sm:h-72 hidden min-[452px]:flex sm:w-56 w-44 h-60 items-center justify-center'><img className='h-full w-full' src="https://s8.uupload.ir/files/music_ao0r.png" alt="habit" /></span>
            <span data-aos-duration="4700" data-aos="flip-up" className='sm:h-72 hidden min-[452px]:flex sm:w-56 w-44 h-60 items-center justify-center'><img className='h-full w-full' src="https://s8.uupload.ir/files/game_3k81.png" alt="habit" /></span>
          </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
