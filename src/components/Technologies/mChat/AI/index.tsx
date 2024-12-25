import React from 'react'
import { twJoin } from 'tailwind-merge'
import AIPoweredChatbots from './AIPoweredChatbots'
import AIDrivenInsights from './AIDrivenInsights'
import SeamlessIntegrations from './SeamlessIntegrations'

export default function AI() {
  return (
    <section
      title="AI-at-the-Core."
      className="px-[clamp(1rem,2.78vw,4.44rem)] py-[clamp(3rem,8.33vw,13.33rem)] bg-ai rounded-3xl mt-[clamp(0.5rem,1.46vw,2.33rem)]"
    >
      <div className="flex flex-col gap-[clamp(0.5rem,1.94vw,3.11rem)] text-white ">
        <h1 className="font-instrument-sans-700 text-[clamp(1.75rem,3.33vw,5.33rem)] leading-[1.29] md:leading-[1.083] text-center">
          <span className="text-primary-cyan">AI</span> at the Core.
        </h1>
        <h4 className="text-center text-[clamp(0.875rem,1.25vw,2rem)] leading-[1.565]">
          We’ve built mChat to harness the power of AI
        </h4>
      </div>
      <div className="grid mt-[clamp(1.5rem,7.15vw,11.44rem)] mx-[clamp(0rem,7.5vw,12rem)] gap-[clamp(0.5rem,1.39vw,2.22rem)]">
        <AIPoweredChatbots />
        <AIDrivenInsights />
        <SeamlessIntegrations />
      </div>
    </section>
  )
}
