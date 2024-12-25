import ClipPath from '@/components/ClipPath'
import Image from 'next/image'
import unparalleled from '@/assets/mChat/unparalleled.png'

export default function Unparalleled() {
  return (
    <section
      title="unparalleled-user-experience"
      className="relative mt-[clamp(3.75rem,8.33vw,13.31rem)] bg-white aspect-[1.42] rounded-3xl py-[clamp(2.5rem,4.17vw,6.63rem)] px-10 grid grid-cols-[1fr,1.19fr] gap-[clamp(0rem,1.46vw,2.33rem)]"
    >
      <div className="2md:pl-[clamp(5rem,7.5vw,12rem)] py-[clamp(2.5rem,4.17vw,6.63rem)] flex flex-col justify-between">
        <h1 className="font-instrument-sans-700 text-system-_100 text-[clamp(2rem,3.33vw,5.5rem)] leading-tight mr-[clamp(0px,1.32vw,2.11rem)]">
          <span className="text-primary-blue">Unparalleled</span>
          <br /> User Experience.
        </h1>
        <div className="flex flex-col gap-[clamp(3.75rem,5.56vw,9.06rem)]">
          <h2 className="font-instrument-sans-600 text-system-_100 text-[clamp(1.25rem,1.94vw,3.13rem)] leading-normal">
            Smooth. Seamless. Superior.
          </h2>
          <div className="text-system-_80 text-[clamp(1rem,1.25vw,2rem)] flex flex-col gap-[clamp(1.88rem,2.78vw,4.56rem)]">
            <p>
              mChat sets a new standard for user experience, outperforming every chat system out
              there.
            </p>
            <p>
              It’s designed for today&apos;s digital needs: intuitive, responsive, and built to delight.
              Your users will love how it feels. Your business will love what it achieves.
            </p>
          </div>
        </div>
      </div>
      <div className="relative">
        <Image
          src={unparalleled}
          alt="unparalleled-user-experience-image"
          loading="lazy"
          placeholder="empty"
          sizes="(max-width: 768px) 100vw, 66vw"
          fill
        />
      </div>
      <ClipPath id="edge-folding" className="w-[clamp(3rem,6.94vw,11.11rem)] bg-bg_gray" />
    </section>
  )
}
