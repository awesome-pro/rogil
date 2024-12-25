import React from 'react'
import endtoendencryp from '@/assets/SecurityAndCompliance/end-to-end-encryption.png'
import multifactorauth from '@/assets/SecurityAndCompliance/multi-Factor-authentication.png'
import regularsecurityaudits from '@/assets/SecurityAndCompliance/regular-security-audits.png'
import securedatastorage from '@/assets/SecurityAndCompliance/secure-data-storage.png'
import { divider, Image } from '@nextui-org/react'

const securityData = [
  {
    image: endtoendencryp,
    boldText: 'End-to-End Encryption.',
    lightText: 'Secure all communications and data transfers.',
  },
  {
    image: multifactorauth,
    boldText: 'Multi-Factor Authentication.',
    lightText: 'Enhance security with additional authentication layers.',
  },
  {
    image: securedatastorage,
    boldText: 'Secure Data Storage.',
    lightText: 'Protect sensitive information with robust storage solutions.',
  },
  {
    image: regularsecurityaudits,
    boldText: 'Regular Security Audits.',
    lightText: 'Protect sensitive information with robust storage solutions.',
  },
]

export default function Security() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-7">
      {securityData.map((security) => (
        <div
          key={security.boldText}
          className="flex-1 flex flex-col gap-4 border border-system-_50 rounded-[18px] p-4 md:p-6"
        >
          <Image
            src={security.image.src}
            alt={security.boldText}
            loading="lazy"
            width={48}
            height={48}
          />
          <p className="text-system-_100 text-base md:text-lg">
            <span className="font-bold">{security.boldText}</span> {security.lightText}
          </p>
        </div>
      ))}
    </div>
  )
}
