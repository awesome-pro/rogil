import Image, { StaticImageData } from 'next/image'

export default function Container({
  image,
  title,
  text,
}: {
  image: StaticImageData
  title: string
  text: string
}) {
  return (
    <div className="flex flex-col gap-6 md:gap-7">
      <div className="relative w-full aspect-[1.339]">
        <Image
          src={image}
          alt={title}
          loading="lazy"
          placeholder="blur"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-instrument-sans-700 text-xl leading-[1.2] font-semibold text-white">
          {title}
        </h3>
        <p className="text-text_gray text-base">{text}</p>
      </div>
    </div>
  )
}
