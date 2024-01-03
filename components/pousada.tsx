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
      <section className='flex w-10/12 mb-8 lg:mb-20 mx-auto'>
        <Image src={frutas} className='w-2/12' alt='frutas'/>
        <Image src={pousada} className='me-2 ms-2 lg:me-8 lg:ms-8 w-8/12' alt='pousada'/>
        <Image src={frutas2} className='w-2/12' alt='frutas2'/>
      </section>
      <p className='text-center w-10/12 mx-auto'>
        Localizada pertinho das piscinas naturais da Praia de Porto da Rua, a Pousada La Vita é um paraíso: a hospedagem perfeita para você e sua família descansarem sem gastar muito. 
      </p>
      <p className='text-center w-10/12 mx-auto'>
        Com ambiente charmoso e acolhedor, oferecemos piscina, café da manhã, culinária regional e muito alto astral. Aqui cada detalhe foi pensado com muito carinho para que você se sinta em casa e tenha uma experiência incrível em São Miguel dos Milagres.
      </p>
    </section>
  );
}

