import React from 'react'
import { twMerge } from 'tailwind-merge'

export default function Thumbtack({
  text,
  className,
  classNameText,
}: {
  text: string
  className?: string
  classNameText?: string
}) {
  return (
    <div
      className={twMerge(
        'flex items-center bg-system-_30 gap-[10px] rounded-full w-fit px-3 py-1',
        className,
      )}
    >
      <div className="w-3 h-3 rounded-full bg-primary-cyan" />
      <span
        className={twMerge('text-system-_70 text-xs tracking-[0.48px] font-bold', classNameText)}
      >
        {text}
      </span>
    </div>
  )
}
