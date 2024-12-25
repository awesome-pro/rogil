import React from 'react'
import fingerprints from '@/assets/Cta/fingerprint.png'
import cta_mobile from '@/assets/Cta/cta-mobile.png'
import KGButton from '@/components/KGButton'
import Image from 'next/image'

export default function Cta() {
  return (
    <section
      className="rounded-3xl flex flex-col mt-10 md:mt-5 aspect-[0.3496] md:aspect-[2.27] cta relative"
      title="home-title"
    >
      <div className="w-[63.82%] md:w-[22%] absolute right-0 bottom-[11%] md:top-[20%] z-50">
        <Image
          src={fingerprints}
          alt="security-fingerprints"
          loading="lazy"
          sizes="(max-width: 768px) 64vw, 22vw"
          placeholder="blur"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[70%] md:hidden z-40 shrink-0">
        <Image
          src={cta_mobile}
          alt="cta-mobile-design"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 0vw"
          placeholder="blur"
          fill
        />
      </div>
      <div className="mt-10 mx-4 sm:mx-8 md:mr-0 md:w-[46.32%] md:my-auto md:ml-[10.88%] z-[100]">
        <h1 className="font-instrument-sans-700 text-white text-3xl leading-[1.33] 2md:text-[40px] 2md:leading-[1.3]">
          Embark on Your Digital Journey with Our Solution
        </h1>
        <p className="mt-6 2md:mt-7 text-invert-white80 text-sm leading-[1.57] md:text-base 2md:text-lg">
          See how OneID4All™ and OneAPP4All™ can elevate your business to the next level.
        </p>
        <div className="mt-6 2md:mt-12 flex flex-col md:flex-row gap-3">
          <KGButton
            text="Learn More"
            type="Tertiary"
            id={`cta-book-a-demo-button-clip`}
            className="px-8 h-12"
            clipPathClassname="w-6 bg-bg_purple_cyan md:bg-[#3C4DDC]"
          />
          <KGButton
            text="Contact Sales"
            type="Secondary"
            id={`cta-contact-sales-button-clip`}
            className="pr-7 pl-[26.74px] h-12"
            clipPathClassname="w-6 bg-bg_purple_cyan md:bg-[#3C4DDC]"
          />
        </div>
      </div>
    </section>
  )
}
