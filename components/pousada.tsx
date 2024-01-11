import React from 'react'
import Image from 'next/image';
import frutas from '/public/static/fotos/pousada/frutas.png'
import frutas2 from '/public/static/fotos/pousada/frutas2.png'
import pousada from '/public/static/fotos/pousada/pousada.png'
import prop1 from '/public/static/elem/prop1.png'
//import prop2 from '/public/static/elem/prop2.png'
//import prop3 from '/public/static/elem/prop3.png'
import praia from '/public/static/elem/praia-de-verao.png'
import ar from '/public/static/elem/ar-condicionado.png'
import piscina from '/public/static/elem/piscina.png'
import wifi from '/public/static/elem/wifi.png'
import pet from '/public/static/elem/pet.png'

export default function Pousada() {
  return (
    <section id='pousada' className='mb-14 sm:mb-20 lg:mb-32 lg:mt-24'>
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
      <section className='border rounded sm:border-none sm:rounded-none w-11/12 flex justify-center mx-auto p-2 mb-12 sm:mb-16 xl:mb-20 bg-blue-1000 overflow-hidden'>
        <section className='flex flex-col items-center sm:flex-row justify-center'>
          <p className='ps-2 text-center sm:ps-0 mt-2 mb-2 sm:mt-0 sm:mb-0 w-[240px] md:w-[280px] text-sm 2xl:me-4 md:text-base text-white h-fit'>Aproveite o melhor de São Miguel dos Milagres com a gente:</p>
          <section className='mt-4 sm:mt-0 grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-8 xl:grid-cols-9 gap-2 xl:gap-2'>
            <Image className='sm:w-[56px] md:w-[76px] xl:w-[86px] 2xl:w-[96px]' src={prop1} alt='prop' />
            <Image className='sm:w-[56px] md:w-[76px] xl:w-[86px] 2xl:w-[96px]' src={prop1} alt='prop' />
            <Image className='sm:w-[56px] md:w-[76px] xl:w-[86px] 2xl:w-[96px]' src={prop1} alt='prop' />
            <Image className='sm:w-[56px] hidden sm:block md:w-[76px] xl:w-[86px] 2xl:w-[96px]' src={prop1} alt='prop' />
            <Image className='sm:w-[56px] hidden sm:block md:w-[76px] xl:w-[86px] 2xl:w-[96px]' src={prop1} alt='prop' />
            <Image className='sm:w-[56px] hidden sm:block md:w-[76px] xl:w-[86px] 2xl:w-[96px]' src={prop1} alt='prop' />
            <Image className='hidden lg:block sm:w-[56px] md:w-[76px] xl:w-[86px] 2xl:w-[96px]' src={prop1} alt='prop' />
            <Image className='hidden lg:block sm:w-[56px] md:w-[76px] xl:w-[86px] 2xl:w-[96px]' src={prop1} alt='prop' />
            <Image className='hidden xl:block sm:w-[56px] md:w-[76px] xl:w-[86px] 2xl:w-[96px]' src={prop1} alt='prop' />
          </section>
        </section>
      </section>
      <section className='flex gap-1 sm:gap-5 md:gap-0 w-[310px] sm:w-11/12 justify-center flex-wrap items-center md:justify-between mx-auto'>
        <section className='bg-gray-300 flex justify-center items-center w-24 h-24 sm:w-32 sm:h-32 lg:w-44 lg:h-44 xl:w-52 xl:h-52 2xl:w-64 2xl:h-64'>
          <section>
            <Image className='mx-auto w-6/12' src={praia} alt='praia' />
            <p className='text-center text-xs md:text-base mx-auto'>750m da praia</p>
          </section>
        </section>
        <section className='bg-gray-300 flex justify-center items-center w-24 h-24 sm:w-32 sm:h-32 lg:w-44 lg:h-44 xl:w-52 xl:h-52 2xl:w-64 2xl:h-64'>
          <section>
            <Image className='mx-auto w-6/12' src={piscina} alt='piscina' />
            <p className='text-center text-xs md:text-base mx-auto'>Piscina</p>
          </section>
        </section>
        <section className='bg-gray-300 flex justify-center items-center w-24 h-24 sm:w-32 sm:h-32 lg:w-44 lg:h-44 xl:w-52 xl:h-52 2xl:w-64 2xl:h-64'>
          <section>
            <Image className='mx-auto w-6/12' src={ar} alt='ar-condicionado' />
            <p className='text-center text-xs md:text-base mx-auto'>Ar condicionado</p>
          </section>
        </section>
        <section className='bg-gray-300 flex justify-center items-center w-24 h-24 sm:w-32 sm:h-32 lg:w-44 lg:h-44 xl:w-52 xl:h-52 2xl:w-64 2xl:h-64'>
          <section>
            <Image className='mx-auto w-6/12' src={wifi} alt='wifi' />
            <p className='text-center text-xs md:text-base mx-auto'>Internet Wifi</p>
          </section>
        </section>
        <section className='bg-gray-300 flex justify-center items-center w-24 h-24 sm:w-32 sm:h-32 lg:w-44 lg:h-44 xl:w-52 xl:h-52 2xl:w-64 2xl:h-64'>
          <section>
            <Image className='mx-auto w-6/12' src={pet} alt='pet-friendly' />
            <p className='text-center text-xs md:text-base mx-auto'>Pet friendly</p>
          </section>
        </section>
      </section>
    </section>
  );
}

