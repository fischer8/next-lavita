'use client'
import React from 'react';
import Image, { StaticImageData }from 'next/image';
import { useState } from 'react';

interface CarouselProps {
  fotos: StaticImageData[];
  view: (a: StaticImageData[]) => void;
}

const Carousel: React.FC<CarouselProps> = ({view, fotos}) => {
  const [page, setPage] = useState(0)
  return (
    <section onClick={() => view([])} className='fixed top-0 w-full h-full bg-opacity-50 bg-black'>
      <section className='fixed w-11/12 sm:w-8/12 md:w-1/2 lg:w-1/3 inset-0 h-fit mx-auto my-auto bg-white'>
        <section className='relative'>
          <Image src={fotos[page]} alt='fotos' className='' />
          <button onClick={() => view([])} className='absolute top-4 right-4 bg-white p-4'>X</button>
          <button className='absolute p-2 bg-white top-1/2 left-4' disabled={page === 0} onClick={() => setPage((prev) => prev - 1)} >{'<'}</button>
          <button className='absolute p-2 bg-white top-1/2 right-4' disabled={page === (fotos.length - 1)} onClick={() => setPage((prev) => prev + 1)} >{'>'}</button>
        </section>
      </section>
    </section>
  );
}

export default Carousel;
