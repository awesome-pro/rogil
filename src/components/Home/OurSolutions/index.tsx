import React from 'react'
import Thumbtack from '../Thumbtack'
import OneApp4All from './OneApp4All'
import OneId4All from './OneId4All'
import ClipPath from '@/components/ClipPath'

export default function OurSolutions() {
  return (
    <section
      className="bg-white rounded-[18px] flex flex-col pt-10 pb-[105px] px-4 md:p-10 mt-10 md:mt-5 relative"
      title="home-our-solutions"
    >
      <Thumbtack text="OUR SOLUTIONS" className="mx-auto" />
      <h1 className="font-instrument-sans-700 text-system-_100 text-3xl leading-[1.33] md:text-[40px] md:leading-[1.3] text-center mx-auto mt-6 md:mt-7">
        Build Your Ecosystem, Use Your Potential
      </h1>
      <OneApp4All />
      <OneId4All />
      <ClipPath id="edge-folding" className="w-[100px] bg-bg_gray block md:hidden" />
    </section>
  )
}
