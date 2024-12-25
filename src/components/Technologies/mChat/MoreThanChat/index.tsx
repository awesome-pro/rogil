import React from 'react'
import Container from './Container'
import automateBusiness from '@/assets/mChat/automate-business.png'
import driveRealTiem from '@/assets/mChat/drive-real-time.png'
import transformCustomer from '@/assets/mChat/transform-customer.png'

export default function MoreThanChat() {
  return (
    <section title="More Than Chat" className="mt-[clamp(3.75rem,8.33vw,13.31rem)] px-[clamp(0rem,2.78vw,4.5rem)]">
      <div className="flex justify-between gap-[clamp(2rem,2.78vw,4.5rem)]">
        <h1 className="flex-1 font-instrument-sans-700 text-system-_100 text-[clamp(2rem,2.78vw,4.5rem)] leading-[1.3]">
          More Than Chat. A Business Revolution.
        </h1>
        <p className="flex-1 text-system-_80 text-[clamp(1rem,1.25vw,2rem)] leading-[1.56]">
          mChat automates manual processes, empowers real-time support, and delivers next-level
          marketing directly to your users – all in one place.
        </p>
      </div>
      <div className="mt-[clamp(3.5rem,4.17vw,6.67rem)] grid grid-cols-3 gap-[clamp(1rem,1.39vw,2.22rem)]">
        <Container
          title="Automate Business Process"
          text="Replace emails and manual workflows with instant, AI-driven interactions."
          image={automateBusiness}
        />
        <Container
          title="Transform Customer Support"
          text="Help your customers in real time with intelligent bots and secure chats."
          image={transformCustomer}
        />
        <Container
          title="Drive Real-Time Marketing"
          text="Reach users directly and efficiently – with personalized, AI-powered communication."
          image={driveRealTiem}
        />
      </div>
    </section>
  )
}
