import React from 'react'
import Thumbtack from '../Thumbtack'
import financial from '@/assets/IndustrySolutions/financial.png'
import healthcare from '@/assets/IndustrySolutions/healthcare.png'
import insurance from '@/assets/IndustrySolutions/insurance.png'
import publicAdministration from '@/assets/IndustrySolutions/public-administration.png'
import KGButton from '@/components/KGButton'
import { twJoin } from 'tailwind-merge'
import Image from 'next/image'
import ClipPath from '@/components/ClipPath'

const IndustriesTexts = [
  {
    title: 'Financial Services',
    image: financial,
    text: 'Integrate strong authentication, secure communication, and digital signatures for mobile banking and financial transactions.',
  },
  {
    title: 'Public Administration',
    image: publicAdministration,
    text: 'Enable citizens to access city services, submit secure digital applications, and communicate with government agencies through a single platform.',
  },
  {
    title: 'Healthcare',
    image: healthcare,
    text: 'Protect patient data with strong identity solutions, enable secure communication between patients and healthcare providers, and utilize digital signatures for consent forms.',
  },
  {
    title: 'Insurance',
    image: insurance,
    text: 'Automate claims processing and policy management with digital signatures and identity-based payments.',
  },
]

export default function IndustrySolutions() {
  return (
    <section
      className="bg-system-_100 rounded-3xl flex flex-col pt-10 pb-[53.5px] px-4 md:p-10 mt-10 md:mt-5 relative"
      title="home-industry-solutions"
    >
      <Thumbtack
        text="INDUSTRY SOLUTIONS"
        className="mx-auto bg-invert-white20"
        classNameText="text-invert-white60"
      />
      <h1
        className={twJoin(
          'font-instrument-sans-700 text-white text-3xl leading-[1.33]',
          'md:text-[40px] md:leading-[1.3] px-2 md:px-0 mx-auto mt-6 md:mt-7 text-center',
        )}
      >
        Applications of Our Technologies Across Industries
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-[42px] gap-x-5 mt-[52px] md:mt-10">
        {IndustriesTexts.map((industry, index) => (
          <div className="flex flex-col object-contain bg-transparent" key={industry.title}>
            <div className="relative w-full aspect-[1.33]">
              <Image
                src={industry.image}
                alt={industry.title}
                loading="lazy"
                placeholder="blur"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="flex flex-col gap-4 md:gap-3 mt-6">
              <h3 className="font-instrument-sans-600 text-white text-xl leading-[1.2]">
                {industry.title}
              </h3>
              <p className="text-text_gray text-base">{industry.text}</p>
            </div>
            <KGButton
              text="Learn More"
              type="Secondary"
              id={`industry-solutions-button-clip-${index + 1}`}
              className="w-fit mt-6 pr-5"
              clipPathClassname="w-6 bg-system-_100"
            />
          </div>
        ))}
      </div>
      <ClipPath id="edge-folding" className="w-[100px] bg-bg_gray" />
    </section>
  )
}
