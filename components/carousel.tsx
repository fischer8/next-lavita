import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface CarouselProps {
  fotos: StaticImageData[];
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setView: (a: StaticImageData[], b: number) => void;
}

const Carousel: React.FC<CarouselProps> = ({ fotos, page, setPage, setView }) => {
  return (
    <section className='fixed flex items-center justify-center top-0 w-full h-full bg-opacity-70 bg-black'>
      <section className='w-fit inset-0 h-fit mx-auto my-auto rounded bg-white'>
        <section className='relative object-contain'>
          <Image src={fotos[page]} alt='fotos' className='z-50 rounded mx-auto' />
          <button onClick={() => setView([], 0)} className='absolute rounded top-1 right-1 bg-white px-3 py-1'>X</button>
          <section className='absolute flex justify-center w-fit bottom-2 inset-x-0 mx-auto'>
            <button className='rounded border px-4 sm:p-2 sm:px-6 disabled:opacity-35  bg-white '
              onClick={() => setPage((prev: number) => prev - 1)}
              disabled={page === 0}>
              {'<'}
            </button>
            <button className='rounded border px-4 sm:p-2 sm:px-6 disabled:opacity-35  bg-white '
              onClick={() => setPage((prev: number) => prev + 1)}
              disabled={page === (fotos.length - 1)}>
              {'>'}
            </button>
          </section>
        </section>
      </section>
    </section>
  );
}

export default Carousel;
