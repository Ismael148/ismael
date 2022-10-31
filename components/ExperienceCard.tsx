import { motion } from 'framer-motion';
import React from 'react';
import { urlFor } from '../sanity';
import { Experience } from '../typings';

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center justify-items-center space-y-7 flex-shrink-0 w-[300px] md:w-[435px] md:mt-12 snap-center bg-[#e9ecef] p-10 hover:opacity-80 opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden justify-center">
      <motion.img
        initial={{
          x: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        className="w-20 h-20 md:w-28 md:h-28 rounded-full md:rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
        src={urlFor(experience?.companyImage).url()}
        alt="Experience-logo"
      />

      <div className="px-0 md:px-10 ">
        <h4 className="text-2xl font-light">{experience?.companyName}</h4>
        <p className="font-bold text-2xl mt-1">{experience?.jobTitle} </p>
        <div className="flex space-x-2 my-2 ">
          <>
            {experience.technologies.map((technology) => (
              <motion.img
                key={technology._id}
                className="h-8 w-8 md:h-12 md:w-12 rounded-full object-cover"
                src={urlFor(technology.image).url()}
                alt="tech"
              />
            ))}
          </>
        </div>
        <p className="uppercase py-5 text-gray-600">
          {new Date(experience.dateStarted).toDateString()} -{' '}
          {experience.isCurrentlyWorkingHere
            ? 'Present'
            : new Date(experience.dateEnded).toDateString()}
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg overflow-y-scroll scrollbar scrollbar-none">
          {experience.points.map((point, i) => (
            <li key={i}>{point} </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
