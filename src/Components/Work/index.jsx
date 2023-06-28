import React from 'react';
import data from './data';
const Work = () => {
  // work card
  const workCard = data.map((data) => {
    return (
      <div
        data-aos="zoom-in"
        className="flex flex-col md:odd:flex-row md:even:flex-row-reverse w-full"
      >
        <span className="rounded-2xl md:w-1/2 h-1/2 md:h-auto flex items-center justify-center">
          <img className="rounded-2xl" src={data.Img} alt="work" />
        </span>
        <span className="flex flex-col md:w-1/2 h-1/2 md:h-auto pl-10 justify-end md:pl-8">
          <h3 className="text text-lg py-8">{data.title}</h3>
          <p className="text-gray-500 text-2xl leading-relaxed pb-6 pr-6">
            {data.Description1} <span className="text">{data.Description2}</span>
          </p>
          <p className="text-gray-500 text-lg pb-8">{data.category}</p>
          {/* add link here */}
          <a className="mb-8 mt-4 w-40" href="#" target="_blank">
            <button className="uppercase w-full duration-200 hover:bg-purple-500 group hover:border-white hover:text-white text-base flex text-gray-400 border border-gray-400 py-1 px-0.5 items-center justify-center rounded-2xl ">
              view Work
              {/* chevron right */}
              <span className="pl-3 group-hover:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
              {/* arrow right */}
              <span className="pl-3 hidden group-hover:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </span>
            </button>
          </a>
        </span>
      </div>
    );
  });

  return (
    <>
      <div id="work" className="w-full bg-zinc-950 px-10 sm:px-20 pt-4 pb-16 max-h-max">
        <div className="w-full h-full flex flex-col">
          {/* title */}
          <p
            data-aos="fade-right"
            className="font-light text-gray-500 text-3xl sm:text-4xl pb-16"
          >
            Selected <span className="text">Works</span>
          </p>
          {/* contaner work card */}
          <div className="w-full">
            <div className="w-full flex flex-col gap-y-28">
              {/* work card */}
              {workCard}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
