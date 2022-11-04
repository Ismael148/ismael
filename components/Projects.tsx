import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="sm:text-xs text-lg md:text-2xl absolute top-24  uppercase tracking-[20px] text-gray-500">
        Projects
      </h3>

      <div className="scrollbar-thin scrollbar-track-gray-400/20  scrollbar-thumb-[#F46530]/80 relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {/* Projects */}
        {projects.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44  h-screen"
          >
            <motion.img
              initial={{
                y: -200,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              className='lg:w-96 lg:h-96 lg:mt-32'
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              alt="post"
            />
            <div className="space-y-10 px-10 md:px-10 max-w-6xl">
              <h4 className="sm:text-xs md:text-2xl font-semibold text-center">
                <span className="underline decoration-[#F46530]">
                  Case of project {i + 1} of {projects.length} :
                </span>{' '}
                {project?.title}
              </h4>

              <div className="flex items-center space-x-2 justify-center object-cover">
                {project?.technologies.map((technology) => (
                  <motion.img
                    className="sm:w-8 sm:h-8 md:w-10 md:h-10 object-cover"
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    alt=""
                  />
                ))}
              </div>

              <p className="sm:text-xs sm:text-left md:text-center sm:m-auto md:mx-auto md:text-lg ">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#fbc3bc] left-0 h-[500px] -skew-y-12 "></div>
    </motion.div>
  );
}

export default Projects;
