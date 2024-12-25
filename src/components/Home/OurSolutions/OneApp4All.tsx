import Ticked from '@/assets/components/Ticked'
import KGButton from '@/components/KGButton'
import Image from 'next/image'
import React from 'react'
import { twJoin } from 'tailwind-merge'
import oneapp4all from '@/assets/OurSolutions/oneapp4all.png'
import istanbul34 from '@/assets/OurSolutions/istanbul34.png'

const texts = [
  'Fast go-to-market with a ready-to-use app.',
  'Customizable to your corporate design and brand identity.',
  'Add services that run on all platforms based on web technology.',
]

export default function OneApp4All() {
  return (
    <div className="mt-10 md:p-10 flex flex-col-reverse xl:flex-row gap-6 md:gap-10 md:border md:border-system-_50 md:rounded-[18px]">
      <div className="flex-1 flex flex-col justify-between gap-8">
        <div className="flex flex-col gap-4 md:gap-5">
          <h2 className="font-instrument-sans-600 text-system-_100 text-xl md:text-4xl md:leading-normal">
            KOBIL OneAPP4All™
          </h2>
          <p className="text-system-_80 text-md leading-[1.57] md:text-base">
            Launch your custom branded ready-to-use Super App and add mini apps for services.
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
            text="Learn More about OneAPP4All™"
            type="Primary"
            id="oneapp4all-button-clip"
            className="md:w-fit pr-8"
            clipPathClassname="w-6 bg-white"
          />
        </div>
      </div>
      <div className="relative flex-1 aspect-square">
        <Image
          src={oneapp4all}
          sizes="(max-width: 1280px) 100vw, 50vw"
          alt="oneapp4all-image"
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
            Our branded Super App for Istanbul, providing citizens with access to city services,
            information, and communication—all in one platform.
          </p>
        </div>
        <div className="absolute top-8 left-8 z-50 w-[11.19%] h-[15.57%]">
          <Image
            src={istanbul34}
            sizes="(max-width: 1280px) 10vw, 5vw"
            alt="istanbul34-image"
            loading="lazy"
            placeholder="empty"
            fill
          />
        </div>
      </div>
    </div>
  )
}
