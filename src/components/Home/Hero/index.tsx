import KGButton from '@/components/KGButton'
import React from 'react'
import { twJoin } from 'tailwind-merge'
import Thumbtack from '../Thumbtack'
import Brands from './Brands'
import ClipPath from '@/components/ClipPath'

export default function Hero() {
  return (
    <section
      className={twJoin(
        'bg-white rounded-3xl flex flex-col justify-between px-4 pb-[90px] 2md:px-10 md:pb-12 md:pt-5 lg:pt-[4%] xl:pt-[5.883%]',
        'md:aspect-[1.45] 2md:aspect-[1.6] lg:aspect-[1.63] 1xl:aspect-[1.687] 2xl:aspect-[1.66] 3xl:aspect-[1.74] 4xl:aspect-[1.76]',
        'pt-[calc((100vw*0.91)-78px)] mt-2 md:mt-0 relative',
      )}
      title='home-hero'
    >
      <div
        className={twJoin(
          'flex flex-col justify-between sm:mx-20 md:ml-auto',
          'h-[62%] 2md:h-[65%] 1xl:h-[68.02%] 2xl:h-[67%] 3xl:h-[71.3%] 4xl:h-[72%]',
          'md:mr-[1%] xl:mr-[10%] 1xl:mr-[12.5%] 2xl:mr-[15%] 4xl:mr-[20%]',
        )}
      >
        <div className="flex flex-col gap-6 lg:block mt-[33px] md:mt-0">
          <h1
            className={twJoin(
              'font-instrument-sans-700',
              'text-3xl leading-[1.33] xl:text-[50px] xl:leading-[1.22] 3xl:text-6xl 3xl:leading-tight',
            )}
          >
            <span className="text-primary-cyan">/</span>
            <span className="text-primary-blue">The Secure</span> <br />{' '}
            <span className="text-system-_100">Super App Platform</span> <br />{' '}
            <span className="text-system-_100">for Your Business</span>
          </h1>
          <h3 className="text-system-_80 text-sm leading-[1.57] lg:text-base 3xl:text-2xl lg:mt-2 xl:mt-7">
            <span>Build your digital journey with strong digital identity,</span>
            <br />
            <span>secure communication, digital signatures, and</span>
            <br />
            <span>payments all in one platform.</span>
          </h3>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-3 mt-6 md:mt-0 ">
          <KGButton
            text="Learn More"
            type="Primary"
            id="learn-more-button-clip"
            className="pl-4 pr-5 py-[10px] h-10"
            clipPathClassname="w-6 bg-white"
          />
          <KGButton
            text="Book a Demo"
            type="Secondary"
            id="book-demo2-button-clip"
            className="pl-4 pr-5 py-[10px] h-10"
            clipPathClassname="w-6 bg-white"
          />
        </div>
      </div>
      <div>
        <div className={`bg-system-_50 h-[1px] mt-[28.5px] mb-[24.5px] md:mb-12 md:mt-0`} />
        <div className="flex flex-col gap-8">
          <Thumbtack text="AS FEATURED IN" />
          <Brands />
        </div>
      </div>
      <ClipPath id="edge-folding" className="w-[100px] bg-bg_gray" />
    </section>
  )
}
