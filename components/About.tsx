import React from 'react';
import { motion } from 'framer-motion';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col  relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="text-lg md:text-2xl absolute top-24  uppercase tracking-[20px] text-gray-500">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        src={urlFor(pageInfo?.profilePic).url()}
        className="-mb-20 sm:w-24 sm:h-24 md:mb-0  flex-shrink-0  my-20 mt-10 rounded-full object-cover md:rounded-lg md:w-80 md:h-80  xl:w-[300px] xl:h-[400px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-xl sm:text-center md:text-2xl font-semibold mt-0 md:mt-12">
          Here is a{' '}
          <span className="underline decoration-[#F46530]">little</span>{' '}
          background
        </h4>
        <p className="sm:text-center text-xs md:text-2xl">
          {' '}
          `A geek is above all a passionate person`😎 <br /> The logical mind,
          Listening, The thirst for learning, <br /> Autonomy,The community.
          These are my main motivations <br /> that allow me to realize with
          passion a project 💯. <br /> After two years of study in computer
          science and networking, <br /> I joined a digital school to be able to
          train myself in Web. <br /> After 2 years of training and self-taught,{' '}
          <br /> I worked on different projects which allowed me to become a
          Junior Javascript Developer. 🦾
        </p>
      </div>
    </motion.div>
  );
}

export default About;
