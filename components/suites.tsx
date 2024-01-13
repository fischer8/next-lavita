'use client'
import React from "react";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import SuiteCard from "./suiteCard";
import Carousel from "./carousel";
import casalPhotos from "./data/casalImgs";
import triploPhotos from "./data/triploImgs";
import duplo_img from '/public/static/quartos/duplo/duplo.png'

export default function Suites() {
  const [fotos, setFotos] = useState<StaticImageData[]>([])
  const [page, setPage] = useState(0)
  
  const setView = (fotos, pageI = 0) => {
    setFotos(fotos)
    setPage(pageI)
  }

  return (
    <section id="suites">
      <p className='text-xs text-center border-black lg:text-xl'>
        POUSADA LA VITA
      </p>
      <h1 className='text-center mb-2 font-bold text-xl md:text-2xl lg:text-4xl'>
        SUÍTES
      </h1>
      <hr className='w-[100px] mb-8 mx-auto h-[3px] md:w-[80px] lg:h-[4px] 2xl:mb-16 lg:w-[160px] 2xl:w-[200px] bg-yellow-1000' />
      <p className='text-center w-3/4 sm:w-full md:text-xl lg:text-2xl mb-4 sm:mb-0 mx-auto'>
        Nossas suítes são novas, espaçosas (17 m2) e muito confortáveis.
      </p>
      <p className='text-center mb-14 sm:mb-16 md:text-xl lg:mb-20 w-3/4 sm:w-[560px] md:w-[700px] lg:w-[840px] lg:text-2xl mx-auto'>
        Todas estão equipadas com smart TV, ar condicionado, internet e frigobar
        e têm vista para o jardim.
      </p>
      <SuiteCard fotos={casalPhotos} title='Suíte casal' setView={setView}/>
      <section className='mb-16 border w-11/12 p-1 pe-0 flex flex-col sm:flex-row mx-auto sm:w-[560px] md:w-[700px] lg:w-[1000px] 2xl:w-[1100px] justify-between'>
        <Image className='mx-auto sm:mx-0 w-11/12 sm:w-[250px] sm:h-[250px] lg:h-[400px] lg:w-[400px]' height={400} width={400} src={duplo_img} alt='suite-casal' />
        <section className='flex mx-auto sm:mx-0 sm:ms-4 md:ms-8 w-full flex-col'>
          <h2 className='bg-blue-1000 p-2 ps-2 rounded-b mx-auto sm:mx-0 w-11/12 sm:w-full mb-4 lg:mb-8 text-white lg:text-2xl font-bold'>Suítes - Quarto Duplo</h2>
          <section className='mx-auto w-11/12 sm:mx-0 '>
            <p className='ms-3 text-sm mb-4 lg:text-xl lg:ms-6 '>1 Cama queen</p>
            <p className='ms-3 mb-4 2xl:ms-6 lg:mb-8 lg:ms-6 text-sm lg:text-base'>Cama extra disponível, mediante pedido</p>
            <section className='ms-3 flex w-full flex-wrap lg:ms-6'>
              <Image className='me-2 mb-2 w-2/12 md:w-[48px] lg:w-[96px]' loading="lazy" width={96} src={duplo_img} alt='suite-casal' />
              <Image className='me-2 mb-2 w-2/12 md:w-[48px] lg:w-[96px]' loading="lazy" width={96} src={duplo_img} alt='suite-casal' />
              <Image className='me-2 mb-2 w-2/12 md:w-[48px] lg:w-[96px]' loading="lazy" width={96} src={duplo_img} alt='suite-casal' />
              <Image className='me-2 mb-2 w-2/12 md:w-[48px] lg:w-[96px]' loading="lazy" width={96} src={duplo_img} alt='suite-casal' />
              <Image className='me-2 mb-2 w-2/12 md:w-[48px] lg:w-[96px]' loading="lazy" width={96} src={duplo_img} alt='suite-casal' />
              <Image className='me-2 mb-2 w-2/12 md:w-[48px] lg:w-[96px]' loading="lazy" width={96} src={duplo_img} alt='suite-casal' />
              <Image className='me-2 mb-2 w-2/12 md:w-[48px] lg:w-[96px]' loading="lazy" width={96} src={duplo_img} alt='suite-casal' />
              <Image className='me-2 mb-2 w-2/12 md:w-[48px] lg:w-[96px]' loading="lazy" width={96} src={duplo_img} alt='suite-casal' />
            </section>
          </section>
        </section>
      </section>
      <SuiteCard fotos={triploPhotos} title='Suítes - Quarto triplo' setView={setView}/>
      {fotos.length > 0 ? <Carousel fotos={fotos} page={page} setPage={setPage} setView={setView} />: ''}
    </section>
  )
}
