import ClipPath from '@/components/ClipPath'
import Image from 'next/image'
import React from 'react'
import buildsTrust from '@/assets/mChat/builds-trust.png'

export default function BuildsTrust() {
  return (
    <section
      title="mChat-builds-trust"
      className="relative mt-[clamp(0.5rem,0.6vw,0.89rem)] bg-buildsTrust aspect-[1.277] rounded-3xl pt-[clamp(4rem,6.94vw,11.11rem)]"
    >
      <div className="font-instrument-sans-700 text-center text-[clamp(2rem,3.33vw,5.33rem)] leading-tight">
        <h1 className="text-hover-system_40">The Chat That</h1>
        <h1 className="text-primary-blue">Builds Trust.</h1>
      </div>
      <ClipPath id="edge-folding" className="w-[clamp(3rem,6.94vw,11.11rem)] bg-bg_gray" />
      <div className="flex px-[clamp(1rem,2.78vw,4.44rem)] gap-[clamp(1rem,1.94vw,3.11rem)] absolute bottom-0 left-0 h-[72.8%]">
        <div className="flex-1 aspect-[0.941] relative">
          <Image
            src={buildsTrust}
            alt="mChat-builds-trust-image"
            loading="lazy"
            placeholder="empty"
            sizes="(max-width: 768px) 100vw, 50vw"
            fill
          />
        </div>
        <div className="flex-1">
          <div className="flex-1 flex flex-col justify-center gap-[clamp(3rem,5.56vw,8.89rem)] w-[clamp(15rem,28.75vw,46rem)] h-full py-[clamp(6rem,11.46vw,18.33rem)]">
            <h3 className="font-instrument-sans-600 text-system-_100 text-[clamp(1rem,1.944vw,3.11rem)] leading-normal">
              Imagine a chat so secure,
              <br /> so smart, and so smooth that it doesn’t just enable conversations – it
              transforms them.
            </h3>
            <div className="flex flex-col gap-[clamp(0.5rem,1.11vw,1.78rem)] text-system-_80 text-[clamp(0.5rem,1.25vw,2rem)] leading-[1.56]">
              <p>
                mChat isn’t just another chat system. It’s <br /> a
                <span className="text-system-_100 font-bold"> trust-powered communication hub</span>{' '}
                built on our leading digital identity.
              </p>
              <p>
                <span className="text-system-_100 font-bold">Secure. Compliant. Binding.</span>{' '}
                Every message carries meaning, and every interaction builds trust.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
