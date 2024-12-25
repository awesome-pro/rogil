import Ticked from '@/assets/components/Ticked'
import KGButton from '@/components/KGButton'
import React from 'react'
import { twJoin } from 'tailwind-merge'
import oneid4all from '@/assets/OurSolutions/oneid4all.png'
import migrosbank from '@/assets/OurSolutions/migrosbank.png'
import Image from 'next/image'

const texts = [
  'Seamless integration of security functions into your apps.',
  'Flexibility in designing your user interface and user experience.',
  'Leverage all KOBIL GO technologies within your own infrastructure.',
]

export default function OneId4All() {
  return (
    <div className="mt-10 md:p-10 flex flex-col xl:flex-row gap-6 md:gap-10 md:border md:border-system-_50 md:rounded-[18px]">
      <div className="relative flex-1 aspect-square">
        <Image
          src={oneid4all}
          sizes="(max-width: 1280px) 100vw, 50vw"
          alt="oneid4all-image"
          loading="lazy"
          placeholder="blur"
          fill
        />
        <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 flex flex-col gap-1.5 md:gap-3 p-[13px] md:p-6 w-[73.56%] rounded-xl z-50 bg-white">
          <span
            className={twJoin(
              'bg-system-_30 rounded-full px-1.5 py-0.5 md:px-3 md:py-1 text-system-_100 w-fit',
              'text-[7.5px] leading-[1.43] md:text-md font-bold md:tracking-[0.56px] tracking-[0.302px]',
            )}
          >
            CASE STUDY
          </span>
          <p className="text-system-_80 text-md leading-[1.08] md:text-xl font-medium">
            Built a comprehensive banking Super App using our SDK, enhancing customer experience
            with secure digital identity and secure communication.
          </p>
        </div>
        <div className="absolute top-8 left-8 z-50 w-[22.202%] h-[10.53%]">
          <Image
            src={migrosbank}
            alt="migrosbank-image"
            sizes="(max-width: 1280px) 10vw, 5vw"
            loading="lazy"
            placeholder="empty"
            fill
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-between gap-8">
        <div className="flex flex-col gap-4 md:gap-5">
          <h2 className="font-instrument-sans-600 text-system-_100 text-xl md:text-4xl md:leading-normal">
            KOBIL OneID4All™
          </h2>
          <p className="text-system-_80 text-md leading-[1.57] md:text-base">
            Integrate our technologies directly into your existing applications with our Software
            Development Kit (SDK).
          </p>
        </div>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4 md:gap-5">
            {texts.map((text) => (
              <div className="flex items-center gap-3" key={text}>
                <Ticked className="mb-auto shrink-0" />
                <span className="text-system-_100 text-md leading-[1.57] md:text-lg md:leading-6 md:font-medium">
                  {text}
                </span>
              </div>
            ))}
          </div>
          <KGButton
            text="Learn More about OneID4All™"
            type="Primary"
            id="oneid4all-button-clip"
            className="md:w-fit pr-8"
            clipPathClassname="w-6 bg-white"
          />
        </div>
      </div>
    </div>
  )
}
