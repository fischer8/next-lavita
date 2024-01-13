import React from 'react';
import Image, { StaticImageData }from 'next/image';

interface CarouselProps {
  fotos: StaticImageData[];
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setView: (a: StaticImageData[], b: number) => void;
}

const Carousel: React.FC<CarouselProps> = ({fotos, page, setPage, setView}) => {
  return (
    <section className='fixed top-0 w-full h-full bg-opacity-50 bg-black'>
      <section className='absolute w-11/12 sm:w-8/12 md:w-1/2 lg:w-1/3 inset-0 h-fit mx-auto my-auto bg-white'>
        <section className='relative'>
          <Image src={fotos[page]} alt='fotos' className='z-50' />
          <button onClick={() => setView([],0)} className='absolute top-1 right-1 bg-white px-3 py-2'>X</button>
          <button className='absolute p-2 px-3 bg-white top-1/2 left-1' disabled={page === 0} onClick={() => setPage((prev: number) => prev - 1)} >{'<'}</button>
          <button className='absolute p-2 px-3  bg-white top-1/2 right-1' disabled={page === (fotos.length - 1)} onClick={() => setPage((prev: number) => prev + 1)} >{'>'}</button>
        </section>
      </section>
    </section>
  );
}

export default Carousel;
