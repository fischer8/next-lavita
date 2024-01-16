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
    <section className='select-none fixed flex items-center justify-center top-0 w-full h-full bg-opacity-90 bg-black'>
      <div role="status" className="absolute w-[600px] h-[300px] sm:h-[600px] rounded shadow animate-pulse ">
        <div className="bg-white w-[600px] h-[300px] sm:h-[600px] rounded-lg dark:bg-gray-500"></div>
      </div>
      <section className='w-fit inset-0 h-fit mx-auto my-auto rounded'>
        <section className='relative object-contain'>
          <Image loading='eager' placeholder='blur' src={fotos[page]} alt='fotos' className='z-50 rounded mx-auto' />
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
