'use client'
import React from "react";
import { StaticImageData } from "next/image";
import { useState } from "react";
import SuiteCard from "./suiteCard";
import Carousel from "./carousel";
import casalImgs from "./data/casalImgs";
import duploImgs from "./data/duploImgs";
import triploImgs from "./data/triploImgs";

export default function Suites() {
  const [fotos, setFotos] = useState<StaticImageData[]>([])
  const [page, setPage] = useState(0)
  
  const setView = (fotos: StaticImageData[], pageI: number = 0) => {
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
      <SuiteCard fotos={casalImgs} title='Suíte casal' setView={setView}/>
      <SuiteCard fotos={duploImgs} title='Suítes - Quarto duplo' setView={setView}/>
      <SuiteCard fotos={triploImgs} title='Suítes - Quarto triplo' setView={setView}/>
      {fotos.length > 0 && <Carousel fotos={fotos} page={page} setPage={setPage} setView={setView} />}
    </section>
  )
}
