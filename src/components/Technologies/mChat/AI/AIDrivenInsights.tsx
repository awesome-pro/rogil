import React from 'react'
import { twJoin } from 'tailwind-merge'

export default function AIDrivenInsights() {
  return (
    <div
      className={twJoin(
        'aspect-[1.137] flex flex-col gap-[clamp(1.5rem,3.33vw,5.33rem)]',
        'pl-[clamp(1.5rem,3.33vw,5.33rem)] pt-[clamp(1.5rem,3.33vw,5.33rem)]',
        'border border-white rounded-2xl relative',
      )}
    >
      <div>
        <h2 className="font-instrument-sans-600 text-[clamp(1.125rem,1.94vw,3.11rem)] leading-tight text-white">
          AI-driven Insights
        </h2>
        <p className="text-invert-white80 text-[clamp(0.5rem,1.11vw,1.78rem)] leading-normal">
          Real-time data to understand, predict, and engage your users better.
        </p>
      </div>
    </div>
  )
}
