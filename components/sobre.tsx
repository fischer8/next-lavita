import React from 'react';
import Image from 'next/image';
import review1 from '/public/static/elem/review1.png'
import review2 from '/public/static/elem/review2.png'
import sm_review1 from '/public/static/elem/sm-review1.png'
import sm_review2 from '/public/static/elem/sm-review2.png'
import sm_review3 from '/public/static/elem/sm-review3.jpeg'
import booking from '/public/static/elem/booking.png'

export default function Sobre() {
  return (
    <section id='sobre' className='mb-24 sm:mb-40'>
      <p className='text-xs sm:mb-4 text-center border-black lg:text-xl'>
        POUSADA LA VITA
      </p>
      <h2 className='text-center mb-4 font-bold text-xl md:text-2xl lg:text-4xl'>
        O QUE DIZEM DE NÓS
      </h2>
      <hr className='w-[100px] mb-12 mx-auto h-[3px] md:w-[80px] lg:h-[4px] 2xl:mb-24 lg:w-[160px] 2xl:w-[200px] bg-yellow-1000' />
      <section className='flex flex-wrap gap-16 justify-center mx-auto w-11/12'>
        <section className='bg-yellow-1000 flex flex-col justify-center w-56 h-56'>
          <p className='text-white ps-6 text-2xl'>Nota</p>
          <p className='font-bold ps-6 text-white text-8xl'>9,4</p>
          <Image className='w-10/12 mx-auto' src={booking} alt='booking' />
        </section>
        <section className='flex gap-2 sm:gap-4 w-80 flex-col'>
          <p className='font-bold text-center text-2xl text-blue-1000'>
            Jana e Joel
          </p>
          <Image className='' src={review1} alt='review1' />
          <p className='text-center'>
            Adoramos a pousada😍 e também a Rita, que tem um astral ótimo e no que precisamos ela estava sempre lá para ajudar.
            Parabéns e obrigado a toda equipe da Pousada La Vita 👏👏👏
          </p>
        </section>
        <section className='flex gap-2 sm:gap-4 w-80 flex-col'>
          <p className='font-bold text-center text-2xl text-blue-1000'>
            Fernanda
          </p>
          <Image className='' src={review2} alt='review2' />
          <p>
            Pousada maravilhosa! Com certeza voltaremos em breve 😍
          </p>
        </section>
        <section className='flex gap-16 sm:gap-10 w-11/12 sm:w-80 md:w-[450px] flex-col'>
          <section>
            <section className='flex gap-4 items-center'>
              <section>
                <p className='font-bold w-[64px] text-blue-1000'>
                  Luisa
                </p>
                <Image className='w-[64px]' src={sm_review1} alt='sm-review1' />
              </section>
              <p className='text-xs md:text-sm'>
                Pousada perfeita! Limpeza impecável, café da manhã delicioso e atendimento acolhedor e atencioso. Adorei a experiência!
              </p>
            </section>
          </section>
          <section>
            <section className='flex gap-4 items-center'>
              <section>
                <p className='font-bold w-[64px] text-blue-1000'>
                  Priscila
                </p>
                <Image className='w-[64px]' src={sm_review2} alt='sm-review1' />
              </section>
              <p className='text-xs md:text-sm'>
                A pousada é novinha, com acomodações confortáveis e limpas. A equipe é maravilhosa e atende como se vc estivesse em casa. Recomendo demais!
              </p>
            </section>
          </section>
          <section>
            <section className='flex gap-4 items-center'>
              <section>
                <p className='font-bold w-[64px] text-blue-1000'>
                  Luís
                </p>
                <Image className='w-[64px]' src={sm_review3} alt='sm-review1' />
              </section>
              <p className='text-xs md:text-sm'>
                Pousada nova com estrutura impecável. Cama confortável, banheiro novo e limpo, ar condicionado bom, smarTV no quarto e piscina agradável.
              </p>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}

