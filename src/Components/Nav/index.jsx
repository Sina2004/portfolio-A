import React, { useState } from 'react';

const Nav = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <div className='fixed w-full h-20 z-50'>
        <div className="w-full relative h-full flex items-center justify-between md:px-14 px-8">
          {/* logo */}
          <span>
            <svg
              width="96"
              height="48"
              viewBox="0 0 96 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.60827 13.7243C10.4234 13.7243 13.5345 16.8354 13.5345 20.6732C13.5345 24.511 10.4234 27.6221 6.60827 27.6221H3.70154V18.2887H0V31.3236H6.60827C12.4899 31.3236 17.2587 26.5547 17.2587 20.6732C17.2587 14.8143 12.5353 10.0227 6.63098 10.0227H0V13.7243H6.60827Z"
                fill="url(#paint0_linear_116_25)"
              />
              <path
                d="M19.0728 22.9895C19.0728 27.5766 22.8197 31.3236 27.4296 31.3236C28.4061 31.3236 29.3372 31.1646 30.2682 30.824V26.6229C29.4734 27.236 28.5196 27.6221 27.4296 27.6221C24.7727 27.6221 22.797 25.442 22.797 22.9895C22.797 20.4688 24.7954 18.3341 27.4296 18.3341C29.2236 18.3341 30.7451 19.356 31.5399 20.8321H25.0452V24.5564H35.6048C35.6956 24.0114 35.7638 23.4663 35.7638 22.944C35.7638 21.468 35.3323 19.4469 33.8108 17.6302C32.2666 15.8135 29.973 14.6553 27.4296 14.6553C22.8197 14.6553 19.0728 18.3796 19.0728 22.9895Z"
                fill="url(#paint1_linear_116_25)"
              />
              <path
                d="M43.6081 27.6221L51.7378 14.6553H37.2269V18.3341H45.0387L36.909 31.3236H52.4645V27.6221H43.6081Z"
                fill="url(#paint2_linear_116_25)"
              />
              <path
                d="M54.5101 14.6553V31.3236H58.2343V14.6553C56.8481 15.1508 56.0317 15.144 54.5101 14.6553ZM56.3836 13.7243C57.4057 13.7243 58.2343 12.8843 58.2343 11.8621V11.8621C58.2343 10.84 57.4057 10 56.3836 10V10C55.3614 10 54.5328 10.84 54.5328 11.8621V11.8621C54.5328 12.8843 55.3614 13.7243 56.3836 13.7243V13.7243Z"
                fill="url(#paint3_linear_116_25)"
              />
              <path
                d="M61.6229 26.2368C62.9173 29.2117 65.8241 31.3236 69.2985 31.3236C73.9084 31.3236 77.6327 27.5994 77.6327 22.9895C77.6327 18.3796 73.9084 14.6553 69.2985 14.6553C64.6886 14.6553 60.9644 18.3796 60.9644 22.9895C60.9644 24.1476 61.1915 25.2149 61.6229 26.2368ZM64.6659 22.9895C64.6659 20.4461 66.7551 18.3569 69.2985 18.3569C71.8419 18.3569 73.9311 20.4461 73.9311 22.9895C73.9311 25.5328 71.8419 27.6221 69.2985 27.6221C66.7551 27.6221 64.6659 25.5328 64.6659 22.9895ZM61.0325 31.3236C61.7592 35.1387 65.1882 38 69.185 38C73.1136 38 76.6335 35.2068 77.3601 31.3236H73.5223C72.7957 33.1176 71.1606 34.2985 69.185 34.2985C67.3001 34.2985 65.5515 33.0949 64.8703 31.3236H61.0325ZM66.7551 22.9895C66.7551 24.352 67.9133 25.5101 69.2985 25.5101C70.6837 25.5101 71.8419 24.352 71.8419 22.9895C71.8419 21.6042 70.6837 20.4461 69.2985 20.4461C67.9133 20.4461 66.7551 21.6042 66.7551 22.9895Z"
                fill="url(#paint4_linear_116_25)"
              />
              <path
                d="M84.0922 31.3236V22.0357C84.0922 20.0146 85.7046 18.3341 87.7711 18.3341C89.8376 18.3341 91.4953 20.0146 91.4953 22.0357V31.3236H95.1969V22.0357C95.1969 17.9708 91.8814 14.6553 87.7711 14.6553C83.7062 14.6553 80.368 17.9708 80.368 22.0357V31.3236H84.0922Z"
                fill="url(#paint5_linear_116_25)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_116_25"
                  x1="0.228359"
                  y1="9.71314"
                  x2="90.9102"
                  y2="58.801"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#BC3CD8" />
                  <stop offset="1" stop-color="#C54B8C" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_116_25"
                  x1="0.228359"
                  y1="9.71314"
                  x2="90.9102"
                  y2="58.801"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#BC3CD8" />
                  <stop offset="1" stop-color="#C54B8C" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_116_25"
                  x1="0.228359"
                  y1="9.71314"
                  x2="90.9102"
                  y2="58.801"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#BC3CD8" />
                  <stop offset="1" stop-color="#C54B8C" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_116_25"
                  x1="0.228359"
                  y1="9.71314"
                  x2="90.9102"
                  y2="58.801"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#BC3CD8" />
                  <stop offset="1" stop-color="#C54B8C" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_116_25"
                  x1="0.228359"
                  y1="9.71314"
                  x2="90.9102"
                  y2="58.801"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#BC3CD8" />
                  <stop offset="1" stop-color="#C54B8C" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear_116_25"
                  x1="0.228359"
                  y1="9.71314"
                  x2="90.9102"
                  y2="58.801"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#BC3CD8" />
                  <stop offset="1" stop-color="#C54B8C" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          {/* menu svg */}
          <span
            onClick={() => setActive(!active)}
            className="sm:hidden text-neutral-50 p-4 z-20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </span>
          {/* content */}
          <ul
            className={`flex-col z-40 flex sm:justify-end sm:flex-row text-neutral-100 sm:static absolute w-full left-0 -bottom-60 duration-300 transition-all overflow-hidden sm:translate-x-0 -translate-x-full ${
              active ? 'translate-x-0' : ''
            }`}
          >
            <li className="nav text-center">HOME</li>
            <li className="nav text-center">WORK</li>
            <li className="nav text-center">ABOUT</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;