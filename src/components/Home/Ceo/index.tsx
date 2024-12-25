import React from 'react'
import { twJoin } from 'tailwind-merge'

export default function Ceo() {
  return (
    <section
      className="bg-white rounded-[18px] flex items-center p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 mt-10 md:mt-5 ismet-koyun aspect-[0.483] md:aspect-[2.67] lg:aspect-[3] xl:aspect-[3.2] relative"
      title="home-ceo"
    >
      <div
        className={twJoin(
          'p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col gap-6 sm:gap-8 md:gap-10 absolute bottom-3 left-3 md:bottom-0 md:left-0',
          'md:relative h-fit md:h-full bg-white w-[calc(100%-24px)] md:w-[49.39%] lg:w-[45%] xl:w-[40%]',
        )}
        style={{
          clipPath: `url(#ceo)`,
        }}
      >
        <h1
          className={twJoin(
            'flex-1 font-instrument-sans-600 text-system-_100',
            'text-xl leading-[1.6] md:text-2xl lg:text-3xl xl:text-[40px] 2xl:text-[48px] xl:leading-[1.2]',
          )}
        >
          “Focus on your business and save both time and money, whether you&apos;re a startup or an
          established company.”
        </h1>
        <div className="flex flex-col gap-1 sm:gap-2 text-system-_100">
          <h4 className="text-base sm:text-lg md:text-xl xl:text-2xl leading-tight font-semibold">Ismet Koyun</h4>
          <h5 className="text-sm sm:text-base md:text-lg xl:text-xl leading-[1.4]">Founder & CEO, KOBIL</h5>
        </div>
      </div>
      <svg width="0" height="0">
        <defs>
          <clipPath id="ceo" clipPathUnits="objectBoundingBox">
            <path
              d="M0 0.047
          C0 0.02 0.02 0 0.033 0
          H0.967
          C0.98 0 1 0.02 1 0.047
          V0.75
          C1 0.77 1 0.8 0.98 0.82
          L0.84 0.98
          C0.82 1 0.8 1 0.8 1
          H0.033
          C0.02 1 0 0.98 0 0.953
          V0 0.047
          Z"
            />
          </clipPath>
        </defs>
      </svg>
    </section>
  )
}
