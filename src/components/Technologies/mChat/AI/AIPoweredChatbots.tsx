import React from 'react'
import { twJoin } from 'tailwind-merge'
import hiThere from '@/assets/mChat/hi-there.png'
import creditLimit from '@/assets/mChat/credit-limit.png'
import kobilAi from '@/assets/mChat/kobil-AI.png'
import Image from 'next/image'

export default function AIPoweredChatbots() {
  return (
    <div
      className={twJoin(
        'col-span-2 row-start-1 aspect-[2.316] flex flex-col md:flex-row gap-[clamp(1.125rem,2.78vw,4.44rem)]',
        'pl-[clamp(1.5rem,3.33vw,5.33rem)] pt-[clamp(1.5rem,3.33vw,5.33rem)] pr-[clamp(0rem,4.38vw,7rem)]',
        'border border-white rounded-2xl relative',
      )}
    >
      <div className="flex-1 flex flex-col gap-[clamp(2.063rem,3.125vw,5rem)]">
        <div className="flex flex-col gap-[clamp(0.3rem,1.11vw,1.78rem)] w-[67.73%]">
          <h2 className="font-instrument-sans-600 text-[clamp(1.125rem,1.94vw,3.11rem)] leading-tight text-white">
            AI-powered Chatbots
          </h2>
          <p className="text-invert-white80 text-[clamp(0.5rem,1.11vw,1.78rem)] leading-normal">
            Automate and scale support with natural, intelligent responses.
          </p>
        </div>
        <div className="flex-1 flex gap-[clamp(0.56rem,2.78vw,4.44rem)] overflow-hidden">
          <div className="flex-1 relative">
            <Image
              src={hiThere}
              alt="AI-powered-chatbot-image-1"
              loading="lazy"
              placeholder="empty"
              sizes="(max-width: 768px) 50vw, 40vw"
            />
          </div>
          <div className="h-[75.6%] aspect-[1.249] relative overflow-hidden">
            <Image
              src={creditLimit}
              alt="AI-powered-chatbot-image-2"
              loading="lazy"
              placeholder="empty"
              sizes="(max-width: 768px) 50vw, 40vw"
              //   className="object-left-top w-auto"
              fill
            />
          </div>
        </div>
      </div>
      <div className="aspect-[2.05] w-[clamp(5rem,20.56vw,32.89rem)] relative">
        <Image
          src={kobilAi}
          alt="AI-powered-chatbot-image-3"
          loading="lazy"
          placeholder="empty"
          sizes="(max-width: 768px) 50vw, 40vw"
        />
      </div>
      {/* <div className="absolute -bottom-[calc(clamp(3rem,6.94vw,11.11rem)*1.414/2)] right-0 w-[clamp(3rem,6.94vw,11.11rem)] aspect-square border-l border-white origin-bottom-right transform rotate-45 z-50 bg-ai" /> */}
    </div>
  )
}
