import React from 'react'
import Image from 'next/image';
import frutas from '/public/static/fotos/pousada/frutas.png'
import frutas2 from '/public/static/fotos/pousada/frutas2.png'
import pousada from '/public/static/fotos/pousada/pousada.png'
import prop1 from '/public/static/elem/prop1.png'
import prop2 from '/public/static/elem/prop2.png'
import prop3 from '/public/static/elem/prop3.png'

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
      <section className='flex justify-center w-10/12 mb-8 lg:mb-20 mx-auto'>
        <Image src={frutas} className='w-2/12 hidden sm:block' alt='frutas' />
        <Image src={pousada} className='me-2 ms-2 lg:me-8 lg:ms-8 w-12/12 sm:w-8/12' alt='pousada' />
        <Image src={frutas2} className='w-2/12 hidden sm:block' alt='frutas2' />
      </section>
      <p className='text-center mb-12 lg:mb-24 md:text-xl w-10/12 mx-auto'>
        Localizada pertinho das piscinas naturais da Praia de Porto da Rua, a Pousada La Vita é um paraíso: a hospedagem perfeita para você e sua família descansarem sem gastar muito.
        Com ambiente charmoso e acolhedor, oferecemos piscina, café da manhã, culinária regional e muito alto astral. Aqui cada detalhe foi pensado com muito carinho para que você se sinta em casa e tenha uma experiência incrível em São Miguel dos Milagres.
      </p>
      <section className='w-11/12 flex justify-center mx-auto p-2 lg:p-4 mb-20 bg-blue-1000 overflow-hidden'>
      <div className='flex'>
        <p className='w-[260px] me-2 text-xs lg:text-base text-white h-fit my-auto'>Aproveite o melhor de São Miguel dos Milagres com a gente:</p>
        <section className='flex w-10/12  '>
          <Image className='me-2 w-[48px] sm:w-[96px] lg:me-4' src={prop1} alt='prop'/>
          <Image className='me-2 w-[48px] sm:w-[96px] lg:me-4' src={prop1} alt='prop'/>
          <Image className='me-2 w-[48px] sm:w-[96px] lg:me-4' src={prop1} alt='prop'/>
          <Image className='me-2 w-[48px] sm:w-[96px] lg:me-4' src={prop1} alt='prop'/>
          <Image className='me-2 w-[48px] sm:w-[96px] lg:me-4' src={prop1} alt='prop'/>
          <Image className='me-2 w-[48px] sm:w-[96px] lg:me-4' src={prop1} alt='prop'/>
          <Image className='me-2 w-[48px] sm:w-[96px] lg:me-4' src={prop1} alt='prop'/>
          <Image className='me-2 w-[48px] sm:w-[96px] lg:me-4' src={prop1} alt='prop'/>
          <Image className='me-2 w-[48px] sm:w-[96px] lg:me-4' src={prop1} alt='prop'/>
        </section>
      </div>
      </section>
    </section>
  );
}

