import React from 'react'
import Thumbtack from '../Thumbtack'
import PSD2 from '@/assets/SecurityAndCompliance/PSD2.png'
import AICPASOC2 from '@/assets/SecurityAndCompliance/AICPA-SOC2.png'
import GDPR from '@/assets/SecurityAndCompliance/GDPR.png'
import ISO27001 from '@/assets/SecurityAndCompliance/ISO-27001.png'
import eIDAS from '@/assets/SecurityAndCompliance/eIDAS.png'
import { twJoin } from 'tailwind-merge'
import NextImage from 'next/image'
import compliance from '@/assets/SecurityAndCompliance/SecAndCompMainImage.png'
import { Image } from '@nextui-org/react'

const certificates = [
  { name: 'GDPR', image: GDPR, sizes: { w: 80, h: 80 } },
  { name: 'PSD2', image: PSD2, sizes: { w: 80, h: 80 } },
  { name: 'eIDAS', image: eIDAS, sizes: { w: 163, h: 38.01 } },
  { name: 'ISO 27001', image: ISO27001, sizes: { w: 80, h: 80 } },
  { name: 'AICPA SOC 2', image: AICPASOC2, sizes: { w: 80, h: 80 } },
]

export default function Compliance() {
  return (
    <div className="flex flex-col-reverse xl:flex-row gap-8 md:gap-5">
      <div className="flex-1 flex flex-col gap-[25px] md:gap-7 justify-between">
        <div className="flex flex-col gap-[25px] md:gap-7">
          <Thumbtack text="SECURITY AND COMPLIANCE" />
          <h1 className="font-instrument-sans-700 text-system-_100 text-3xl leading-[1.33] md:text-[40px] md:leading-[1.3]">
            Your Peace of Mind with Top Security and Compliance
          </h1>
          <p className="text-system-_80 text-sm leading-[1.57] md:text-lg">
            At KOBIL, we prioritize your security and compliance needs. Our platform adheres to the
            highest industry standards to ensure your data and transactions are protected.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-[31px] md:gap-10 md:w-[83%]">
          {certificates.map((certificate) => (
            <Image
              key={certificate.name}
              src={certificate.image.src}
              alt={certificate.name}
              loading="lazy"
              className={twJoin(
                certificate.name === 'eIDAS'
                  ? 'w-[128.5px] h-[30px] md:w-[163px] md:h-[38px]'
                  : 'w-[63px] h-[63px] md:w-[80px] md:h-[80px]',
              )}
            />
          ))}
        </div>
      </div>
      <div className="relative flex-1 aspect-square">
        <NextImage
          src={compliance}
          sizes="(max-width: 1280px) 100vw, 50vw"
          alt="security-compliance-image"
          loading="lazy"
          placeholder="empty"
          fill
        />
      </div>
    </div>
  )
}
