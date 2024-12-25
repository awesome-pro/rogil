import Image from 'next/image'
import React from 'react'
import techMainBg from '@/assets/mChat/mChat-main-bg.png'
import mChatHero from '@/assets/mChat/mChat-hero.png'

export default function MChat() {
  return (
    <section title="mChat-hero" className="aspect-[1.42] relative pt-[clamp(4rem,6.94vw,11.11rem)]">
      <div className="absolute top-0 left-0 w-full aspect-[1.7]">
        <Image
          src={techMainBg}
          alt="mChat-main-bg"
          loading="lazy"
          placeholder="empty"
          sizes="(max-width: 768px) 100vw, 100vw"
          fill
        />
      </div>
      <Image
        src={mChatHero}
        alt="mChat-hero"
        loading="lazy"
        placeholder="empty"
        sizes="(max-width: 768px) 100vw, 100vw"
        className="absolute bottom-0 left-0"
      />
      <div className="flex flex-col z-50 gap-[clamp(1rem,1.94vw,3.11rem)] relative">
        <h1 className="font-instrument-sans-700 text-center text-system-_100 text-[clamp(2rem,3.48vw,5.56rem)] leading-normal">
          mChat
        </h1>
        <h3 className="font-instrument-sans-600 text-[clamp(1rem,1.67vw,2.67rem)] leading-normal text-system-_80 text-center">
          Communication Reimagined: Secure. Intelligent. Boundless.
        </h3>
      </div>
    </section>
  )
}
