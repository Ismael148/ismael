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
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
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
        className="-mb-20 md:mb-0 flex-shrink-0 w-48 h-48 my-20 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[400px]"
      />

      <div className="mt-12 space-y-10 px-0 md:px-10">
        <h4 className="text-3xl font-semibold">
          Here is a{' '}
          <span className="underline decoration-[#F46530]">little</span>{' '}
          background
        </h4>
        <p className="text-base">
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
