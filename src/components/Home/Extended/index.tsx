'use client'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Extended() {
  const pathname = usePathname()

  return pathname === '/' ? (
    <div className="absolute left-0 top-0 w-[calc((100%-2560px)/2+10px)] h-[894.5px] bg-[#2862F7] extension" />
  ) : null
}
