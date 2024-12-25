import React from 'react'
import Compliance from './Compliance'
import Security from './Security'

export default function SecurityAndCompliance() {
  return (
    <section
      className="bg-white rounded-[18px] flex flex-col pt-10 px-4 pb-[18px] md:p-10 mt-10 md:mt-5 gap-6 md:gap-[81px]"
      title="home-security-compliance"
    >
      <Compliance />
      <Security />
    </section>
  )
}
