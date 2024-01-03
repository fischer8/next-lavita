import React from 'react';
import Image from 'next/image';
import frutas from '/public/static/fotos/pousada/frutas.png'
import frutas2 from '/public/static/fotos/pousada/frutas2.png'
import pousada from '/public/static/fotos/pousada/pousada.png'

export default function Pousada() {
  return (
    <section className='lg:mt-24'>
      <p className='text-xs sm:mb-4 text-center mx-auto w-[200px] lg:w-[300px] border-black lg:text-xl'>
        MELHOR CUSTO-BENEFÍCIO DE
        SÃO MIGUEL DOS MILAGRES
      </p>
      <h1 className='text-center mb-4 font-bold text-xl md:text-2xl lg:text-4xl'>
        POUSADA LA VITA
      </h1>
      <hr className='w-[100px] mb-8 mx-auto h-[3px] md:w-[80px] lg:h-[4px] 2xl:mb-16 lg:w-[160px] 2xl:w-[200px] bg-yellow-1000' />
      <section>
        <Image src={frutas} alt='frutas'/>
        <Image src={pousada} alt='pousada'/>
        <Image src={frutas2} alt='frutas2'/>
      </section>
    </section>
  );
}

