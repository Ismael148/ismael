import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import logo from '../assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, I'm ${pageInfo?.name}`,
      "I'm a developer web",
      '<Whatever you do, do it good />',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="shadow-[10px_10px_70px_#F46530] relative rounded-full h-32 mx-auto w-32 object-cover"
        src={urlFor(pageInfo.heroImage).url()}
        alt="user-logo"
      />

      <div className="z-20">
        <h2 className="sm:text-xs md:text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h1 className="sm:text-xs  md:text-2xl lg:text-4xl font-semibold px-10 ">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F46530" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            {' '}
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
