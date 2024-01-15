import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface SuiteCardProps {
  fotos: StaticImageData[];
  title: string;
  setView: (a: StaticImageData[], b: number) => void;
}

const SuiteCard: React.FC<SuiteCardProps> = ({fotos, title, setView}) => {
  return (
    <section className='mb-16 rounded select-none border w-11/12 p-1 pe-0 flex flex-col sm:flex-row mx-auto sm:w-[560px] md:w-[700px] lg:w-[1000px] 2xl:w-[1100px] justify-between'>
      <Image onClick={() => setView(fotos, 0)} className='mx-auto rounded cursor-pointer sm:mx-0 w-11/12 sm:w-[250px] sm:h-[250px] lg:h-[400px] lg:w-[400px]' height={400} width={400} src={fotos[0]} alt='suite-casal' />
      <section className='flex mx-auto sm:mx-0 sm:ms-4 md:ms-8 w-full flex-col'>
        <h2 className='bg-blue-1000 p-2 ps-2 rounded-b mx-auto sm:mx-0 w-11/12 sm:w-full mb-4 lg:mb-8 text-white lg:text-2xl font-bold'>{title}</h2>
        <section className='mx-auto w-11/12 sm:mx-0 '>
          <p className='ms-3 text-sm mb-4 lg:text-xl lg:ms-6 '>1 Cama queen</p>
          <p className='ms-3 mb-4 2xl:ms-6 lg:mb-8 lg:ms-6 text-sm lg:text-base'>Cama extra disponível, mediante pedido</p>
          <section className='ms-3 flex w-full flex-wrap lg:ms-6'>
            {fotos.map((foto, i) => <Image onClick={() => setView(fotos, i)} className='me-2 object-none object-center hover:scale-110 cursor-pointer mb-2 w-2/12 md:w-[48px] lg:w-[96px]' key={i} loading="lazy" width={96} src={foto} alt='suite-casal' />)}
          </section>
        </section>
      </section>
    </section>
  );
}
export default SuiteCard 
