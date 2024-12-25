import IcArrowRight from '@/assets/components/IcArrowRight'
import Sparkles from '@/assets/components/Sparkles'
import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import ClipPath from '../ClipPath'
import { Button } from '@nextui-org/react'

export default function KGButton({
  className = '',
  text,
  type,
  id,
  clipPathClassname,
}: {
  className?: string
  clipPathClassname?: string
  text: string | ReactNode
  type: 'Primary' | 'Secondary' | 'Tertiary' | 'Ai'
  id: string
}) {
  return (
    <Button
      className={twMerge(
        'relative flex gap-0 lg:py-[14px] lg:pl-6 lg:pr-7 lg:h-12',
        'text-base leading-tight font-semibold',
        'group hover:!opacity-100 rounded-lg rounded-tr-md',
        {
          Tertiary: 'bg-system-_100 hover:bg-hover-system_100 text-white',
          Secondary: 'bg-system-_40 text-system-_100 hover:bg-hover-system_100 hover:text-white',
          Primary: 'bg-primary-blue text-white hover:bg-hover-primary_blue',
          Ai: 'bg-primary-blue text-white hover:bg-hover-primary_blue items-center',
        }[type],
        className,
      )}
    >
      <span>{text}</span>
      {type === 'Ai' ? (
        <span className="flex items-center ml-[10px]">
          <Sparkles className="transition-transform duration-1000 group-hover:scale-125 group-hover:rotate-90 group-hover:fill-bg_gray" />
        </span>
      ) : (
        <span className="transition-transform duration-300 transform group-hover:translate-x-1 ml-[10px]">
          <IcArrowRight />
        </span>
      )}
      <ClipPath id={id} className={clipPathClassname} />
    </Button>
  )
}
