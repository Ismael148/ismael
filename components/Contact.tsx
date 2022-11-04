import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';

type Props = {};
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:zolalainaismael@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className="h-screen mb-20 relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="sm:text-xs text-lg md:text-2xl absolute top-24  uppercase tracking-[20px] text-gray-500">
        Contact
      </h3>

      <div className="flex flex-col space-y-10 mt-12 md:mt-20">
        <h4 className="sm:text-xs md:text-2xl sm:mt-20 font-semibold text-center">
          I have got just what you need.{' '}
          <span className="decoration-[#F46530]/50 underline">Let's talk</span>
        </h4>

        <div className="space-y-5">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F46530] sm:w-4 sm:h-4 md:h-6 md:w-6 animate-pulse" />
            <p className='sm:text-xs'>+261 34 94 527 02</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F46530] sm:w-4 sm:h-4 md:h-6 md:w-6 animate-pulse" />
            <p className='sm:text-xs'>zolalainaismael@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F46530] sm:w-4 sm:h-4 md:h-6 md:w-6 animate-pulse" />
            <p className='sm:text-xs'>Antananarivo, 101</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-[400px] md:w-fit mx-auto"
        >
          <div className="flex sm:flex-col sm:space-y-2 sm:w-80 sm:m-auto md:w-full md:flex-row md:space-x-2">
            <input
              {...register('name')}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register('email')}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register('subject')}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register('message')}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#fbc3bc] sm:m-auto py-4 px-3 md:py-5 md:px-10 sm:w-80 sm:h-16 md:w-full rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
