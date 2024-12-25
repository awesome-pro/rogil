import ClipPath from '@/components/ClipPath'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

export default function Container({
  title,
  text,
  image,
}: {
  title: string
  text: string
  image: StaticImageData
}) {
  return (
    <div className="aspect-[0.741] relative bg-white rounded-3xl">
      <div className="flex flex-col gap-[clamp(0.5rem,1.11vw,1.78rem)] px-[clamp(0.5rem,3.33vw,5.33rem)] pt-[clamp(0.5rem,3.33vw,5.33rem)]">
        <h2 className="font-instrument-sans-600 text-system-_100 text-[clamp(0.5rem,1.944vw,3.11rem)] leading-normal">
          {title}
        </h2>
        <p className="text-system-_80 text-[clamp(0.5rem,1.11vw,1.78rem)] leading-normal">{text}</p>
      </div>
      <div className="absolute bottom-0 right-0 w-full aspect-[1.345]">
        <Image
          src={image}
          alt={`${title}-image`}
          loading="lazy"
          placeholder="empty"
          sizes="(max-width: 768px) 100vw, 50vw"
          fill
        />
      </div>
      <ClipPath id="edge-folding" className="w-[clamp(3rem,6.94vw,11.11rem)] bg-bg_gray" />
    </div>
  )
}
