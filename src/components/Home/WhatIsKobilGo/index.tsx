import React from 'react'
import Thumbtack from '../Thumbtack'
import { twJoin } from 'tailwind-merge'
import ClipPath from '@/components/ClipPath'

export default function WhatIsKobilGo() {
  return (
    <section
      className="bg-white rounded-3xl flex flex-col px-6 md:px-10 pb-28 md:pb-10 2md:pb-40 pt-10 mt-5 relative"
      title="home-what-is-kobil-go"
    >
      <div className="flex flex-col gap-8">
        <Thumbtack text="WHAT IS KOBIL SECURE SUPERAPP PLATFORM?" />
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          <h1
            className={twJoin(
              'font-instrument-sans-700',
              'flex-1 text-system-_100 text-[30px] 2md:text-[40px] 2md:leading-[1.3]',
            )}
          >
            One Platform, All the Technologies for Your Application
          </h1>
          <div className="flex-1 text-system-_80 text-sm leading-[1.57] 2md:text-lg 2md:leading-[1.75]">
            KOBIL Secure SuperApp Platform is a cloud-based Super App platform that enables you to
            integrate strong digital identity, secure chat, digital signatures, and payments into
            your mobile applications—instantly deployable with no additional infrastructure. Without
            any effort, you are secure and compliant, giving you complete peace of mind.
          </div>
        </div>
      </div>
      <ClipPath id="edge-folding" className="w-[100px] bg-bg_gray" />
    </section>
  )
}
