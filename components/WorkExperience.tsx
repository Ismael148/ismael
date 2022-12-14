import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { Experience } from '../typings';

type Props = {
  experiences: Experience[];
};

function WorkExperience({ experiences }: Props) {
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
      className="flex flex-col relative h-screen text-left md:text-left md:flex-row max-w-full px-10 justify-center  mx-auto md:items-center overflow-hidden"
    >
      <h3 className="absolute sm:text-xs top-24 sm:items-center uppercase tracking-[20px] text-gray-500 text-lg md:text-2xl">
        Experience
      </h3>

      <div className="scrollbar-thin sm:mt-12 scrollbar-track-gray-400/20 scrollbar-thumb-[#F46530]/80 mx-auto lg:mx-auto 2xl:w-fit w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
        {experiences?.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}

export default WorkExperience;
