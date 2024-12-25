import BusinessInsider from '@/assets/components/Brands/BusinessInsider'
import Cnet from '@/assets/components/Brands/Cnet'
import Forbes from '@/assets/components/Brands/Forbes'
import FrantfurterAllgemeine from '@/assets/components/Brands/FrantfurterAllgemeine'
import TheVerge from '@/assets/components/Brands/TheVerge'
import WirtschaftsWoche from '@/assets/components/Brands/WirtschaftsWoche'
import React from 'react'
import { twJoin } from 'tailwind-merge'

const logos = [
  { Component: Forbes },
  { Component: FrantfurterAllgemeine },
  { Component: TheVerge },
  { Component: Cnet },
  { Component: BusinessInsider },
  { Component: WirtschaftsWoche },
]

export default function Brands() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-x-2 gap-y-3 md:gap-7">
      {logos.map(({ Component }, index) => (
        <div key={index} className={twJoin('flex justify-center items-center')}>
          <Component />
        </div>
      ))}
    </div>
  )
}
