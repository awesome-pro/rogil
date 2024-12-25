import React from 'react'
import oneOneLimitless from '@/assets/mChat/one-one-limitless.png'
import Image from 'next/image'

export default function OneOneLimitless() {
  return (
    <section
      title="one-conversation-one-solution-limitless-possibilities"
      className="relative mt-[clamp(3.75rem,8.33vw,13.31rem)] aspect-[4.658] rounded-3xl bg-primary-blue"
    >
      <Image
        src={oneOneLimitless}
        alt="limitless-possibilities-image"
        loading="lazy"
        placeholder="empty"
        sizes="(max-width: 768px) 100vw, 100vw"
      />
      <div className="absolute inset-0 flex items-center pl-[clamp(2rem,5.56vw,8.9rem)]">
        <h1 className="font-instrument-sans-500 text-[clamp(2rem,2.78vw,4.5rem)] leading-normal text-white">
          <u className="font-instrument-sans-700 underline-offset-8 decoration-[1.5px]">One</u>{' '}
          conversation.{' '}
          <u className="font-instrument-sans-700 underline-offset-8 decoration-[1.5px]">One</u>{' '}
          solution.{' '}<br/>
          <u className="font-instrument-sans-700 underline-offset-8 decoration-[1.5px]">
            Limitless
          </u>{' '}
          possibilities
        </h1>
      </div>
    </section>
  )
}
