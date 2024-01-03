import React from "react";
import Image from "next/image";
import casal_img from '/public/static/fotos/quartos/casal.png'

export default function Suites() {
  return (
    <section>
      <p className='text-xs text-center border-black 2xl:text-xl'>
        POUSADA LA VITA
      </p>
      <h1 className='text-center font-bold text-xl lg:mb-4 2xl:text-4xl'>
        SUÍTES
      </h1>
      <hr className='w-[100px] mb-8 mx-auto h-[3px] lg:h-[4px] 2xl:mb-16 2xl:w-[120px] bg-yellow-1000' />
      <p className='text-center w-3/4 sm:w-full 2xl:text-2xl mb-4 sm:mb-0 mx-auto'>
        Nossas suítes são novas, espaçosas (17 m2) e muito confortáveis.
      </p>
      <p className='text-center mb-14 sm:mb-16 2xl:mb-20 w-3/4 sm:w-[560px] 2xl:w-[840px] 2xl:text-2xl mx-auto'>
        Todas estão equipadas com smart TV, ar condicionado, internet e frigobar
        e têm vista para o jardim.
      </p>
      <section className='sm:mb-16 flex flex-col sm:flex-row mx-auto w-5/6 sm:w-[560px] md:w-[700px] 2xl:w-[1000px] justify-between'>
        <Image className='mx-auto sm:mx-0 w-11/12 sm:w-[250px] sm:h-[250px] 2xl:h-[400px] 2xl:w-[400px]' height={400} width={400} src={casal_img} alt='suite-casal' />
        <section className='flex mx-auto sm:mx-0 sm:ms-4 md:ms-8 w-full flex-col'>
          <h2 className='bg-blue-1000 p-2 ps-2 rounded-b mx-auto sm:mx-0 w-11/12 sm:w-full mb-4 text-white 2xl:text-2xl font-bold'>Suíte casal</h2>
          <section className='mx-auto w-11/12 sm:mx-0 '>
            <p className='ms-3 text-sm 2xl:text-lg mb-4 2xl:ms-6 '>1 cama queen</p>
            <p className='ms-3 mb-4 2xl:ms-6 2xl:mb-8 text-sm'>Cama extra disponível, mediante pedido</p>
            <section className='ms-3 mb-20 flex w-full flex-wrap 2xl:ms-6'>
              <Image className='me-2 mb-2 w-2/12 2xl:w-[96px]' loading="lazy" width={96} src={casal_img} alt='suite-casal' />
              <Image className='me-2 mb-2 w-2/12 2xl:w-[96px]' loading="lazy" width={96} src={casal_img} alt='suite-casal' />
              <Image className='me-2 mb-2 w-2/12 2xl:w-[96px]' loading="lazy" width={96} src={casal_img} alt='suite-casal' />
              <Image className='me-2 mb-2 w-2/12 2xl:w-[96px]' loading="lazy" width={96} src={casal_img} alt='suite-casal' />
              <Image className='me-2 mb-2 w-2/12 2xl:w-[96px]' loading="lazy" width={96} src={casal_img} alt='suite-casal' />
              <Image className='me-2 mb-2 w-2/12 2xl:w-[96px]' loading="lazy" width={96} src={casal_img} alt='suite-casal' />
              <Image className='me-2 mb-2 w-2/12 2xl:w-[96px]' loading="lazy" width={96} src={casal_img} alt='suite-casal' />
              <Image className='me-2 mb-2 w-2/12 2xl:w-[96px]' loading="lazy" width={96} src={casal_img} alt='suite-casal' />
              <Image className='me-2 mb-2 w-2/12 2xl:w-[96px]' loading="lazy" width={96} src={casal_img} alt='suite-casal' />
            </section>
          </section>
        </section>
      </section>
      <section className='sm:mb-16 flex flex-col sm:flex-row mx-auto w-5/6 sm:w-[560px] md:w-[700px] 2xl:w-[1000px] justify-between'>
        <Image className='mx-auto sm:mx-0 w-11/12 sm:w-[250px] sm:h-[250px] 2xl:h-[400px] 2xl:w-[400px]' height={400} width={400} src={casal_img} alt='suite-casal' />
        <section className='flex mx-auto sm:mx-0 sm:ms-4 md:ms-8 w-full flex-col'>
          <h2 className='bg-blue-1000 p-2 ps-2 rounded-b mx-auto sm:mx-0 w-11/12 sm:w-full mb-4 text-white 2xl:text-2xl font-bold'>Suíte casal</h2>
          <section className='mx-auto w-11/12 sm:mx-0 '>
            <p className='ms-3 text-sm 2xl:text-lg mb-4 2xl:ms-6 '>1 cama queen</p>
            <p className='ms-3 mb-4 2xl:ms-6 2xl:mb-8 text-sm'>Cama extra disponível, mediante pedido</p>
            <section className='ms-3 mb-20 flex w-full flex-wrap 2xl:ms-6'>
              <Image className='me-2 mb-2 w-2/12 2xl:w-[96px]' loading="lazy" width={96} src={casal_img} alt='suite-casal' />
              <Image className='me-2 mb-2 w-2/12 2xl:w-[96px]' loading="lazy" width={96} src={casal_img} alt='suite-casal' />
              <Image className='me-2 mb-2 w-2/12 2xl:w-[96px]' loading="lazy" width={96} src={casal_img} alt='suite-casal' />
              <Image className='me-2 mb-2 w-2/12 2xl:w-[96px]' loading="lazy" width={96} src={casal_img} alt='suite-casal' />
              <Image className='me-2 mb-2 w-2/12 2xl:w-[96px]' loading="lazy" width={96} src={casal_img} alt='suite-casal' />
              <Image className='me-2 mb-2 w-2/12 2xl:w-[96px]' loading="lazy" width={96} src={casal_img} alt='suite-casal' />
              <Image className='me-2 mb-2 w-2/12 2xl:w-[96px]' loading="lazy" width={96} src={casal_img} alt='suite-casal' />
              <Image className='me-2 mb-2 w-2/12 2xl:w-[96px]' loading="lazy" width={96} src={casal_img} alt='suite-casal' />
              <Image className='me-2 mb-2 w-2/12 2xl:w-[96px]' loading="lazy" width={96} src={casal_img} alt='suite-casal' />
            </section>
          </section>
        </section>
      </section>
      <section className='sm:mb-16 flex flex-col sm:flex-row mx-auto w-5/6 sm:w-[560px] md:w-[700px] 2xl:w-[1000px] justify-between'>
        <Image className='mx-auto sm:mx-0 w-11/12 sm:w-[250px] sm:h-[250px] 2xl:h-[400px] 2xl:w-[400px]' height={400} width={400} src={casal_img} alt='suite-casal' />
        <section className='flex mx-auto sm:mx-0 sm:ms-4 md:ms-8 w-full flex-col'>
          <h2 className='bg-blue-1000 p-2 ps-2 rounded-b mx-auto sm:mx-0 w-11/12 sm:w-full mb-4 text-white 2xl:text-2xl font-bold'>Suíte casal</h2>
          <section className='mx-auto w-11/12 sm:mx-0 '>
            <p className='ms-3 text-sm 2xl:text-lg mb-4 2xl:ms-6 '>1 cama queen</p>
            <p className='ms-3 mb-4 2xl:ms-6 2xl:mb-8 text-sm'>Cama extra disponível, mediante pedido</p>
            <section className='ms-3 mb-20 flex w-full flex-wrap 2xl:ms-6'>
              <Image className='me-2 mb-2 w-2/12 2xl:w-[96px]' loading="lazy" width={96} src={casal_img} alt='suite-casal' />
              <Image className='me-2 mb-2 w-2/12 2xl:w-[96px]' loading="lazy" width={96} src={casal_img} alt='suite-casal' />
              <Image className='me-2 mb-2 w-2/12 2xl:w-[96px]' loading="lazy" width={96} src={casal_img} alt='suite-casal' />
              <Image className='me-2 mb-2 w-2/12 2xl:w-[96px]' loading="lazy" width={96} src={casal_img} alt='suite-casal' />
              <Image className='me-2 mb-2 w-2/12 2xl:w-[96px]' loading="lazy" width={96} src={casal_img} alt='suite-casal' />
              <Image className='me-2 mb-2 w-2/12 2xl:w-[96px]' loading="lazy" width={96} src={casal_img} alt='suite-casal' />
              <Image className='me-2 mb-2 w-2/12 2xl:w-[96px]' loading="lazy" width={96} src={casal_img} alt='suite-casal' />
              <Image className='me-2 mb-2 w-2/12 2xl:w-[96px]' loading="lazy" width={96} src={casal_img} alt='suite-casal' />
              <Image className='me-2 mb-2 w-2/12 2xl:w-[96px]' loading="lazy" width={96} src={casal_img} alt='suite-casal' />
            </section>
          </section>
        </section>
      </section>
    </section>
  )
}
