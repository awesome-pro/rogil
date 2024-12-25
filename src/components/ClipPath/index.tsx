import React from 'react'
import { twMerge } from 'tailwind-merge'

export default function ClipPath({ className, id }: { className?: string; id: string }) {
  return (
    <div
      className={twMerge(`aspect-square absolute right-0 bottom-0 z-50`, className)}
      style={{
        clipPath: `url(#${id})`,
      }}
    >
      <svg width="0" height="0">
        <defs>
          <clipPath id={id} clipPathUnits="objectBoundingBox">
            <path
              d="
            M1 0
            V1
            H0
            C0.03 0.99 0.06 0.98 0.11 0.95
            L0.972 0.08
            C0.99 0.04 0.995 0.02 1 0
            Z
      "
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}
