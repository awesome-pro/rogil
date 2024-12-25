import React from 'react'
import image from '@/assets/MainImage/HeroImage.png'
import Image from 'next/image'

export default function MainImage() {
  return (
    <div className="absolute left-0 top-0 z-50 w-[90.93%] md:w-[45%] 2md:w-[43.2%] aspect-square">
      <Image
        src={image}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        alt="secure-superapp-main-image"
        loading="lazy"
        placeholder="empty"
        fill
      />
    </div>
  )
}
