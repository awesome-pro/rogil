import React from 'react'
import Thumbtack from '../Thumbtack'
import KGButton from '@/components/KGButton'
import mIDentity from '@/assets/Technologies/mIDentity.png'
import mChat from '@/assets/Technologies/mChat.png'
import mSign from '@/assets/Technologies/mSign.png'
import mPay from '@/assets/Technologies/mPay.png'
import Container from './Container'
import ClipPath from '@/components/ClipPath'

const technologies = [
  {
    Component: mIDentity,
    title: 'mIDentity',
    text: 'Securely verify and authenticate users with our leading identity solutions for trusted digital interactions.',
  },
  {
    Component: mChat,
    title: 'mChat',
    text: 'Integrate encrypted chats and messages into your app for secure and binding conversations.',
  },
  {
    Component: mSign,
    title: 'mSign',
    text: 'Enable legally binding electronic signatures directly in your application to accelerate business processes.',
  },
  {
    Component: mPay,
    title: 'mPay',
    text: 'Offer seamless and secure payment processes directly linked to your users’ digital identities.',
  },
]

export default function OurTechnologies() {
  return (
    <section
      className="bg-system-_100 rounded-[18px] flex flex-col pt-[50px] pb-[98.5px] px-4 md:p-10 mt-5 relative"
      title="home-our-technologies"
    >
      <Thumbtack
        text="OUR TECHNOLOGIES"
        className="bg-invert-white20"
        classNameText="text-invert-white60"
      />
      <div className="flex flex-col md:flex-row gap-6 md:gap-4 2md:gap-10 mt-6 md:mt-7">
        <h1 className="font-instrument-sans-700 flex-1 text-white text-2xl md:text-[40px] md:leading-[1.3]">
          The Building Blocks to Secure Your Business
        </h1>
        <div className="flex-1 flex md:justify-end">
          <KGButton
            text={
              <>
                <span className="hidden sm:inline">Learn More about Technologies</span>
                <span className="sm:hidden">Learn More</span>
              </>
            }
            type="Primary"
            className="md:mt-4 pr-7"
            id="technologies-button-clip"
            clipPathClassname="w-6 bg-system-_100"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-5 md:gap-y-14 mt-10">
        {technologies.map((tech) => (
          <Container key={tech.title} image={tech.Component} text={tech.text} title={tech.title} />
        ))}
      </div>
      <ClipPath id="edge-folding" className="w-[100px] bg-bg_gray block md:hidden" />
    </section>
  )
}
