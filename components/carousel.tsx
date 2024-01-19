'use client'
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { string, number, func, arrayOf, shape } from 'prop-types';

interface CarouselProps {
  fotos: StaticImageData[];
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setView: (a: StaticImageData[], b: number) => void;
}

const Carousel: React.FC<CarouselProps> = React.memo(({ fotos, page, setPage, setView }) => {
  const decreasePage = React.useMemo(() => () => setPage((prev: number) => prev - 1), [setPage]);
  const increasePage = React.useMemo(() => () => setPage((prev: number) => prev + 1), [setPage]);
  return (
  <section className='select-none fixed flex items-center justify-center top-0 w-full h-full bg-opacity-90 bg-black'>
    <section className='w-screen sm:max-w-xl'>
      <section className='relative overflow-hidden'>
        <section className='flex transition-transform ease-out duration-200' style={{ transform: `translateX(-${page * 100}%)`}}>
          {fotos.map((foto, i: number) => <Image unoptimized={true} className='h-auto rounded' key={`c${i}`} loading='eager' placeholder='blur' src={foto} alt='fotos' />)}
        </section>
        <button onClick={() => setView([], 0)} className='absolute rounded border-blue-1000 top-1 right-1 bg-yellow-1000 px-3 py-1'>X</button>
          <section className='absolute gap-1 flex justify-center w-fit bottom-2 inset-x-0 mx-auto'>
            <button className='rounded px-4 sm:p-2 sm:px-6 disabled:opacity-35  bg-yellow-1000'
              onClick={decreasePage}
              disabled={page === 0}>
              {'<'}
            </button>
            <button className='rounded px-4 py-1 sm:p-2 sm:px-6 disabled:opacity-35  bg-yellow-1000'
              onClick={increasePage}
              disabled={page === (fotos.length - 1)}>
              {'>'}
            </button>
          </section>
      </section>
    </section>
  </section>
  );
})

Carousel.propTypes = {
  fotos: arrayOf(shape({ src: string.isRequired, height: number.isRequired, width: number.isRequired }).isRequired).isRequired, page: number.isRequired,
  setPage: func.isRequired,
  setView: func.isRequired,
};

Carousel.displayName = 'Carousel'
export default Carousel;
